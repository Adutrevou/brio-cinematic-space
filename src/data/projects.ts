export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  size: "large" | "medium";
}

export const projects: Project[] = [
  {
    slug: "namib-residence",
    title: "Namib Residence",
    category: "Architecture",
    location: "Namibia",
    year: "2024",
    description: "A desert sanctuary where architecture meets the infinite horizon. Raw concrete and glass frame the Namib's ancient landscapes.",
    image: "/placeholder.svg",
    size: "large",
  },
  {
    slug: "zambezi-river-resort",
    title: "Zambezi River Resort",
    category: "Architecture",
    location: "Zambia",
    year: "2023",
    description: "Luxury hospitality architecture on the banks of the Zambezi. Timber, stone, and water converge in a celebration of place.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "eyrie-residence",
    title: "Eyrie Residence",
    category: "Architecture",
    location: "Johannesburg",
    year: "2024",
    description: "Perched above the city, this residence commands views through dramatic cantilevers and floor-to-ceiling glazing.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "eye-of-africa-cinema",
    title: "Eye of Africa Cinema",
    category: "Smart Cinema",
    location: "Eye of Africa Estate",
    year: "2023",
    description: "A bespoke private cinema where acoustics, lighting, and technology create an immersive theatrical experience.",
    image: "/placeholder.svg",
    size: "large",
  },
  {
    slug: "royce-road-residence",
    title: "Royce Road Residence",
    category: "Architecture",
    location: "Johannesburg",
    year: "2023",
    description: "Contemporary elegance meets suburban sophistication. Clean lines and warm materiality define this family home.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "islands-house",
    title: "Islands House",
    category: "Interior Design",
    location: "Johannesburg",
    year: "2024",
    description: "An interior transformation where stone, oak, and natural light redefine domestic luxury.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "bryanston-cinema",
    title: "Bryanston Cinema",
    category: "Smart Cinema",
    location: "Bryanston",
    year: "2024",
    description: "State-of-the-art home cinema engineered for acoustic perfection and seamless smart integration.",
    image: "/placeholder.svg",
    size: "large",
  },
  {
    slug: "victoria-falls-tiny-home",
    title: "Victoria Falls Tiny Home",
    category: "Tiny Homes",
    location: "Victoria Falls",
    year: "2023",
    description: "Proof that luxury has no minimum footprint. A compact dwelling that maximises every square metre.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "makgadikgadi-residence",
    title: "Makgadikgadi National Park Residence",
    category: "Architecture",
    location: "Botswana",
    year: "2024",
    description: "Architecture that honours the salt pans. Low-profile, earth-toned, and deeply connected to landscape.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "whiskey-creek-residence",
    title: "Whiskey Creek Residence",
    category: "Architecture",
    location: "Johannesburg",
    year: "2023",
    description: "Where water features, natural stone, and contemporary architecture create a serene family compound.",
    image: "/placeholder.svg",
    size: "large",
  },
  {
    slug: "magalies-view-residence",
    title: "Magalies View Residence",
    category: "Architecture",
    location: "Magaliesburg",
    year: "2024",
    description: "Mountain views framed by precise geometry. Architecture as a lens for the natural world.",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    slug: "pod-project-fifty-two",
    title: "Pod Project Fifty-Two",
    category: "Tiny Homes",
    location: "South Africa",
    year: "2024",
    description: "A modular micro-dwelling that challenges convention. Compact, intelligent, and beautifully resolved.",
    image: "/placeholder.svg",
    size: "medium",
  },
];

export const categories = ["All", "Architecture", "Interior Design", "Smart Cinema", "Tiny Homes"];
