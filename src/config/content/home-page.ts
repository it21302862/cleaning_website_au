import { dehyphenateCopy } from "@/lib/text/dehyphenate-copy";

/** Copy aligned to homepage Figma */
const homePageContentSource = {
  hero: {
    badges: [
      "100% Eco-Certified Commercial Facilities Management",
      "Greater Melbourne & Regional Victoria",
    ],
    title: "Facilities Management That Is",
    titleHighlight: "Better, Greener & More Affordable",
    description:
      "Green Planet Services delivers premier, eco-friendly cleaning and facilities management across all Melbourne suburbs. Reliable, fully trained specialists with transparent pricing and zero harsh biocides.",
    primaryCta: "Request a Free Estimate",
    secondaryCta: "Explore Commercial Services",
    dispatchLabel: "Direct Dispatch Desk",
    trustBar: [
      { label: "Trusted across Melbourne since 2008", icon: "calendar" as const },
      { label: "100% Satisfaction Guarantee", icon: "shield" as const },
      { label: "Over 25+ Years Commercial Experience", icon: "trophy" as const },
      {
        label: "Non-Toxic Hospital-Grade Green Chemicals",
        icon: "bottle" as const,
      },
    ],
    illustration: "/images/home/hero.jpg",
  },
  features: {
    eyebrow: "Why Melbourne Chooses Us",
    title: "Engineered For Compliance, Priced For Practicality",
    subtitle:
      "Green Planet Services bridges institutional hygiene benchmarks with genuine environmental accountability across Greater Melbourne.",
    items: [
      {
        badge: "100% Police Checked & Insured",
        title: "Trained Cleaners",
        description:
          "Rest easy knowing that all of our cleaners are fully trained, vetted, and police-cleared, with extensive commercial cleaning experience ranging from CBD high-rise executive offices to multi-level athletic gyms and medical spaces.",
        footer: "Continuous OHS & Bio-Containment Certification",
        footerIcon: "check" as const,
        icon: "badge" as const,
      },
      {
        badge: "Transparent Quotations",
        title: "Cost Effective",
        description:
          "We deliver cost-effective solutions that won't break the budget. Sustainable, environmentally friendly products and comprehensive facilities services delivered without the hefty premium price tag of old-line conglomerates.",
        footer: "Average 18–24% annual procurement savings",
        footerIcon: "trend" as const,
        icon: "piggy" as const,
      },
      {
        badge: "Melbourne Helpdesk",
        title: "Great Customer Support",
        description:
          "We are here to help you with any questions you may have, and pride ourselves on our quick response times, direct managerial access, and adaptive scheduling for seasonal spikes or rapid spill contingencies.",
        footer: "Direct contact with local managers",
        footerIcon: "bolt" as const,
        icon: "gauge" as const,
      },
    ],
  },
  services: {
    eyebrow: "End-to-End Facilities Capabilities",
    title: "Specialised Commercial Services Built For Modern Melbourne Workplaces",
    subtitle:
      "Adapting cleaning schedules, sanitisation levels, and reporting to match the exact commercial charter and compliance requirements of your enterprise.",
    items: [
      {
        slug: "office-retail-facilities-cleaning",
        badge: "CBD & Corporate",
        title: "Office & Retail Cleaning",
        description:
          "Daily and weekly tailored routines, complete sanitisation of shared work areas, high-touch keyboard points, executive boardrooms, and high-traffic shopping storefronts.",
        footer: "Tailored Shift Rosters",
        image: "/images/home/office-retail.jpg",
      },
      {
        slug: "commercial-logistics-facility-cleaning",
        badge: "Logistics & Facilities",
        title: "Commercial Cleaning",
        description:
          "Comprehensive maintenance for multi-bay distribution hubs, school campuses, fitness clubs, and high-security manufacturing complexes requiring strict OHS alignment.",
        footer: "Full OHS Compliance",
        image: "/images/home/commercial.jpg",
      },
      {
        slug: "floor-polishing-stripping-sealing",
        badge: "Hard Floor Mastery",
        title: "Floor Polishing & Stripping",
        description:
          "Specialist diamond-pad rotary stripping, eco-sealant application, and buffing for hardwood, heavy-duty vinyl, terrazzo, granite, and polished concrete.",
        footer: "Non-Toxic Polymer Seals",
        image: "/images/home/floor-polishing.jpg",
      },
      {
        slug: "commercial-carpet-upholstery-steam-cleaning",
        badge: "Deep Extraction",
        title: "Steam Cleaning",
        description:
          "Hot water extraction and allergen neutralization for corporate carpets, acoustic wall panels, and high-wear upholstery with fast-dry botanical enzyme rinsing.",
        footer: "2-Hour Rapid Dry",
        image: "/images/home/steam-cleaning.jpg",
      },
      {
        slug: "multi-storey-window-glass-cleaning",
        badge: "Interior & Exterior",
        title: "Window Cleaning",
        description:
          "Streak-free crystal clarity using deionized pure water filtration poles for multi-storey exterior glazing, internal partition glass, and architectural atrium skylights.",
        footer: "Zero Chemical Runoff",
        image: "/images/home/window-cleaning.jpg",
      },
      {
        slug: "medical-grade-decon-sanitization",
        badge: "Bio-Neutral Sanitisation",
        title: "Specialized Sanitization",
        description:
          "Hospital-grade biological decontamination utilizing cold-fogging electrostatic misting with 99.999% efficacy against viral pathogens, without residual toxicity.",
        footer: "Medical Compliance Grade",
        image: "/images/home/sanitization.jpg",
      },
    ],
  },
  estimate: {
    badge: "Zero Obligation • Response Within 2 Hours",
    title: "Request A Free Estimate",
    description:
      "High Quality & Green Cleaning Services from a trusted Melbourne cleaning company. We adapt our cleaning schedules, sanitisation levels, and reporting to match your exact commercial charter.",
    seal: {
      guarantee: "100% Guaranteed",
      headline: "Free Facility Audit",
      subline: "Melbourne Metro Wide",
    },
    trust: [
      { label: "Fully Insured", icon: "check" as const },
      {
        label: "Flexible Out-of-Hours & Weekend Cleaning Available",
        icon: "clock" as const,
      },
    ],
  },
  testimonials: {
    eyebrow: "What Our Customers Say",
    title: "Endorsed By Melbourne Property Leaders Since 2008",
    description:
      "Verbatim testimonials from our long-term commercial partners, building owners, and community institutions across Victoria.",
    /** Eight client banners in provided image order (four clients × two banners). */
    items: [
      {
        id: "john-bradshaw-1",
        quote:
          "Patrick and his associates have been maintaining my Commercial and Residential Properties since 2008. I can attest to his strong work ethic, reliability, and attention to detail. I never hesitate to refer prospective customers to Patrick, as he's a class act.",
        tenure: "Since 2008",
        name: "John Bradshaw",
        role: "Property Investor & Business Owner",
        initials: "JB",
      },
      {
        id: "nicholas-h-1",
        quote:
          "I have been using Green Planet Services for the last couple of months on both our commercial and residential properties. The standard they provide is very high and their pricing is unbeatable. I would strongly recommend Green Planet Services to anyone looking for a professional, hassle free cleaning service.",
        tenure: "Commercial & Residential",
        name: "Nicholas H",
        role: "Building Owner",
        initials: "NH",
      },
      {
        id: "zac-potier-1",
        quote:
          "Green Planet Services has been looking after the cleaning at the City of Melbourne Bowls Club since 2008. Pat and his team offer excellent service at reasonable rates and I have no hesitation in recommending their services. They are flexible with cleaning schedules which helps us navigate our seasonal business requirements and are always on hand to assist with extra services when required.",
        tenure: "Since 2008",
        name: "Zac Potier",
        role: "City of Melbourne Bowls Club",
        initials: "ZP",
      },
      {
        id: "iudita-trifa-1",
        quote:
          "Out Doors Inc. have used Green Planet Services for 7 years. They are friendly and approachable, reliable and trustworthy. I am more than happy to recommend them to anyone requiring their cleaning services.",
        tenure: "7+ Years Client",
        name: "Iudita Trifa–Schmidt",
        role: "CEO, Out Doors Inc.",
        initials: "IT",
      },
      {
        id: "john-bradshaw-2",
        quote:
          "Patrick and his associates have been maintaining my Commercial and Residential Properties since 2008. I can attest to his strong work ethic, reliability, and attention to detail. I never hesitate to refer prospective customers to Patrick, as he's a class act.",
        tenure: "Since 2008",
        name: "John Bradshaw",
        role: "Property Investor & Business Owner",
        initials: "JB",
      },
      {
        id: "nicholas-h-2",
        quote:
          "I have been using Green Planet Services for the last couple of months on both our commercial and residential properties. The standard they provide is very high and their pricing is unbeatable. I would strongly recommend Green Planet Services to anyone looking for a professional, hassle free cleaning service.",
        tenure: "Commercial & Residential",
        name: "Nicholas H",
        role: "Building Owner",
        initials: "NH",
      },
      {
        id: "zac-potier-2",
        quote:
          "Green Planet Services has been looking after the cleaning at the City of Melbourne Bowls Club since 2008. Pat and his team offer excellent service at reasonable rates and I have no hesitation in recommending their services. They are flexible with cleaning schedules which helps us navigate our seasonal business requirements and are always on hand to assist with extra services when required.",
        tenure: "Since 2008",
        name: "Zac Potier",
        role: "City of Melbourne Bowls Club",
        initials: "ZP",
      },
      {
        id: "iudita-trifa-2",
        quote:
          "Out Doors Inc. have used Green Planet Services for 7 years. They are friendly and approachable, reliable and trustworthy. I am more than happy to recommend them to anyone requiring their cleaning services.",
        tenure: "7+ Years Client",
        name: "Iudita Trifa–Schmidt",
        role: "CEO, Out Doors Inc.",
        initials: "IT",
      },
    ],
  },
  urgentCta: {
    eyebrow: "Fast Assistance",
    title: "Need An Urgent Clean?",
    sublabel: "Speed Dial",
    image: "/images/urgent-service.jpg",
  },
} as const;

export const homePageContent = dehyphenateCopy(homePageContentSource);
