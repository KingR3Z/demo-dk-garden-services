export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "crookes-driveway",
    title: "block paved driveway",
    description:
      "A tired concrete driveway replaced with premium herringbone block paving by Daniel and the DK Garden Services team. Complete with new edging, drainage and a fresh look that transformed the front of the property.",
    location: "Crookes, Sheffield",
    designTime: "1 week",
    installationTime: "5 days",
    image: "/images/projects/project-01.jpg",
  },
  {
    id: "hillsborough-lawn",
    title: "artificial lawn & patio",
    description:
      "Full back garden renovation by DK Garden Services featuring artificial grass, Indian stone patio slabs and new timber fencing. A low-maintenance garden the whole family can enjoy.",
    location: "Hillsborough, Sheffield",
    designTime: "1 week",
    installationTime: "7 days",
    image: "/images/projects/project-02.jpg",
  },
  {
    id: "dore-herringbone",
    title: "herringbone block paving",
    description:
      "Classic charcoal herringbone block paving with contrasting border detail. New drainage channels fitted and old concrete removed by Daniel's expert team. A driveway built to last.",
    location: "Dore, Sheffield",
    designTime: "3 days",
    installationTime: "4 days",
    image: "/images/projects/project-03.jpg",
  },
  {
    id: "fulwood-fencing",
    title: "fencing & brick pillars",
    description:
      "New boundary treatment designed by DK Garden Services with timber lap panels set between hand-built brick pillars. Finished with post caps and a matching pedestrian gate.",
    location: "Fulwood, Sheffield",
    designTime: "3 days",
    installationTime: "5 days",
    image: "/images/projects/project-04.jpg",
  },
  {
    id: "ecclesall-gravel",
    title: "red granite gravel path",
    description:
      "A winding gravel pathway through a redesigned front garden. Red granite aggregate over membrane with timber sleeper borders installed by Daniel. Simple, elegant and practical.",
    location: "Ecclesall, Sheffield",
    designTime: "2 days",
    installationTime: "3 days",
    image: "/images/projects/project-05.jpg",
  },
  {
    id: "norton-paving",
    title: "gold block paving driveway",
    description:
      "Full front garden transformation from lawn to a spacious gold-toned block paving driveway by DK Garden Services. Extra parking space created with matching pathways.",
    location: "Norton, Sheffield",
    designTime: "1 week",
    installationTime: "6 days",
    image: "/images/projects/project-06.jpg",
  },
  {
    id: "walkley-concrete",
    title: "stamped concrete driveway",
    description:
      "Pattern imprinted concrete in a natural stone finish. A cost-effective alternative fitted by Daniel's team that looks stunning and requires minimal maintenance for years to come.",
    location: "Walkley, Sheffield",
    designTime: "3 days",
    installationTime: "3 days",
    image: "/images/projects/project-07.jpg",
  },
  {
    id: "broomhill-tarmac",
    title: "tarmac driveway",
    description:
      "Professional tarmac driveway installation with block paving apron and border details by DK Garden Services. Clean, durable finish that enhances the property's kerb appeal.",
    location: "Broomhill, Sheffield",
    designTime: "2 days",
    installationTime: "2 days",
    image: "/images/projects/project-08.jpg",
  },
];
