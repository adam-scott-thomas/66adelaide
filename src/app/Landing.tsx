import { Bug, Wrench, Zap, AlertTriangle, MessageSquare,
  FileText, Mail, ChevronRight, ArrowRight, Lock
} from "lucide-react";
import buildingPhoto from "../imports/the-amo-detroit-mi-primary-photo-1.jpg";
import { SiteNav } from "./components/SiteNav";

const keyAreas = [
  {
    icon: Bug,
    title: "Health & Sanitation",
    summary: "Reports of ongoing pest activity and sanitation concerns, including conditions following delayed unit clean-out after vacancy.",
    link: "#health-sanitation",
    cta: "View details",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    summary: "Reports of unresolved leaks, repeated repair attempts, and delays in maintenance response.",
    link: "#maintenance",
    cta: "View maintenance log",
  },
  {
    icon: Zap,
    title: "Utilities & Essential Services",
    summary: "Recurring interruptions to hot water and concerns regarding heating system performance.",
    link: "#utilities",
    cta: "View service timeline",
  },
  {
    icon: AlertTriangle,
    title: "Exterior Safety",
    summary: "Observed slip-and-fall incidents associated with untreated ice and inconsistent exterior maintenance.",
    link: "#exterior",
    cta: "View incident reports",
  },
  {
    icon: MessageSquare,
    title: "Management & Communication",
    summary: "Reports of delayed responses, inconsistencies in maintenance handling, and discrepancies between communication and billing.",
    link: "#management",
    cta: "View communication records",
  },
  {
    icon: FileText,
    title: "Lease Terms (Summary)",
    summary: "Selected lease provisions include strict reporting timelines and financial penalties tied to tenancy.",
    link: "/lease-terms",
    cta: "View lease analysis",
    external: true,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3">
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-foreground/70 leading-relaxed">
          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-l-2 border-border pl-6"
    >
      <h4 className="text-base font-medium mb-3">{title}</h4>
      <div className="text-foreground/70 leading-relaxed space-y-3 text-[0.95rem]">
        {children}
      </div>
    </motion.div>
  );
}

