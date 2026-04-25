import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const assetsDir = path.resolve("dist/client/assets");
const outputFile = path.resolve("dist/client/index.html");
const serverEntryFile = path.resolve("dist/server/server.js");

async function main() {
  try {
    const serverEntryUrl = pathToFileURL(serverEntryFile).href;
    const { default: server } = await import(serverEntryUrl);
    const response = await server.fetch(new Request("http://localhost/"));
    const html = await response.text();
    if (!html || !html.includes("<html")) {
      throw new Error("Server-rendered HTML output is empty");
    }
    await fs.writeFile(outputFile, html, "utf8");
    return;
  } catch (error) {
    // Fallback minimal shell in case SSR export shape changes.
    const files = await fs.readdir(assetsDir);
    const indexJsFiles = files.filter((file) => /^index-.*\.js$/.test(file));
    const styleFiles = files.filter((file) => /^styles-.*\.css$/.test(file));

    if (indexJsFiles.length === 0) {
      throw error;
    }

    const indexCandidates = await Promise.all(
      indexJsFiles.map(async (file) => {
        const stat = await fs.stat(path.join(assetsDir, file));
        return { file, size: stat.size };
      }),
    );
    indexCandidates.sort((a, b) => b.size - a.size);
    const clientEntry = indexCandidates[0].file;
    const styleEntry = styleFiles[0];

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Barane Invest</title>
    ${styleEntry ? `<link rel="stylesheet" href="/assets/${styleEntry}" />` : ""}
  </head>
  <body>
    <script type="module" src="/assets/${clientEntry}"></script>
  </body>
</html>
`;
    await fs.writeFile(outputFile, html, "utf8");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
