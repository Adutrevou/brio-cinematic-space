import projectNamib from "@/assets/project-namib.jpg";
import projectZambezi from "@/assets/project-zambezi.jpg";
import projectEyrie from "@/assets/project-eyrie.jpg";
import projectEyeCinema from "@/assets/project-eye-cinema.jpg";
import projectRoyce from "@/assets/project-royce.jpg";
import projectIslands from "@/assets/project-islands.jpg";
import projectBryanston from "@/assets/project-bryanston.jpg";
import projectVictoria from "@/assets/project-victoria.jpg";
import projectMakgadikgadi from "@/assets/project-makgadikgadi.jpg";
import projectWhiskey from "@/assets/project-whiskey.jpg";
import projectMagalies from "@/assets/project-magalies.jpg";
import projectPod52 from "@/assets/project-pod52.jpg";

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
    description: "A desert sanctuary where architecture meets the infinite horizon. Raw concrete and expansive glazing frame the Namib's ancient landscapes, creating a home that belongs to its environment while offering complete modern luxury. The design responds to extreme climate conditions with passive cooling strategies, deep overhangs, and thermal mass walls that regulate internal temperatures naturally.",
    image: projectNamib,
    size: "large",
  },
  {
    slug: "zambezi-river-resort",
    title: "Zambezi River Resort",
    category: "Architecture",
    location: "Zambia",
    year: "2023",
    description: "Luxury hospitality architecture on the banks of the Zambezi. Timber, stone, and water converge in a celebration of place. Each suite is oriented to maximise river views while maintaining privacy, with open-air living areas that blur the boundary between interior comfort and the wild beauty of the African landscape.",
    image: projectZambezi,
    size: "medium",
  },
  {
    slug: "eyrie-residence",
    title: "Eyrie Residence",
    category: "Architecture",
    location: "Johannesburg",
    year: "2024",
    description: "Perched above the city, this residence commands panoramic views through dramatic cantilevers and floor-to-ceiling glazing. The design creates a sense of floating above the landscape, with bold geometric forms that express structural confidence while maintaining warmth through carefully selected natural materials and integrated landscape design.",
    image: projectEyrie,
    size: "medium",
  },
  {
    slug: "eye-of-africa-cinema",
    title: "Eye of Africa Cinema",
    category: "Smart Cinema",
    location: "Eye of Africa Estate",
    year: "2023",
    description: "A bespoke private cinema where acoustics, lighting, and technology create an immersive theatrical experience within the home. Custom acoustic panelling, Dolby Atmos surround sound, 4K laser projection, and automated ambient lighting are designed as integral architectural elements — not afterthoughts — resulting in a space that rivals commercial cinemas.",
    image: projectEyeCinema,
    size: "large",
  },
  {
    slug: "royce-road-residence",
    title: "Royce Road Residence",
    category: "Architecture",
    location: "Johannesburg",
    year: "2023",
    description: "Contemporary elegance meets suburban sophistication. Clean rendered walls and dark steel accents frame generous living spaces that flow seamlessly between indoors and out. The material palette of warm timber, natural stone, and floor-to-ceiling glass creates a home that feels both refined and inviting.",
    image: projectRoyce,
    size: "medium",
  },
  {
    slug: "islands-house",
    title: "Islands House",
    category: "Interior Design",
    location: "Johannesburg",
    year: "2024",
    description: "A complete interior transformation where natural stone, aged oak, and sculptural lighting redefine domestic luxury. Every surface was considered — from the hand-selected stone cladding to the custom joinery and curated art collection — creating layered spaces that feel collected over time rather than decorated.",
    image: projectIslands,
    size: "medium",
  },
  {
    slug: "bryanston-cinema",
    title: "Bryanston Cinema",
    category: "Smart Cinema",
    location: "Bryanston",
    year: "2024",
    description: "State-of-the-art home cinema engineered for acoustic perfection and seamless smart integration. Featuring a fibre-optic starlight ceiling, tiered plush seating, and a fully automated control system that adjusts lighting, projection, and audio with a single command. The acoustic treatment ensures reference-quality sound reproduction.",
    image: projectBryanston,
    size: "large",
  },
  {
    slug: "victoria-falls-tiny-home",
    title: "Victoria Falls Tiny Home",
    category: "Tiny Homes",
    location: "Victoria Falls",
    year: "2023",
    description: "Proof that luxury has no minimum footprint. This compact timber-clad dwelling near Victoria Falls maximises every square metre through intelligent spatial planning, integrated storage, and a generous deck that extends the living area into the landscape. Full smart home integration ensures comfort rivalling homes ten times its size.",
    image: projectVictoria,
    size: "medium",
  },
  {
    slug: "makgadikgadi-residence",
    title: "Makgadikgadi National Park Residence",
    category: "Architecture",
    location: "Botswana",
    year: "2024",
    description: "Architecture that honours the salt pans. A low-profile, earth-toned residence built with rammed earth walls and expansive covered terraces that connect inhabitants to one of Africa's most extraordinary landscapes. The design treads lightly on the land while providing complete modern comfort in a remote setting.",
    image: projectMakgadikgadi,
    size: "medium",
  },
  {
    slug: "whiskey-creek-residence",
    title: "Whiskey Creek Residence",
    category: "Architecture",
    location: "Johannesburg",
    year: "2023",
    description: "Where water features, natural stone, and contemporary architecture create a serene family compound. A series of interconnected pavilions are arranged around reflecting pools and mature landscaping, creating distinct zones for living, entertaining, and retreat while maintaining visual and spatial unity throughout.",
    image: projectWhiskey,
    size: "large",
  },
  {
    slug: "magalies-view-residence",
    title: "Magalies View Residence",
    category: "Architecture",
    location: "Magaliesburg",
    year: "2024",
    description: "Mountain views framed by precise geometry. Stone, timber, and glass are composed to create a home that serves as a lens for the dramatic Magaliesburg range. Deep overhangs provide shade and rain protection while the plunge pool appears to merge with the mountain horizon beyond.",
    image: projectMagalies,
    size: "medium",
  },
  {
    slug: "pod-project-fifty-two",
    title: "Pod Project Fifty-Two",
    category: "Tiny Homes",
    location: "South Africa",
    year: "2024",
    description: "A modular micro-dwelling that challenges convention. This innovative pod features a sleek, aerodynamic form with large porthole windows, engineered for rapid deployment on any terrain. Fully self-contained with solar power, water recycling, and smart climate control, it represents the future of compact, intelligent architecture.",
    image: projectPod52,
    size: "medium",
  },
];

export const categories = ["All", "Architecture", "Interior Design", "Smart Cinema", "Tiny Homes"];
