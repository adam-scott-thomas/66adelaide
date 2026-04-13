import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ChevronRight, MapPin, Building2, Briefcase, ExternalLink } from "lucide-react";
import { SiteNav } from "./SiteNav";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3">
      {children}
    </div>
  );
}

export default function PropertyInfo() {
  useEffect(() => {
    document.title = "Property & Management Information | 66 Adelaide Street Detroit MI | 66 Adelaide LLC";

    const metaTags = [
      {
        name: "description",
        content:
          "Property and management information for 66 Adelaide Street, Detroit, MI 48201. Landlord: 66 Adelaide, LLC. Part of a third-party managed residential portfolio in Detroit, Michigan.",
      },
      {
        name: "keywords",
        content:
          "66 Adelaide LLC, 66 Adelaide Street Detroit, 66 Adelaide landlord, Detroit property management, 66 Adelaide Michigan, Detroit rental property, 66 Adelaide owner",
      },
      {
        property: "og:title",
        content: "Property & Management Information | 66 Adelaide Detroit",
      },
      {
        property: "og:description",
        content:
          "Landlord and property management information for 66 Adelaide Street, Detroit, MI 48201 — 66 Adelaide, LLC.",
      },
    ];

    metaTags.forEach(({ name, property, content }: { name?: string; property?: string; content: string }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.66adelaide.com/property-info");
  }, []);

  return (
    <>
      {/* Structured Data — Organization + RealEstateListing */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "66 Adelaide, LLC",
            description: "Landlord of record for 66 Adelaide Street, Detroit, MI 48201",
            address: {
              "@type": "PostalAddress",
              streetAddress: "66 Adelaide Street",
              addressLocality: "Detroit",
              addressRegion: "MI",
              postalCode: "48201",
              addressCountry: "US",
            },
          },
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
                name: "Property & Management Information",
                item: "https://www.66adelaide.com/property-info",
              },
            ],
          },
        ])}
      </script>

      <div className="min-h-screen bg-white">
        {/* Nav */}
        <SiteNav />
        {/* Header — pt-16 clears fixed nav */}
        <header className="pt-16 py-20 px-6 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/35 mb-6">
                66 Adelaide Street · Detroit, MI 48201
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
                Property &amp;<br />Management Information
              </h1>
              <p className="text-foreground/55 text-base max-w-xl leading-relaxed">
                Publicly available and lease-documented information regarding ownership and management of 66 Adelaide Street, Detroit, Michigan.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main content */}
        <main className="py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl space-y-16">

              {/* Property */}
              <motion.section
                aria-labelledby="property-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel>Property</SectionLabel>
                <div className="border border-border divide-y divide-border">
                  <div className="flex items-start gap-4 p-6">
                    <MapPin className="w-5 h-5 text-foreground/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/35 mb-1">Address</div>
                      <address className="not-italic text-foreground font-medium text-base leading-relaxed">
                        66 Adelaide Street<br />
                        Detroit, MI 48201<br />
                        United States
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Building2 className="w-5 h-5 text-foreground/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/35 mb-1">Property Type</div>
                      <p className="text-foreground text-base">Multi-unit residential building</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Landlord */}
              <motion.section
                aria-labelledby="landlord-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <SectionLabel>Landlord (Per Lease)</SectionLabel>
                <div className="border border-border divide-y divide-border">
                  <div className="flex items-start gap-4 p-6">
                    <Building2 className="w-5 h-5 text-foreground/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/35 mb-1">Legal Entity</div>
                      <p className="text-foreground font-medium text-base">66 Adelaide, LLC</p>
                      <p className="text-foreground/50 text-sm mt-1">As identified in the signed lease agreement</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Management */}
              <motion.section
                aria-labelledby="management-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <SectionLabel>Property Management</SectionLabel>
                <div className="border border-border divide-y divide-border">
                  <div className="flex items-start gap-4 p-6">
                    <Briefcase className="w-5 h-5 text-foreground/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/35 mb-1">Management Structure</div>
                      <p className="text-foreground text-base leading-relaxed">
                        Property management services are provided by a third-party management company.
                      </p>
                      <p className="text-foreground/50 text-sm mt-3 leading-relaxed">
                        Publicly available information indicates this property is part of a broader managed portfolio.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Source note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="border-l-2 border-border pl-6 py-1"
              >
                <p className="text-sm text-foreground/45 leading-relaxed">
                  Information on this page is derived from the signed lease agreement and publicly available records. This page does not assert legal conclusions regarding ownership, management structure, or liability.
                </p>
              </motion.div>

              {/* Cross-links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SectionLabel>Related Documentation</SectionLabel>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { to: "/lease-terms", label: "Lease Terms — Documented Clauses", desc: "Provisions from the signed 66 Adelaide lease" },
                    { to: "/#management", label: "Management & Communication", desc: "Tenant-reported communication patterns" },
                    { to: "/#summary", label: "Reported Conditions Summary", desc: "Overview of documented issues at 66 Adelaide" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group border border-border p-5 hover:border-foreground/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors mb-1">
                            {link.label}
                          </div>
                          <div className="text-xs text-foreground/45">{link.desc}</div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-foreground/25 group-hover:text-foreground/50 transition-colors shrink-0 mt-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 py-12 px-6 md:px-12 lg:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-background/40">
            <p>66 Adelaide Street, Detroit, MI 48201 · Property Information</p>
            <div className="flex items-center gap-6">
              <Link to="/lease-terms" className="hover:text-background/70 transition-colors">Lease Terms</Link>
              <Link to="/" className="flex items-center gap-1.5 hover:text-background/70 transition-colors">
                <ArrowLeft className="w-3 h-3" /> Main Site
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}