export const client = {
  name: "DK Garden Services",
  shortName: "DK Garden",
  legalName: "DK Garden Services",
  tagline: "GARDENS | LANDSCAPING | MAINTENANCE | DESIGN",
  logoInitials: "D G",
  founderName: "Daniel",
  founderRole: "Director",
  yearFounded: "",
  phone: "0114 233 2729",
  email: "enquiries@dkgardeningservices.co.uk",
  whatsapp: { display: "0114 233 2729", link: "https://wa.me/441142332729" },
  address: ["Sheffield"],
  region: "Sheffield and surrounding areas",
  basedIn: "Sheffield",
  hours: [
    { day: "Monday \u2014 Friday", time: "8:00 AM \u2014 5:00 PM" },
    { day: "Saturday", time: "9:00 AM \u2014 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" }],
  awards: [    { title: "Google Reviews \u2014 5.0 Stars", year: "2026", category: "REVIEWS" }],
  partners: [{ name: "Local Suppliers", logo: null }, { name: "Quality Materials", logo: null }],
  metaTitle: "DK Garden Services \u2014 Garden Services in Sheffield",
  metaDescription: "Professional garden services in Sheffield. Quality workmanship guaranteed.",
};
export const phoneLink = `tel:${client.phone.replace(/\s/g, "")}`;
export const emailLink = `mailto:${client.email}`;
