import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, AlertTriangle, DollarSign, Home, Wrench, Shield, FileText, ChevronRight } from "lucide-react";

interface Clause {
  name: string;
  leaseLanguage: string;
  plainLanguage: string;
  tenantImpact: string;
}

interface LeaseSection {
  id: string;
  icon: React.ElementType;
  emoji: string;
  title: string;
  clauses: Clause[];
}

const sections: LeaseSection[] = [
  {
    id: "section-1",
    emoji: "🧾",
    icon: FileText,
    title: "Section 1 — Tenant Responsibility Shifts",
    clauses: [
      {
        name: "Snow Removal",
        leaseLanguage: "Landlord is not responsible for general snow removal, including sidewalks and main drives.",
        plainLanguage: "Tenants may be responsible for snow and ice conditions affecting access and safety.",
        tenantImpact: "Shifts responsibility for basic exterior safety conditions typically associated with property maintenance.",
      },
      {
        name: "Exterior Damage Responsibility",
        leaseLanguage: "Tenant responsible for damage to windows, doors, siding, and exterior elements regardless of cause.",
        plainLanguage: "You may be charged even if damage wasn't your fault.",
        tenantImpact: "Broad liability exposure for conditions outside tenant control.",
      },
    ],
  },
  {
    id: "section-2",
    emoji: "⚠️",
    icon: AlertTriangle,
    title: "Section 2 — Liability & Risk Allocation",
    clauses: [
      {
        name: "Security Disclaimer",
        leaseLanguage: "Landlord does not guarantee safety and tenant agrees not to rely on security measures.",
        plainLanguage: "If something happens, you're largely on your own.",
        tenantImpact: "Limits expectations around building security and reduces landlord liability.",
      },
      {
        name: "Injury & Property Damage",
        leaseLanguage: "Tenant indemnifies landlord for most incidents occurring on premises.",
        plainLanguage: "You may be responsible for damages or incidents, even in shared areas.",
        tenantImpact: "Significant transfer of legal and financial risk to tenant.",
      },
    ],
  },
  {
    id: "section-3",
    emoji: "💸",
    icon: DollarSign,
    title: "Section 3 — Financial Penalties & Fees",
    clauses: [
      {
        name: "Early Termination Fee",
        leaseLanguage: "Two months' rent required to break lease early.",
        plainLanguage: "Leaving early is expensive.",
        tenantImpact: "Limits flexibility if conditions become unlivable or circumstances change.",
      },
      {
        name: "Month-to-Month Premium",
        leaseLanguage: "$100/month additional fee after lease term.",
        plainLanguage: "Staying without renewing costs extra automatically.",
        tenantImpact: "Creates financial pressure to renew or vacate.",
      },
      {
        name: "Legal Costs as Rent",
        leaseLanguage: "Court costs and attorney fees are treated as additional rent.",
        plainLanguage: "If they take you to court, you may owe those costs as part of rent.",
        tenantImpact: "Increases financial exposure during disputes.",
      },
    ],
  },
  {
    id: "section-4",
    emoji: "🧠",
    icon: Home,
    title: "Section 4 — Condition & Habitability",
    clauses: [
      {
        name: "Habitability Acceptance",
        leaseLanguage: "Tenant agrees unit is habitable unless reported within 48 hours.",
        plainLanguage: "If you don't report issues immediately, they may not count later.",
        tenantImpact: "Places strict time limits on raising initial condition concerns.",
      },
      {
        name: "Inventory Checklist Default",
        leaseLanguage: "Failure to submit checklist = acceptance of unit condition.",
        plainLanguage: "No checklist = everything is considered fine.",
        tenantImpact: "Reduces ability to dispute pre-existing damage.",
      },
    ],
  },
  {
    id: "section-5",
    emoji: "🧯",
    icon: Wrench,
    title: "Section 5 — Maintenance & Utilities",
    clauses: [
      {
        name: "Excess Utility Charges",
        leaseLanguage: "Tenant must pay for usage above average, including unreported leaks.",
        plainLanguage: "If water usage spikes, you may be billed even if it's not your fault.",
        tenantImpact: "Potential liability for hidden or structural issues.",
      },
    ],
  },
];

const impactColors: Record<string, string> = {
  "section-1": "border-amber-400/60 bg-amber-50/60",
  "section-2": "border-red-400/60 bg-red-50/60",
  "section-3": "border-orange-400/60 bg-orange-50/60",
  "section-4": "border-blue-400/60 bg-blue-50/60",
  "section-5": "border-emerald-400/60 bg-emerald-50/60",
};

