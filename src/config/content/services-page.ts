/** Copy aligned to Services page Figma */
export const servicesPageContent = {
  hero: {
    eyebrow: "Commercial Facilities Services",
    title: "Comprehensive",
    titleHighlight: "Commercial Cleaning & Facilities Management",
    description:
      "Engineered hygiene protocols for corporate headquarters, logistics hubs, retail precincts, and healthcare environments across Greater Melbourne. Hospital-grade cleanliness delivered without caustic toxins.",
    cta: "Book Melbourne Site Assessment",
    showcase: {
      image: "/images/about-iso-facility.jpg",
      title: "Rapid Dispatch Melbourne",
      location: "CBD, Docklands, Dandenong & Western Suburbs",
      stats: [
        { value: "100%", label: "Directly Vetted" },
        { value: "0%", label: "Toxic Biocides" },
        { value: "ISO", label: "14001 Compliant" },
      ],
    },
  },
  grid: {
    eyebrow: "End to End Facility Care",
    title: "One partner for every space you manage",
    subtitle:
      "Scopes are built around your footfall, compliance needs and operating hours — not a generic checklist.",
    items: [
      {
        slug: "office-retail-facilities-cleaning",
        tag: "Corporate & Multi-Tenant",
        title: "Office & Retail Facilities Cleaning",
        description:
          "Engineered for corporate headquarters, collaborative hubs, and luxury retail precincts. Meticulous touch-point disinfection, monitor screens, ergonomic keyboards, executive suites, and kitchen breakrooms.",
        checklist: [
          "Four-stream waste and organic composting sorting",
          "GECA certified botanical surface virucides",
          "HEPA-filtered quiet vacuuming (sub-60dB)",
        ],
        image: "/images/about-genesis-team.jpg",
      },
      {
        slug: "commercial-logistics-facility-cleaning",
        tag: "Industrial & Warehousing",
        title: "Commercial & Logistics Facility Cleaning",
        description:
          "Heavy-duty operational hygiene for Melbourne fulfillment centers, manufacturing floors, transit bays, and gymnasiums. Designed to control abrasive dust and reduce workplace slip hazards.",
        checklist: [
          "Ride-on scrubber-sweeper automated floor clearing",
          "Loading dock degreasing using enzyme biodigesters",
          "Industrial staff locker room and wellness sanitization",
        ],
        image: "/images/services-warehouse.jpg",
      },
      {
        slug: "floor-polishing-stripping-sealing",
        tag: "Specialist Floorcare",
        title: "Floor Polishing, Stripping & Sealing",
        description:
          "Advanced restoration and protective sealing for vinyl, terrazzo, marble, and concrete substrates. Utilizing micro-diamond abrasives to achieve high slip-resistance ratings and mirror-shine longevity.",
        checklist: [
          "Zero-VOC bio-sealants resistant to alcohol scuffs",
          "Diamond-impregnated rotary pad polishing",
          "Australian AS 4586 Slip-Resistance compliance",
        ],
        image: "/images/services-floor.jpg",
      },
      {
        slug: "commercial-carpet-upholstery-steam-cleaning",
        tag: "Fabrics & Acoustic Care",
        title: "Commercial Carpet & Upholstery Steam Cleaning",
        description:
          "Deep thermal extraction that extracts embedded soil, allergens, and pathogen reservoirs from carpet tiles, task chairs, and acoustic baffling without wet residue or prolonged downtime.",
        checklist: [
          "Rapid 2-hour accelerated micro-fan drying cycle",
          "Zero petrochemical detergent residue; 100% biodegradable",
          "Extended lifespan for commercial carpet warranty specs",
        ],
        image: "/images/services-carpet.jpg",
      },
      {
        slug: "multi-storey-window-glass-cleaning",
        tag: "Architectural Facades",
        title: "Multi-Story Window & Glazing Cleaning",
        description:
          "Streak-free optical clarity for Melbourne commercial towers and retail frontages using 5-stage deionized reverse osmosis pure water. Eliminates detergent runoff, protecting surrounding garden beds.",
        checklist: [
          "Carbon-fiber reach systems up to 6 storeys high",
          "Fully certified IRATA abseil & boom-lift operators",
          "Hydrophobic treatment resisting Victorian coastal dust",
        ],
        image: "/images/services-windows.jpg",
      },
      {
        slug: "medical-grade-decon-sanitization",
        tag: "Healthcare & Clinical Precisions",
        title: "Medical-Grade Eco-Sanitization",
        description:
          "Specialized infection barrier control designed for medical clinics, pathology labs, aged care facilities, and preschools. Neutralizes 99.999% of airborne and surface pathogens using food-safe botanical extracts.",
        checklist: [
          "Electrostatic wrap-around micro-droplet coverage",
          "TGA-listed non-toxic virucidal hydrogen formulations",
          "Digital surface ATP luminescence swab verification",
        ],
        image: "/images/services-sanitization.jpg",
      },
    ],
  },
  advantage: {
    eyebrow: "Operational Audit",
    title: "The Green Planet Advantage",
    intro:
      "Traditional cleaning relies on cheap petrochemical surfactants that degrade air quality and off-gas harmful VOCs. Green Planet combines hospital-tier efficacy with biological safety.",
    columns: [
      "Evaluation Criteria",
      "Conventional Cleaning Agencies",
      "Green Planet Services Melbourne",
    ],
    rows: [
      {
        feature: "Chemical Formulation",
        icon: "flask" as const,
        conventional:
          "Corrosive ammonia, bleach & synthetic surfactants",
        greenPlanet:
          "GECA certified botanical virucides & zero-VOC degreasers",
      },
      {
        feature: "Personnel & Vetting",
        icon: "person" as const,
        conventional: "Unvetted tired subcontractors",
        greenPlanet: "100% direct employees, police-checked & insured",
      },
      {
        feature: "Accountability & Response",
        icon: "clock" as const,
        conventional: "No escalation path or site logs",
        greenPlanet: "Live cloud QR-code logs & 2-hour managerial response",
      },
      {
        feature: "Compliance & ESG Reports",
        icon: "document" as const,
        conventional: "Paperless or ad-hoc reporting",
        greenPlanet: "Digital WHS, MSDS & carbon-smart ESG dashboards",
      },
    ],
  },
  sustainability: {
    badge: "ESG Compliance Verified",
    title: "Improve Your Building’s Sustainability & Performance",
    description:
      "Environmental accountability is no longer optional for Melbourne facility managers. Green Planet reduces indoor air contamination, optimizes water usage, and delivers transparent carbon reporting — without compromising hospital-grade hygiene outcomes.",
    cards: [
      { title: "Public Liability & WorkCover", icon: "shield" as const },
      { title: "Closed-Loop Packaging", icon: "recycle" as const },
      { title: "Trusted Since 2008", icon: "star" as const },
    ],
  },
  audit: {
    eyebrow: "Swift On-Site Proposal",
    title: "Schedule Your Free Facility Scope & Carbon Audit",
    description:
      "Our Melbourne operational directors evaluate your premises within 24 hours to deliver a transparent, customized scope with fixed quarterly pricing.",
    benefits: [
      "Tailored cleaning checklist",
      "No lock-in trial period",
      "Transparent fixed pricing",
    ],
    form: {
      fields: {
        company: "Company / Facility Name",
        companyPlaceholder: "e.g. Collins St Commercial Tower",
        contactName: "Contact Name",
        contactPlaceholder: "Patrick Bradshaw",
        phone: "Phone Number",
        phonePlaceholder: "0422 104 633",
        suburb: "Melbourne Suburb & Postcode",
        suburbPlaceholder: "e.g. Melbourne CBD, 3000",
        submit: "Submit",
        callPrefix: "Or call directly:",
      },
    },
  },
} as const;

export type ServicesPageService =
  (typeof servicesPageContent.grid.items)[number];
