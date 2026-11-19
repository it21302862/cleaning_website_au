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
      "Founded in Melbourne in 2008, Green Planet Services was established with a simple goal to provide reliable, high quality cleaning and facilities management services that make a positive difference. We believe every workplace deserves a clean, safe and healthy environment.",
      "Today, we proudly provide professional cleaning and facilities management services across Victoria, supporting corporate offices, commercial buildings, industrial facilities and other workplaces. Our experienced team is committed to delivering consistent results, maintaining high standards and making every space a better place to work.",
    ],
    quote:
      "Our mission is to create cleaner, safer and healthier spaces through reliable service, professional care and a commitment to quality.",
    image: "/images/about/genesis-team.jpg",
    specialistCard: {
      title: "Dedicated Cleaning Team",
      description:
        "Our team is committed to delivering professional, reliable cleaning services with care and attention to detail. We take pride in maintaining clean, hygienic and welcoming environments for every client.",
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
    eyebrow: "PROFESSIONAL SERVICE STANDARDS",
    title: "Professional Cleaning & Reliable Facilities Management",
    description:
      "Green Planet Services is committed to maintaining clean, safe and well presented facilities. Our experienced team delivers reliable cleaning and maintenance solutions tailored to each client's needs. We focus on quality workmanship, workplace hygiene and consistent service to ensure every facility is maintained to a high standard.",
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
    "Providing professional commercial cleaning and facilities management services across metropolitan Melbourne. We are committed to delivering reliable service, maintaining clean and hygienic workplaces, and creating better environments for businesses and their people.",
} as const;

export const aboutPageContent = dehyphenateCopy(aboutPageContentSource);
