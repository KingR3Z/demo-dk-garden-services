import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: "ABOUT DK GARDEN SERVICES",
  heading: "Expert Garden Maintenance & Landscaping in Sheffield",
  paragraphs: [
    "DK Garden Services is a premier garden maintenance company based in Sheffield. We specialise in keeping outdoor spaces beautiful — from regular lawn mowing and meticulous hedge trimming to complete garden clearances and bespoke planting schemes across Sheffield and the surrounding areas.",
    "With extensive hands-on experience and a genuine passion for horticulture, our dedicated team delivers reliable, high-quality workmanship on every project — whether it's a seasonal tidy-up or a comprehensive, year-round maintenance contract.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Reliable & Professional",
    description:
      "We pride ourselves on punctuality and professionalism. We arrive when scheduled, complete the work to the highest standard, and always leave your garden looking immaculate. Every project is fully insured for your peace of mind.",
    icon: "shield",
  },
  {
    title: "Horticultural Expertise",
    description:
      "Years of dedicated experience in garden maintenance mean we understand exactly what your outdoor space needs to thrive. We provide tailored advice and implement effective strategies to ensure long-lasting results.",
    icon: "lightbulb",
  },
  {
    title: "Our Commitment",
    description:
      "We are dedicated to delivering excellence on every job. From a simple hedge trim to a complete garden overhaul, we maintain unwavering standards of care, precision, and workmanship.",
    icon: "heart",
  },
];

export const directorData = {
  name: "Daniel",
  role: "Founder & Head Gardener",
  image: "/images/director-portrait-v2.jpg",
  bio: [
    "Daniel started DK Garden Services with a clear vision: to provide reliable, premium garden maintenance at honest prices for homeowners across Sheffield.",
    "Drawing on years of practical experience, Daniel takes a hands-on, meticulous approach to every project. From precise hedge trimming and expert lawn care to full-scale garden clearances and durable fencing, he ensures every garden reaches its full potential.",
    "Daniel is deeply passionate about transforming and nurturing outdoor spaces. Every client relationship begins with a complimentary site visit, a transparent discussion about your garden's requirements, and a straightforward quotation with absolutely no hidden costs.",
    "Under Daniel's dedicated leadership, DK Garden Services has forged an outstanding reputation throughout Sheffield and the surrounding areas, consistently earning five-star reviews for exceptional service and reliability.",
    "When he's not actively managing projects on-site, Daniel enjoys spending quality time with his family and continually refining his own garden at home in Sheffield.",
  ],
  cta: { label: "Contact Daniel", href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    "At DK Garden Services, our mission is to ensure gardens across Sheffield remain beautiful, healthy, and vibrant throughout the seasons. We firmly believe that every home deserves an exceptional outdoor space — and we make that a reality with fair, transparent pricing.",
    "We approach every task with the same rigorous attention to detail, whether we are conducting a weekly lawn mow or executing a complex garden rescue. Our team takes immense pride in offering a dependable service, straightforward communication, and leaving every garden significantly better than we found it.",
    "As an independent Sheffield business, we are deeply committed to cultivating long-lasting relationships with our clients. We treat your garden with the same care and respect as if it were our own.",
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};
