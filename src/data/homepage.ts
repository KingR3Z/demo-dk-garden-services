import { client } from "@/config/client";

export const heroData = {
  title: "Expert Garden\nMaintenance & Care",
  subtitle: `PREMIER LAWN CARE, HEDGE TRIMMING & LANDSCAPING IN SHEFFIELD`,
  image: "/images/hero-bg-v2.jpg",
};

export const introData = {
  heading: `Transforming Sheffield's Gardens With Expert Care`,
  text: [
    `Operating throughout Sheffield and the surrounding areas, DK Garden Services is a trusted local business led by Daniel. Our dedicated team provides exceptional garden maintenance, precise hedge trimming, professional lawn care, and comprehensive landscaping solutions. We pride ourselves on our five-star reviews and flawless Google rating, which reflect our commitment to quality.`,
    "Discover the high standard of our completed projects across Sheffield by viewing our extensive portfolio.",
  ],
  cta: { label: "Request a Free Quote", href: "/contact" },
  image: "/images/intro-circle-v2.jpg",
};

export const servicesData = {
  tabs: [
    {
      label: "LAWN CARE & MOWING",
      title: "Professional Lawn Care & Mowing",
      text: "We offer regular lawn mowing, precise edging, nutrient-rich feeding, and tailored seasonal treatments to ensure your grass remains lush and healthy year-round. From one-off restorations to scheduled maintenance, Daniel and his team provide the perfect solution.",
      tagline: "Lush, green, and perfectly manicured lawns.",
      cta: { label: "Discover More", href: "/garden-design" },
      image: "/images/service-driveways-v2.jpg",
    },
    {
      label: "HEDGE TRIMMING & PRUNING",
      title: "Expert Hedge Trimming & Pruning",
      text: "Maintain crisp garden boundaries with our specialist hedge trimming, tree pruning, and shrub shaping services. DK Garden Services has the expertise to tackle everything from intricate box hedges to substantial hedgerows throughout Sheffield.",
      tagline: "Precision cutting for immaculate boundaries.",
      cta: { label: "Discover More", href: "/garden-design" },
      image: "/images/service-patios-v2.jpg",
    },
    {
      label: "FENCING & BOUNDARIES",
      title: "Durable Fencing & Boundary Solutions",
      text: "Enhance your property's privacy and kerb appeal with our high-quality timber fencing installations. We supply and fit lap panels, close board fencing, and decorative styles, alongside safe removal of your old boundaries and gates.",
      tagline: "Robust, stylish, and secure garden boundaries.",
      cta: { label: "Discover More", href: "/garden-design" },
      image: "/images/service-fencing-v2.jpg",
    },
    {
      label: "GARDEN CLEARANCE & PLANTING",
      title: "Thorough Garden Clearance & Planting",
      text: "We revitalise neglected outdoor spaces, handling everything from intensive garden clearances to designing vibrant new planting schemes. Daniel's team will clear overgrown vegetation, prepare fresh beds, and carefully plant seasonal flora, shrubs, and trees.",
      tagline: "Breathing new life into overgrown outdoor spaces.",
      cta: { label: "Discover More", href: "/garden-design" },
      image: "/images/service-lawns-v2.jpg",
    },
  ],
};

export const whyChooseData = {
  title: `Why Choose DK Garden Services?`,
  paragraphs: [
    `Our flawless five-star Google rating highlights our exceptional reputation throughout Sheffield. We are a dependable, locally-owned team dedicated to providing superior garden maintenance services across the region.`,
    "We approach every project with meticulous attention to detail, steadfast reliability, and transparent pricing. You can trust us to arrive promptly and leave your garden looking absolutely pristine.",
    `From the initial consultation to the final tidy-up, we deliver a deeply personal service. We never use subcontractors or take shortcuts—Daniel and the DK Garden Services team personally ensure the highest standards.`,
    "Whether you require a one-off transformation or ongoing regular visits, we offer flexible scheduling to keep your garden flourishing throughout every season.",
  ],
  image: "/images/why-choose-new-v2.jpg",
};

export const philosophyData = {
  title: "Our Core Philosophy",
  paragraphs: [
    "Our approach is highly practical and entirely customer-focused. We carefully listen to your requirements, offer straightforward, honest advice, and consistently deliver exactly what we promise.",
    "Every new project begins with a complimentary, no-obligation site visit and quotation. Daniel will personally assess your Sheffield garden, discuss the necessary work, and provide a transparent price without any hidden costs.",
    "We take immense pride in the work we do at DK Garden Services. We guarantee exceptional quality on every task and ensure you are kept fully informed throughout the process.",
  ],
  cta: { label: "Learn About Our Process", href: "/about" },
  image: "/images/portfolio/project-05.jpg",
};

export const landscapingData = {
  title: "Comprehensive Garden Maintenance Solutions",
  paragraphs: [
    "DK Garden Services provides a complete end-to-end service, whether you need routine lawn mowing, a one-off hedge reduction, sturdy new fencing, a total garden clearance, or beautiful seasonal planting.",
    "Daniel and our skilled team collaborate seamlessly on every project to guarantee consistent excellence and a spotless finish. Our ultimate goal is to always leave your garden looking significantly better than we found it.",
  ],
  cta: { label: "Browse Our Portfolio", href: "/portfolio" },
  image: "/images/landscaping-main-v2.jpg",
};

export const ctaData = {
  heading: "Ready to Revitalise Your Garden?",
  text: "Contact us today to arrange a free, no-obligation estimate. We will visit your property in Sheffield, discuss your vision, and provide a fair, honest quote.",
  subtext: `Call Daniel directly on ${client.phone} or complete our online form, and we will respond within 24 hours.`,
};

export const projectsShowcase = [
  { title: "Precision Hedge Trimming", location: "Sheffield", image: "/images/portfolio/project-50.jpg", slug: "hedge-trimming" },
  { title: "Complete Garden Clearance", location: "Sheffield", image: "/images/portfolio/project-30.jpg", slug: "garden-clearance" },
  { title: "Timber Fencing Installation", location: "Sheffield", image: "/images/portfolio/project-03.jpg", slug: "new-fencing" },
  { title: "Regular Lawn Maintenance", location: "Sheffield", image: "/images/portfolio/project-20.jpg", slug: "lawn-care" },
  { title: "Patio Restoration & Planting", location: "Sheffield", image: "/images/portfolio/project-10.jpg", slug: "patio-planting" },
  { title: "Expert Pruning & Shaping", location: "Sheffield", image: "/images/portfolio/project-40.jpg", slug: "pruning-shaping" },
  { title: "Ongoing Garden Maintenance", location: "Sheffield", image: "/images/portfolio/project-55.jpg", slug: "garden-maintenance" },
  { title: "Boundary Fence Repair", location: "Sheffield", image: "/images/portfolio/project-04.jpg", slug: "fence-repair" },
  { title: "Overgrown Garden Restoration", location: "Sheffield", image: "/images/portfolio/project-35.jpg", slug: "garden-rescue" },
  { title: "Vibrant Seasonal Planting", location: "Sheffield", image: "/images/portfolio/project-15.jpg", slug: "seasonal-planting" },
];
