import { dehyphenateCopy } from "@/lib/text/dehyphenate-copy";

/** Copy aligned to About Us Figma — update here if design text changes. */
const aboutPageContentSource = {
  hero: {
    eyebrow: "ESTABLISHED IN MELBOURNE, 2008",
    title: "Pioneering Commercial Hygiene, Rooted in",
    titleHighlight: "Absolute Sustainability",
    description:
      "Green Planet Services is Melbourne's premier corporate facilities management and cleaning partner. We combine medical-grade compliance and hospital-grade sanitization with non-toxic, carbon-neutral, and biologically safe chemistry.",
    primaryCta: "Explore Our Achievements",
    secondaryCta: "Our Green Guarantee",
  },
  genesis: {
    eyebrow: "OUR GENESIS & JOURNEY",
    title: "A Vision to Clean Up the Facilities Management Industry",
    paragraphs: [
      "Founded in Melbourne in 2008, Green Planet Services began with a clear realization: traditional commercial cleaning relied too heavily on toxic biocides, aggressive VOCs, and carbon-heavy logistics. We saw a better way forward.",
      "Today, we manage premium corporate high-rises, industrial complexes, healthcare hubs, and boutique workspaces across Victoria. We prove daily that compliance, absolute safety, and commercial practicality don't have to be mutually exclusive.",
    ],
    quote:
      "To deliver hospital-grade facilities management that completely eliminates synthetic endocrine-disruptors and unnecessary carbon offset dependencies.",
    image: "/images/about/genesis-team.jpg",
    specialistCard: {
      title: "Fully Vetted Specialists",
      description:
        "Every specialist is 100% police-checked, insured, and certified in rapid bio-hazard response.",
    },
  },
  stats: [
    {
      value: "25+ YEARS",
      label: "Victorian Heritage",
      detail: "Continuous operations in Melbourne since 2008.",
    },
    {
      value: "100% BOTANICAL",
      label: "Zero-Harm Biocides",
      detail: "Non-toxic, bio-based disinfectant chemistry.",
    },
    {
      value: "450+ SITES",
      label: "Commercial Clients",
      detail: "Offices, medical hubs, retail & industrial hubs.",
    },
    {
      value: "99.4% SLA Score",
      label: "Client Retention",
      detail: "Multi-year enterprise facility contracts.",
    },
  ],
  principles: {
    eyebrow: "PRINCIPLES WE OPERATE BY",
    title: "Engineered Compliance, True Responsibility",
    items: [
      {
        title: "Hospital-Grade Efficacy",
        description:
          "We deliver high quality cleaning services with attention to every detail. Our team follows professional cleaning practices to maintain clean, hygienic and welcoming environments.",
        icon: "heart" as const,
      },
      {
        title: "Environmental Sincerity",
        description:
          "We care about the environment and aim to make responsible choices in our daily operations. We use suitable cleaning products and practical methods to reduce unnecessary waste.",
        icon: "globe" as const,
      },
      {
        title: "Radical Transparency",
        description:
          "We believe in honest communication and reliable service. From clear pricing to consistent support, we make sure our customers know what to expect at every stage.",
        icon: "document" as const,
      },
    ],
  },
  iso: {
    eyebrow: "STRICT GREEN PROTOCOLS",
    title: "ISO Compliant & Carbon-Smart Facilities",
    description:
      "We take responsibility at every touchpoint. From ISO 14001 environmental frameworks and GECA certifications to non toxic water treatment solutions. Your facility remains perfectly clean, safe, and fully compliant with state and federal health guidelines.",
    badges: [
      // "ISO 14001 Certified",
      // "100% Carbon Neutral",
      // "GECA Approved Formulations",
    ],
    image: "/images/about/iso-facility.jpg",
  },
  cta: {
    eyebrow: "FAST MELBOURNE DISPATCH",
    title: "Need an Eco-Friendly Facility Assessment?",
    description:
      "Get a zero-obligation green cleaning estimate and structural health review within 2 hours.",
    phoneLabel: "DIRECT MANAGERIAL ASSIST DESK",
  },
  footerBlurb:
    "Pioneering sustainable commercial cleaning and facilities maintenance throughout metropolitan Melbourne. Enterprise grade hygiene standards powered by bio neutral formulations and transparent carbon reporting.",
} as const;

export const aboutPageContent = dehyphenateCopy(aboutPageContentSource);