const impactDot: Record<string, string> = {
  "section-1": "bg-amber-500",
  "section-2": "bg-red-500",
  "section-3": "bg-orange-500",
  "section-4": "bg-blue-500",
  "section-5": "bg-emerald-500",
};

export default function LeaseTerms() {
  return (
    <>
      {/* Structured Data — BreadcrumbList + SpecialAnnouncement */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "66 Adelaide Detroit",
                item: "https://www.66adelaide.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Lease Terms — Documented Clauses",
                item: "https://www.66adelaide.com/lease-terms",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lease Terms — Documented Clauses | 66 Adelaide Detroit",
            url: "https://www.66adelaide.com/lease-terms",
            description:
              "Selected clauses from the signed lease agreement for 66 Adelaide Street, Detroit, MI 48201 — including tenant responsibility shifts, liability allocation, financial penalties, and habitability provisions.",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              url: "https://www.66adelaide.com/",
              name: "66 Adelaide Detroit — Building Conditions Documentation",
            },
          },
        ])}
      </script>

      <div className="min-h-screen bg-white">
        {/* Nav Bar */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              66 Adelaide
            </Link>
            <div className="flex items-center gap-2 text-xs text-foreground/40">
              <Link to="/" className="hover:text-foreground/60 transition-colors">66 Adelaide</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Lease Terms</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="py-20 px-6 md:px-12 lg:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-background/50 text-sm mb-6 tracking-widest uppercase">
                66 Adelaide · Detroit, MI 48201
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                Lease<br />Terms
              </h1>
              <div className="max-w-2xl">
                <p className="text-lg text-background/80 leading-relaxed mb-4">
                  This section presents selected clauses from the lease agreement for 66 Adelaide, along with plain-language summaries of potential tenant impact.
                </p>
                <p className="text-background/50 text-sm">
                  All excerpts are taken directly from the signed lease document.
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Table of Contents */}
        <aside className="py-10 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4">Sections</p>
            <div className="flex flex-wrap gap-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm px-4 py-2 border border-border hover:border-foreground/40 hover:bg-foreground/5 transition-all rounded-sm"
                >
                  {s.emoji} {s.title.split("—")[1]?.trim()}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Sections */}
        <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 space-y-24">
          {sections.map((section, si) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border">
                <span className="text-2xl">{section.emoji}</span>
                <h2 className="text-2xl md:text-3xl font-normal">{section.title}</h2>
              </div>

              {/* Clauses */}
              <div className="space-y-8">
                {section.clauses.map((clause, ci) => (
                  <motion.article
                    key={clause.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: ci * 0.1 }}
                    className="grid md:grid-cols-[1fr_1fr_1fr] gap-0 border border-border"
                  >
                    {/* Clause Header */}
                    <div className="md:col-span-3 px-6 py-4 bg-foreground/3 border-b border-border flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${impactDot[section.id]}`} />
                      <h3 className="text-base font-medium">Clause: {clause.name}</h3>
                    </div>

                    {/* Lease Language */}
                    <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                      <div className="text-xs uppercase tracking-widest text-foreground/40 mb-3">
                        Lease Language
                      </div>
                      <blockquote className="text-foreground/80 leading-relaxed text-sm italic border-l-2 border-foreground/20 pl-4">
                        "{clause.leaseLanguage}"
                      </blockquote>
                    </div>

                    {/* Plain Language */}
                    <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                      <div className="text-xs uppercase tracking-widest text-foreground/40 mb-3">
                        Plain Language
                      </div>
                      <p className="text-foreground leading-relaxed text-sm font-medium">
                        {clause.plainLanguage}
                      </p>
                    </div>

                    {/* Tenant Impact */}
                    <div className={`p-6 border-l-4 ${impactColors[section.id]}`}>
                      <div className="text-xs uppercase tracking-widest text-foreground/40 mb-3">
                        Tenant Impact
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        {clause.tenantImpact}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-border pt-16 pb-8 max-w-3xl"
          >
            <Shield className="w-6 h-6 text-foreground/30 mb-6" />
            <p className="text-foreground/70 leading-relaxed mb-2">
              The above excerpts are provided for informational purposes.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Tenants are encouraged to review their lease and seek independent guidance where appropriate.
            </p>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 lg:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-background/50">
            <p>66 Adelaide Street, Detroit, MI 48201 · Lease Documentation</p>
            <nav aria-label="Footer navigation" className="flex items-center gap-6 text-xs">
              <Link to="/property-info" className="hover:text-background/70 transition-colors flex items-center gap-1">
                Property Info <ChevronRight className="w-3 h-3" />
              </Link>
              <Link to="/" className="flex items-center gap-2 hover:text-background transition-colors">
                <ArrowLeft className="w-3 h-3" />
                Back to main site
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}