export default function Landing() {
  useEffect(() => {
    document.title = "66 Adelaide Detroit MI | Building Conditions Documentation | 66 Adelaide Street Detroit Michigan";
    const description = "Official documentation of building conditions, maintenance issues, and tenant experiences at 66 Adelaide Street, Detroit, MI 48201. Multi-unit residential building transparency and accountability. Landlord: 66 Adelaide, LLC.";
    const keywords = "66 Adelaide, 66 Adelaide Detroit, 66 Adelaide Street Detroit, Detroit MI 48201, Detroit apartment building, tenant rights Detroit, building conditions Detroit, 66 Adelaide Michigan, 66 Adelaide LLC, 66 Adelaide landlord, pest activity 66 Adelaide, maintenance issues Detroit apartment";

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "66 Adelaide Documentation" },
      { property: "og:title", content: "66 Adelaide Detroit | Building Conditions Documentation" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.66adelaide.com/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "66 Adelaide Detroit" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "66 Adelaide Detroit | Building Conditions Documentation" },
      { name: "twitter:description", content: description },
      { name: "geo.region", content: "US-MI" },
      { name: "geo.placename", content: "Detroit, Michigan" },
      { name: "geo.position", content: "42.3314;-83.0458" },
      { name: "ICBM", content: "42.3314, -83.0458" },
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
    canonical.setAttribute("href", "https://www.66adelaide.com/");
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);

  return (
    <>
      {/* Structured Data — ApartmentComplex */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          name: "66 Adelaide",
          url: "https://www.66adelaide.com/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "66 Adelaide Street",
            addressLocality: "Detroit",
            addressRegion: "MI",
            postalCode: "48201",
            addressCountry: "US",
          },
          description: "Documented building conditions and tenant experiences at 66 Adelaide Street, Detroit, MI — a multi-unit residential building managed by 66 Adelaide, LLC.",
          geo: {
            "@type": "GeoCoordinates",
            latitude: "42.3314",
            longitude: "-83.0458",
          },
          amenityFeature: [],
        })}
      </script>

      {/* Structured Data — WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "66 Adelaide Detroit — Building Conditions Documentation",
          url: "https://www.66adelaide.com/",
          description: "Structured record of reported conditions, maintenance activity, and tenant experiences at 66 Adelaide Street, Detroit, Michigan.",
          inLanguage: "en-US",
        })}
      </script>

      {/* Structured Data — BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "66 Adelaide Detroit — Building Conditions",
              item: "https://www.66adelaide.com/",
            },
          ],
        })}
      </script>

      {/* Structured Data — FAQPage (boosts rich results for key questions) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is 66 Adelaide in Detroit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "66 Adelaide is a multi-unit residential building located at 66 Adelaide Street, Detroit, MI 48201, managed by 66 Adelaide, LLC.",
              },
            },
            {
              "@type": "Question",
              name: "Who is the landlord at 66 Adelaide Street Detroit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Per the signed lease agreement, the landlord of record is 66 Adelaide, LLC. Property management services are provided by a third-party management company.",
              },
            },
            {
              "@type": "Question",
              name: "What building conditions have been reported at 66 Adelaide Detroit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tenants at 66 Adelaide Street, Detroit have reported persistent pest activity, repeated interruptions to hot water and essential services, ongoing plumbing and leak-related concerns, exterior safety hazards including icy entryways, and maintenance request handling inconsistencies.",
              },
            },
            {
              "@type": "Question",
              name: "How do I submit a building condition report for 66 Adelaide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Current tenants at 66 Adelaide, Detroit can submit reports by emailing help@66adelaide.com with a description of the condition, date, time, and supporting evidence.",
              },
            },
          ],
        })}
      </script>

      <div className="min-h-screen bg-background">
        <SiteNav transparent />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-end overflow-hidden"
          style={{ position: "relative" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <img
              src={buildingPhoto}
              alt="66 Adelaide residential building exterior at 66 Adelaide Street, Detroit, Michigan"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] leading-[0.88] tracking-tight text-white mb-6">
                66<br />Adelaide
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                Documented Building Conditions<br />
                <span className="text-white/40 text-base">66 Adelaide Street · Detroit, Michigan</span>
              </p>
              <a
                href="#summary"
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm hover:bg-white/90 transition-colors"
              >
                View Documentation <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── INTRO ────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-10">
                  66 Adelaide — Documented Building Conditions
                </h2>
                <div className="space-y-5 text-lg text-foreground/75 leading-relaxed">
                  <p>
                    This site documents reported conditions, maintenance activity, and tenant experiences at a multi-unit residential building located at{" "}
                    <strong className="text-foreground">66 Adelaide Street, Detroit, Michigan</strong>.
                  </p>
                  <p>
                    Information is based on tenant observations, documented events, and supporting materials including photos, videos, written communications, and maintenance records.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SUMMARY ──────────────────────────────────────────── */}
        <section id="summary" className="py-20 px-6 md:px-12 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionLabel>Summary of Reported Conditions</SectionLabel>
              <h2 className="text-2xl md:text-3xl mb-8">
                Tenants have reported recurring issues affecting multiple units, including:
              </h2>
              <BulletList items={[
                "Persistent pest activity and sanitation concerns",
                "Repeated interruptions to essential services",
                "Ongoing plumbing and water-related issues",
                "Exterior safety hazards",
                "Maintenance request handling irregularities",
                "Unit readiness concerns at move-in",
              ]} />
              <p className="mt-8 text-foreground/50 text-sm italic">
                These reports span multiple units and time periods.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── KEY AREAS ────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Key Areas</SectionLabel>
            <h2 className="text-2xl md:text-3xl mb-12">Documented Issue Categories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {keyAreas.map((area, i) => {
                const Icon = area.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-white p-8 flex flex-col gap-4 group hover:bg-foreground/[0.02] transition-colors h-full"
                  >
                    <Icon className="w-5 h-5 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-2">{area.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{area.summary}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-foreground/40 group-hover:text-foreground/70 transition-colors">
                      {area.cta} <ChevronRight className="w-3 h-3" />
                    </div>
                  </motion.div>
                );

                return area.external ? (
                  <Link key={area.title} to={area.link} className="contents">
                    {content}
                  </Link>
                ) : (
                  <a key={area.title} href={area.link} className="contents">
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HEALTH & SANITATION ──────────────────────────────── */}
        <section id="health-sanitation" className="py-24 px-6 md:px-12 lg:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel>Health &amp; Sanitation Conditions</SectionLabel>
              <h2 className="text-3xl md:text-4xl text-background">Health &amp; Sanitation</h2>
            </motion.div>

            <div className="space-y-10 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-l-2 border-background/20 pl-6"
              >
                <h4 className="text-base font-medium text-background mb-3">Pest Activity (Confirmed &amp; Ongoing)</h4>
                <p className="text-background/70 leading-relaxed mb-4">
                  Tenants report persistent pest presence beginning at move-in and continuing despite repeated mitigation efforts.
                </p>
                <p className="text-background/70 leading-relaxed mb-3">
                  Residents describe extensive personal remediation efforts, including:
                </p>
                <ul className="space-y-2 ml-2">
                  {[
                    "Sealing and isolating food storage",
                    "Daily cleaning and sanitation",
                    "Use of pest control materials within units",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-background/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-background/30 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-background/60 text-sm mt-4 italic">
                  Despite these measures, activity has reportedly continued.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-l-2 border-background/20 pl-6"
              >
                <h4 className="text-base font-medium text-background mb-3">Vacated Unit Sanitation Delay</h4>
                <p className="text-background/70 leading-relaxed mb-3">
                  Following a March 1, 2026 eviction, a unit reportedly remained uncleared for over a month.
                </p>
                <ul className="space-y-2 ml-2">
                  {[
                    "Food waste and appliances were not removed until the week of April 6, 2026.",
                    "Subsequent pest activity was reported in surrounding areas.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-background/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-background/30 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MAINTENANCE ──────────────────────────────────────── */}
        <section id="maintenance" className="py-24 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel>Maintenance &amp; Repair Conditions</SectionLabel>
              <h2 className="text-3xl md:text-4xl">Maintenance &amp; Repairs</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
              {[
                {
                  title: "Unresolved Plumbing Issues",
                  body: "Tenants report ongoing leaks within units despite multiple repair attempts.",
                },
                {
                  title: "Basement Water Intrusion",
                  body: "Ongoing leaks attributed to aging infrastructure have been observed in common areas.",
                },
                {
                  title: "Move-In Condition Concerns",
                  body: "Some tenants report that units were not fully prepared for occupancy at the time of move-in, including the presence of pests on the first day.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-border p-6"
                >
                  <h4 className="text-base font-medium mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/65 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UTILITIES ────────────────────────────────────────── */}
        <section id="utilities" className="py-24 px-6 md:px-12 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel>Utilities &amp; Essential Services</SectionLabel>
              <h2 className="text-3xl md:text-4xl">Utilities &amp; Services</h2>
            </motion.div>

            <div className="max-w-3xl space-y-8">
              <SubSection title="Hot Water Interruptions">
                <p>Hot water service has reportedly been shut off multiple times per month for repairs.</p>
              </SubSection>
              <SubSection title="Heating System">
                <p>Radiator-based heating systems are in use; performance concerns have been reported.</p>
              </SubSection>
            </div>
          </div>
        </section>

        {/* ── EXTERIOR SAFETY ──────────────────────────────────── */}
        <section id="exterior" className="py-24 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel>Exterior Safety Conditions</SectionLabel>
              <h2 className="text-3xl md:text-4xl">Exterior Safety</h2>
            </motion.div>

            <div className="max-w-3xl space-y-8">
              <SubSection title="Icy Entryways">
                <p>Tenants have reported untreated ice accumulation on exterior stairs.</p>
                <p>Multiple slip-and-fall incidents have been observed.</p>
              </SubSection>
              <SubSection title="Building Access Control">
                <p>Reports indicate inconsistent securing of entry points, including doors left open or unsecured.</p>
              </SubSection>
            </div>
          </div>
        </section>

        {/* ── MANAGEMENT ───────────────────────────────────────── */}
        <section id="management" className="py-24 px-6 md:px-12 lg:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel>Management &amp; Communication</SectionLabel>
              <h2 className="text-3xl md:text-4xl text-background">Management &amp; Communication</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-base font-medium text-background mb-4">Maintenance Request Process</h4>
                <p className="text-background/60 text-sm mb-4 leading-relaxed">
                  Tenants report inconsistencies in maintenance request handling, including:
                </p>
                <ul className="space-y-3">
                  {[
                    "Submitted requests not appearing to be tracked or retained",
                    "Need to escalate requests directly to management or maintenance staff",
                    "Delays in response unless escalation occurs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-background/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-background/30 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-base font-medium text-background mb-4">Communication Practices</h4>
                <p className="text-background/60 text-sm mb-4 leading-relaxed">Tenants report:</p>
                <ul className="space-y-3">
                  {[
                    "Delayed or inconsistent responses to complaints",
                    "Urgent responses occurring only after escalation",
                    "Discrepancies between verbal statements and billing outcomes",
                    "Late fees applied despite ongoing issue resolution discussions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-background/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-background/30 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-background/40 text-xs mt-5 italic">
                  These patterns have been documented through written communications.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 pt-10 border-t border-background/15 max-w-xl"
            >
              <h4 className="text-base font-medium text-background mb-3">Observed Unit Turnover Activity</h4>
              <p className="text-background/60 text-sm leading-relaxed">
                Tenants have reported internal unit transfers within the building, with multiple residents relocating between units.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── LEASE TERMS CALLOUT ───────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 lg:px-16 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <SectionLabel>Lease Terms — Summary</SectionLabel>
              <h2 className="text-2xl md:text-3xl mb-4">Selected Lease Provisions</h2>
              <BulletList items={[
                "Strict timelines for reporting habitability concerns",
                "Financial penalties for early termination",
                "Broad tenant responsibility for certain damages and costs",
              ]} />
            </motion.div>
            <Link
              to="/lease-terms"
              className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm hover:bg-foreground/90 transition-colors"
            >
              View Full Lease Analysis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── DOCUMENTATION ────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel>Documentation &amp; Evidence</SectionLabel>
                <h2 className="text-2xl md:text-3xl mb-6">Reported Conditions Are Supported By</h2>
                <BulletList items={[
                  "Photos and video recordings",
                  "Maintenance requests and logs",
                  "Written communications (email and text)",
                  "Firsthand tenant observations",
                ]} />
                <p className="text-foreground/45 text-sm mt-6 leading-relaxed">
                  This material is maintained to provide an accurate and verifiable record.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SectionLabel>Purpose of This Site</SectionLabel>
                <h2 className="text-2xl md:text-3xl mb-6">This Site Exists To</h2>
                <BulletList items={[
                  "Document ongoing building conditions",
                  "Preserve a structured record of events and responses",
                  "Support communication with inspectors, legal counsel, and relevant authorities",
                ]} />
                <p className="text-foreground/45 text-sm mt-6 italic">
                  This site does not make legal determinations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ───────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-muted/50">
          <div className="max-w-7xl mx-auto max-w-3xl">
            <SectionLabel>Disclaimer</SectionLabel>
            <div className="space-y-4 text-sm text-foreground/55 leading-relaxed">
              <p>The information presented on this site is provided for documentation purposes only.</p>
              <BulletList items={[
                "Reports reflect tenant observations and submitted materials",
                "Not all conditions may be represented",
                "No legal conclusions are asserted",
              ]} />
              <p className="pt-2">
                For official enforcement or legal action, appropriate authorities or counsel should be consulted.
              </p>
            </div>
          </div>
        </section>

        {/* ── CLOSING ──────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="border-l-4 border-foreground pl-8 py-4">
                <p className="text-2xl md:text-3xl leading-snug mb-2">Documentation establishes patterns.</p>
                <p className="text-2xl md:text-3xl leading-snug">Patterns establish accountability.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <footer className="py-20 px-6 md:px-12 lg:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-2xl mb-3 text-background">66 Adelaide</h3>
                <address className="not-italic text-background/50 text-sm leading-relaxed">
                  66 Adelaide Street<br />Detroit, Michigan 48201<br />
                  <span className="text-background/35">Building Conditions Documentation</span>
                </address>
              </div>

              <div className="border border-background/20 p-7 md:col-span-2">
                <div className="text-xs text-background/40 mb-4 uppercase tracking-widest">Contact / Submit Information</div>
                <p className="text-background/80 text-sm leading-relaxed mb-3">
                  Verified tenants may submit documentation or reports via email. Please include dates and supporting details where possible.
                </p>
                <motion.a
                  href="mailto:reports@66adelaide.com"
                  className="inline-flex items-center gap-2 text-background text-sm hover:text-background/70 transition-colors mb-5"
                  whileHover={{ x: 2 }}
                >
                  <Mail className="w-4 h-4 text-background/40" />
                  reports@66adelaide.com
                </motion.a>
                <div className="flex items-start gap-2 pt-4 border-t border-background/10">
                  <Lock className="w-3.5 h-3.5 text-background/30 mt-0.5 shrink-0" />
                  <p className="text-background/40 text-xs leading-relaxed">
                    Secure communication available for verified tenants upon request.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-background/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-background/40 text-xs">
              <p>© {new Date().getFullYear()} 66 Adelaide Documentation · Maintained for tenant transparency and accountability</p>
              <nav aria-label="Footer navigation" className="flex items-center gap-6">
                <Link to="/lease-terms" className="hover:text-background/70 transition-colors flex items-center gap-1">
                  Lease Terms <ChevronRight className="w-3 h-3" />
                </Link>
                <Link to="/property-info" className="hover:text-background/70 transition-colors flex items-center gap-1">
                  Property Info <ChevronRight className="w-3 h-3" />
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}