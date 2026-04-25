import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-[var(--navy-deep)] text-[var(--ivory)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-topo opacity-[0.07] mix-blend-screen" />

      <div className="relative px-6 lg:px-16 pt-32 lg:pt-40 pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Massive headline */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[var(--gold)]">Parlons projet</span>
              </div>
              <p className="mt-8 text-[var(--ivory)]/70 leading-relaxed">
                Une demande de devis, un cahier des charges, un sourcing complexe ? Nos équipes
                répondent sous 24h ouvrées.
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display-xl text-[12vw] lg:text-[8vw] xl:text-[10rem] text-[var(--ivory)] leading-[0.85]">
                Parlez-nous de
                <br />
                <span className="text-[var(--gold)]">votre besoin.</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-0">
            {/* Contact methods */}
            <div className="lg:col-span-5 border-t border-[var(--gold)]/20">
              {[
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+212 661 65 60 42",
                  href: "tel:+212661656042",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Business",
                  value: "+212 661 65 60 42",
                  href: "https://wa.me/212661656042",
                },
                {
                  icon: Mail,
                  label: "Email commercial",
                  value: "contact@baraneinvest.com",
                  href: "mailto:contact@baraneinvest.com",
                },
                { icon: MapPin, label: "Siège social", value: "Casablanca · Maroc" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-between py-6 border-b border-[var(--gold)]/20 group hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <Icon className="h-5 w-5 text-[var(--gold)]" />
                    <div>
                      <div className="eyebrow text-[var(--ivory)]/50">{label}</div>
                      <div className="mt-1 font-display text-2xl text-[var(--ivory)] group-hover:text-[var(--gold)] transition-colors">
                        {value}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[var(--ivory)]/30 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            <div className="lg:col-span-1" />

            {/* Form */}
            <div className="lg:col-span-6 mt-16 lg:mt-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-[var(--ivory)] text-[var(--navy)] p-8 lg:p-12 relative"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <h3 className="font-display text-3xl lg:text-4xl text-[var(--navy)] leading-none">
                    Demande de devis
                  </h3>
                  <span className="num-marker">→</span>
                </div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="font-display text-5xl text-[var(--gold)] mb-4">Merci.</div>
                    <p className="text-[var(--graphite)]">
                      Demande envoyée. Nos équipes vous recontactent sous 24h ouvrées.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Nom complet *"
                        required
                        className="h-14 bg-transparent border-0 border-b border-[var(--navy)]/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--gold)] focus-visible:border-b-2 placeholder:text-[var(--navy)]/50"
                      />
                      <Input
                        placeholder="Société *"
                        required
                        className="h-14 bg-transparent border-0 border-b border-[var(--navy)]/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--gold)] focus-visible:border-b-2 placeholder:text-[var(--navy)]/50"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email *"
                        required
                        className="h-14 bg-transparent border-0 border-b border-[var(--navy)]/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--gold)] focus-visible:border-b-2 placeholder:text-[var(--navy)]/50"
                      />
                      <Input
                        placeholder="Téléphone"
                        className="h-14 bg-transparent border-0 border-b border-[var(--navy)]/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--gold)] focus-visible:border-b-2 placeholder:text-[var(--navy)]/50"
                      />
                    </div>
                    <Input
                      placeholder="Secteur (mines, BTP, industrie...)"
                      className="h-14 bg-transparent border-0 border-b border-[var(--navy)]/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--gold)] focus-visible:border-b-2 placeholder:text-[var(--navy)]/50"
                    />
                    <Textarea
                      placeholder="Décrivez votre besoin : produits, volumes, délais, lieu de livraison..."
                      rows={4}
                      className="bg-transparent border-0 border-b border-[var(--navy)]/30 rounded-none px-0 pt-4 resize-none focus-visible:ring-0 focus-visible:border-[var(--gold)] focus-visible:border-b-2 placeholder:text-[var(--navy)]/50"
                    />
                    <Button variant="navy" size="xl" type="submit" className="w-full mt-6">
                      Envoyer la demande <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
