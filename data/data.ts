// data/data.ts
// Updated with more realistic placeholders and additional structure

// =====================================
// Interfaces
// =====================================

export interface Project {
  slug: string;
  name: string;
  status: 'Resell available' | 'Ongoing' | 'Completed';
  location: string;
  googleMapsUrl: string; // Google Maps Embed URL
  description: string;
  features: string[];
  mainImage: string; // Path to main image for card/header
  gallery: string[]; // Paths to gallery images
  brochureUrl: string; // Path to downloadable PDF brochure
}

export interface CompanyInfo {
  name: string;
  owner: string;
  phone: string;
  whatsapp: string; // No '+' for the API link (e.g., "923001234567")
  email: string;
  address: string;
  googleMapsLocation: string; // General company location map URL
  mission: string;
  vision: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  project: string; // The project related to the testimonial
}

// Interfaces for About Us Page
export interface AboutHeroData {
  heading: string;
  subheading: string;
  backgroundImage: string;
}

export interface MissionVisionData {
  mission: string;
  vision: string;
  values: string[];
}

export interface OwnerBioData {
  name: string;
  title: string;
  bio: string;
  photo: string;
  videoUrl?: string; // Optional: YouTube or Vimeo embed URL
}

export interface AboutCTAButton {
  text: string;
  link: string;
  type: 'primary' | 'secondary' | 'accent'; 
}

export interface AboutCTAData {
  heading: string;
  description: string;
  buttons: AboutCTAButton[];
}


// NEW INTERFACE for Service
export interface Service {
  slug: string;
  name: string;
  shortDescription: string; // Used on listing page
  longDescription: string;  // Used on detail page
  icon: string;             // Path to an SVG icon or small image
  mainImage: string;        // Path to main image for service detail page
  benefits: string[];       // Key benefits of this service
  process: string[];        // Steps in the service delivery process
  ctaLink?: string;         // Optional specific CTA link for this service
}


// NEW INTERFACE for GalleryItem
export interface GalleryItem {
  id: string; // Unique ID for each item
  src: string; // Path to the image file
  alt: string; // Alt text for accessibility
  title: string; // Display title for the image
  category: string; // Category for filtering (e.g., 'Project Name', 'Construction', 'Event')
}


// =====================================
// Data Constants
// =====================================

export const companyInfo: CompanyInfo = {
  name: "Mehmood & Co Builders and Developers",
  owner: "Sajjid Mehmood Cheema",
  phone: "+923003113748",
  whatsapp: "923003113748",
  email: "sajjidcheema57@gmail.com",
  address: "Ali Baba Banglows civil hospital, Khairpur, Pakistan",
  googleMapsLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1601.8383892934457!2d68.75417203302139!3d27.513113117509473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935db68da9190dd%3A0xd2b7e9696e28dfbf!2sAli%20Baba%20Banglows!5e1!3m2!1sen!2s!4v1752815261812!5m2!1sen!2s", // ALi Baba banglows
  mission: "To build not just structures, but lasting communities through quality, integrity, and innovation.",
  vision: "To be the leading real estate developer in Pakistan, recognized for our commitment to excellence and customer satisfaction."
};

export const projects: Project[] = [
  {
    slug: "ali-baba-banglows",
    name: "Ali Baba Banglows",
    status: "Resell available",
    location: "civil hospital Road, Khairpur",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1601.8383892934457!2d68.75417203302139!3d27.513113117509473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935db68da9190dd%3A0xd2b7e9696e28dfbf!2sAli%20Baba%20Banglows!5e1!3m2!1sen!2s!4v1752815261812!5m2!1sen!2s", // Ali baba Banglows Map url
    description: "A landmark residential project offering modern amenities and a secure environment. Ali Baba Banglows provide a serene lifestyle with spacious homes designed for contemporary living. Each unit boasts high-quality finishes, ample natural light, and access to community parks. Perfect for families seeking comfort and style in a rapidly developing urban hub.",
    features: ["Gated Community", "24/7 Security", "Lush Green Parks", "Modern Infrastructure", "Electrification", "Community Club House"],
    mainImage: "/images/projects/ali-baba-main.jpg",
    gallery: [
      "/images/projects/ali-baba-gallery-1.jpg",
      "/images/projects/ali-baba-gallery-2.jpg",
      "/images/projects/ali-baba-gallery-3.jpg",
      "/images/projects/ali-baba-gallery-4.jpg",
    ],
    brochureUrl: "/brochures/ali-baba-banglows-brochure.pdf",
  },
  {
    slug: "khayaban-e-shafi",
    name: "Khayaban-e-Shafi",
    status: "Ongoing",
    location: "Near Railway Station Road, Khairpur",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.5864655315618!2d68.73225575462935!3d27.516081032358958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935dac00af480c7%3A0x2ccc41fefb871916!2sKhayaban-e-Shafi%20Rd%2C%20Khairpur%2C%20Pakistan!5e1!3m2!1sen!2s!4v1752816371536!5m2!1sen!2s", // Fictional Canal Road spot
    description: "Khayaban-e-Shafi offers premium commercial and residential plots at a prime location, promising high returns on investment and a luxurious lifestyle. This strategically located project is designed for both business and comfortable living, with easy access to major city arteries and essential amenities. It's an ideal choice for astute investors and families looking for a vibrant community.",
    features: ["Prime Location", "Commercial & Residential Plots", "Flexible Payment Plans", "LDA Approved", "State-of-the-art Sewerage System", "Dedicated Green Belts"],
    mainImage: "/images/projects/khayaban-e-shafi-main.png",
    gallery: [
      "/images/projects/khayaban-e-shafi-gallery-1.png",
      "/images/projects/khayaban-e-shafi-gallery-2.png",
      "/images/projects/khayaban-e-shafi-gallery-3.png",
      "/images/projects/khayaban-e-shafi-gallery-4.png",
      "/images/projects/khayaban-e-shafi-gallery-5.png",
    ],
    brochureUrl: "/brochures/khayaban-e-shafi-brochure.pdf",
  },
  {
    slug: "grand-avenue-homes",
    name: "Ali Village",
    status: "Ongoing",
    location: "Old National Highway Near SALU, Khairpur",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1601.8383892934457!2d68.75417203302139!3d27.513113117509473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935db68da9190dd%3A0xd2b7e9696e28dfbf!2sAli%20Baba%20Banglows!5e1!3m2!1sen!2s!4v1752815261812!5m2!1sen!2s",
    description: "A premium residential community designed for modern living. Ali village Homes combine contemporary architecture with luxurious amenities, offering residents a sophisticated and comfortable lifestyle. Featuring lush landscapes, secure environments, and close proximity to educational and healthcare facilities.",
    features: ["Clubhouse & Gym", "Swimming Pool", "24/7 Gated Security", "Underground Utilities", "Community Mosque", "Playgrounds"],
    mainImage: "/images/projects/grand-avenue-main.png",
    gallery: [
      "/images/projects/grand-avenue-gallery-1.jpg",
      "/images/projects/grand-avenue-gallery-2.jpg",
      "/images/projects/grand-avenue-gallery-3.jpg",
    ],
    brochureUrl: "/brochures/grand-ALi-Village-Map.pdf",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Mehmood & Co delivered our dream home on time and with exceptional quality. The team was professional and transparent throughout the process.",
    author: "Ahmed Raza",
    project: "Ali Baba Banglows"
  },
  {
    quote: "Investing in Khayaban-e-Shafi was the best decision we made. The location is prime and the development standards are top-notch.",
    author: "Fatima Khan",
    project: "Commercial Plot Owner"
  },
  {
    quote: "The attention to detail and customer service at Mehmood & Co is unparalleled. We are thrilled with our property in Grand Avenue Homes.",
    author: "Usman Ali",
    project: "Grand Avenue Homes"
  }
];

// Data for About Us Page
export const aboutHeroData: AboutHeroData = {
  heading: 'Building Trust, Developing Futures',
  subheading: 'Discover the story behind Mehmood & Co Builders and Developers.',
  backgroundImage: '/images/about/about-hero-bg.png',
};

export const missionVisionData: MissionVisionData = {
  mission: 'Our mission is to consistently deliver exceptional construction and land development projects that exceed client expectations, contribute positively to communities, and uphold the highest standards of quality and integrity.',
  vision: 'To be the leading and most trusted name in real estate development in Pakistan, recognized for innovation, sustainable practices, and creating lasting value for our stakeholders.',
  values: [
    'Integrity & Transparency',
    'Quality & Excellence',
    'Client-Centricity',
    'Innovation & Adaptability',
    'Sustainability & Responsibility',
    'Teamwork & Collaboration',
  ],
};

export const ownerBioData = {
  name: 'Sajjid Mehmood Cheema',
  title: 'Founder & CEO',
  bio: 'Sajjid Mehmood Cheema is a visionary leader with over two decades of experience in the construction and real estate industry. His profound understanding of market dynamics, coupled with an unwavering commitment to quality, has been instrumental in establishing Mehmood & Co as a beacon of excellence. Under his astute leadership, the company has successfully completed numerous landmark projects, transforming landscapes and fulfilling dreams. Sajjid Mehmood Cheema believes in fostering long-term relationships built on trust and mutual respect, ensuring every project reflects the company\'s core values.',
  photo: '/images/about/sajjid-mehmood-cheema.jpg',
  signature: '/images/signature.png',
  personalQuote: 'Building dreams into reality, one foundation at a time',
  achievements: [
    '25+ Years Industry Experience',
    '50+ Successful Projects',
    'Award-Winning Designs',
    'Trusted by 1000+ Clients'
  ],
  videoUrl: 'https://www.youtube.com/embed/xjViVYBGpsg',
  videoThumbnail: '/images/owner-video-thumbnail.jpg' // Add local fallback thumbnail
};

export const aboutCTAData: AboutCTAData = {
  heading: 'Ready to Transform Your Vision into Reality?',
  description: 'Whether you have a query, want to discuss a project, or explore partnership opportunities, we are here to assist you.',
  buttons: [
    { text: 'Contact Us', link: '/contact', type: 'primary' },
    { text: 'View Projects', link: '/projects', type: 'secondary' },
    { text: 'Download Brochure', link: '/brochures/company-brochure.pdf', type: 'accent' },
  ],
};

// NEW DATA CONSTANT for Services
export const services: Service[] = [
  {
    slug: "land-development",
    name: "Land Development",
    shortDescription: "Transforming raw land into prime, ready-to-build plots with strategic planning and infrastructure.",
    longDescription: "Our comprehensive land development services encompass everything from initial site analysis and master planning to infrastructure development and plot demarcation. We handle zoning regulations, environmental impact assessments, and ensure optimal utilization of land resources. Our expertise turns barren landscapes into valuable, sustainable communities.",
    icon: "/images/services/icons/land-development.png", // Create this SVG or use an image
    mainImage: "/images/projects/projects-hero-bg.png", // Create this image
    benefits: [
      "Strategic Site Analysis & Acquisition",
      "Master Planning & Urban Design",
      "Infrastructure Development (Roads, Utilities, Drainage)",
      "Regulatory Approvals & Compliance",
      "Sustainable & Eco-friendly Practices",
      "Value Addition & ROI Maximization",
    ],
    process: [
      "Feasibility Study & Due Diligence",
      "Master Planning & Design Approval",
      "Land Acquisition & Legal Formalities",
      "Infrastructure Development & Construction",
      "Plot Demarcation & Sales",
      "Handover & Community Establishment",
    ],
  },
  {
    slug: "architectural-planning",
    name: "Architectural Planning",
    shortDescription: "Crafting innovative and functional designs that bring your vision to life with precision and creativity.",
    longDescription: "Our architectural planning team specializes in creating bespoke designs for residential, commercial, and mixed-use projects. We blend aesthetics with functionality, ensuring every design is not only visually appealing but also highly efficient and sustainable. From conceptualization to detailed blueprints, we guide you through every stage, incorporating your preferences and ensuring compliance with all building codes.",
    icon: "/images/services/icons/architectural-planning.png", // Create this SVG or use an image
    mainImage: "/images/services/services-hero-bg.png", // Create this image
    benefits: [
      "Customized & Innovative Designs",
      "Space Optimization & Ergonomics",
      "Sustainable & Energy-Efficient Solutions",
      "3D Visualizations & Walkthroughs",
      "Compliance with Building Codes & Regulations",
      "Cost-Effective Design Strategies",
    ],
    process: [
      "Initial Consultation & Requirement Gathering",
      "Conceptual Design & Sketching",
      "Detailed Design & Blueprinting",
      "3D Modeling & Visualization",
      "Municipal Approval & Permitting",
      "Construction Documentation & Supervision (design phase)",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    shortDescription: "Delivering high-quality construction with robust techniques, timely execution, and unwavering commitment to safety.",
    longDescription: "Mehmood & Co is synonymous with superior construction quality. Our experienced team of engineers, project managers, and skilled labor ensures that every structure is built to the highest standards, on time and within budget. We employ modern construction techniques, adhere to stringent safety protocols, and utilize premium materials to guarantee durability and client satisfaction. From groundbreaking to final finishes, we manage every aspect of the build process with precision.",
    icon: "/images/services/icons/construction.png", // Create this SVG or use an image
    mainImage: "/images/gallery/gallery-hero-bg.png", // Create this image
    benefits: [
      "High-Quality Materials & Workmanship",
      "Experienced & Certified Workforce",
      "Timely Project Delivery",
      "Strict Adherence to Safety Standards",
      "Transparent Project Management",
      "Post-Construction Support",
    ],
    process: [
      "Site Preparation & Foundation Laying",
      "Structural Framework Construction",
      "MEP (Mechanical, Electrical, Plumbing) Installation",
      "Finishing Works (Plaster, Flooring, Painting)",
      "Quality Control & Inspections",
      "Project Handover & Client Walkthrough",
    ],
  },
];


// NEW DATA CONSTANT for Gallery Items
export const galleryItems: GalleryItem[] = [
  // Project: Ali Baba Banglows
  {
    id: 'ab1',
    src: '/images/projects/ali-baba-gallery-1.jpg',
    alt: 'Ali Baba Banglows Exterior View',
    title: 'Ali Baba Banglows - Office',
    category: 'Ali Baba Banglows',
  },
  {
    id: 'ab2',
    src: '/images/projects/ali-baba-gallery-2.jpg',
    alt: 'Ali Baba Banglows Interior',
    title: 'Ali Baba Banglows - Roads',
    category: 'Ali Baba Banglows',
  },
  {
    id: 'ab3',
    src: '/images/projects/ali-baba-gallery-3.jpg',
    alt: 'Ali Baba Banglows Community Park',
    title: 'Ali Baba Banglows - Park',
    category: 'Ali Baba Banglows',
  },
  {
    id: 'ab4',
    src: '/images/projects/ali-baba-gallery-4.jpg',
    alt: 'Ali Baba Banglows Street View',
    title: 'Ali Baba Banglows - Gate',
    category: 'Ali Baba Banglows',
  },
  // Project: Khayaban-e-Shafi
  {
    id: 'ks1',
    src: '/images/projects/khayaban-e-shafi-gallery-1.png',
    alt: 'Khayaban-e-Shafi Commercial Area',
    title: 'Khayaban-e-Shafi - Office',
    category: 'Khayaban-e-Shafi',
  },
  {
    id: 'ks2',
    src: '/images/projects/khayaban-e-shafi-gallery-2.png',
    alt: 'Khayaban-e-Shafi Residential Plots',
    title: 'Khayaban-e-Shafi - Commercial',
    category: 'Khayaban-e-Shafi',
  },
  {
    id: 'ks3',
    src: '/images/projects/khayaban-e-shafi-gallery-3.png',
    alt: 'Khayaban-e-Shafi Infrastructure Development',
    title: 'Khayaban-e-Shafi - Plots',
    category: 'Khayaban-e-Shafi',
  },
  {
    id: 'ks4',
    src: '/images/projects/khayaban-e-shafi-gallery-4.png',
    alt: 'Khayaban-e-Shafi Site Progress',
    title: 'Khayaban-e-Shafi - Site Progress',
    category: 'Khayaban-e-Shafi',
  },
  // Project: Grand Avenue Homes
  {
    id: 'ga1',
    src: '/images/projects/grand-avenue-gallery-1.jpg',
    alt: 'Grand Avenue Homes Main Entrance',
    title: 'Ali Village Homes - Homes',
    category: 'Grand Avenue Homes',
  },
  {
    id: 'ga2',
    src: '/images/projects/grand-avenue-gallery-2.jpg',
    alt: 'Grand Avenue Homes Swimming Pool',
    title: 'Ali village Homes - Progess',
    category: 'Grand Avenue Homes',
  },
  {
    id: 'ga3',
    src: '/images/projects/grand-avenue-gallery-3.jpg',
    alt: 'Grand Avenue Homes Clubhouse',
    title: 'Ali Village Homes - KidsClub',
    category: 'Grand Avenue Homes',
  },
  // General Construction & Company Images
  {
    id: 'gen1',
    src: '/images/gallery/construction-site-1.jpg', // New image, create in public/images/gallery
    alt: 'Ongoing construction site with heavy machinery',
    title: 'On-site Development',
    category: 'Construction',
  },
  {
    id: 'gen2',
    src: '/images/gallery/blueprint-meeting.jpg', // New image, create in public/images/gallery
    alt: 'Architects reviewing blueprints',
    title: 'Planning',
    category: 'Planning',
  },
  {
    id: 'gen3',
    src: '/images/gallery/finished-interior.jpg', // New image, create in public/images/gallery
    alt: 'Modern finished interior of a home',
    title: 'Finishing',
    category: 'Interiors',
  },
  {
    id: 'gen4',
    src: '/images/gallery/team-work.jpg', // New image, create in public/images/gallery
    alt: 'Mehmood & Co team members working together',
    title: 'Our Dedicated Team',
    category: 'Company Life',
  },
];


// =====================================
// Utility Functions to Get Data
// =====================================

/**
 * Retrieves all company general information.
 */
export const getCompanyInfo = (): CompanyInfo => companyInfo;

/**
 * Retrieves all project data.
 */
export const getProjects = (): Project[] => projects;

/**
 * Retrieves a single project by its slug.
 * @param slug The unique slug of the project.
 * @returns Project data or undefined if not found.
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

/**
 * Retrieves all client testimonials.
 */
export const getTestimonials = (): Testimonial[] => testimonials;

/**
 * Retrieves all data specifically for the About Us page.
 */
export const getAboutUsData = () => ({
  aboutHero: aboutHeroData,
  missionVision: missionVisionData,
  ownerBio: ownerBioData,
  aboutCTA: aboutCTAData,
});

/**
 * Retrieves all services data.
 */
export const getServices = (): Service[] => services;

/**
 * Retrieves a single service by its slug.
 * @param slug The unique slug of the service.
 * @returns Service data or undefined if not found.
 */
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};


/**
 * Retrieves all gallery items.
 */
export const getGalleryItems = (): GalleryItem[] => galleryItems;


// =====================================
// Instructions for placeholder assets:
// =====================================
// Ensure these paths point to actual files in your `public` folder:

// General Images:
// - /public/images/logo.png (for Navbar, Footer)
// - /public/images/og-main.jpg (for Root Layout Open Graph)
// - /public/images/og-home.jpg (for Home Page Open Graph)
// - /public/images/og-projects.jpg (for Projects Listing Open Graph)
// - /public/images/hero-home-bg.jpg (for Home Hero background)
// - /public/images/about-hero-bg.jpg (for About Us Hero background)
// - /public/images/sajjid-mehmood-cheema.jpg (for Owner Bio)
// - /public/images/projects-hero-bg.jpg (for Projects Listing Hero background)

// Project Specific Images (create a 'projects' subfolder for organization):
// - /public/images/projects/ali-baba-main.jpg
// - /public/images/projects/ali-baba-gallery-1.jpg
// - /public/images/projects/ali-baba-gallery-2.jpg
// - /public/images/projects/ali-baba-gallery-3.jpg
// - /public/images/projects/ali-baba-gallery-4.jpg
// - /public/images/projects/khayaban-e-shafi-main.jpg
// - /public/images/projects/khayaban-e-shafi-gallery-1.jpg
// - /public/images/projects/khayaban-e-shafi-gallery-2.jpg
// - /public/images/projects/khayaban-e-shafi-gallery-3.jpg
// - /public/images/projects/khayaban-e-shafi-gallery-4.jpg
// - /public/images/projects/grand-avenue-main.jpg
// - /public/images/projects/grand-avenue-gallery-1.jpg
// - /public/images/projects/grand-avenue-gallery-2.jpg
// - /public/images/projects/grand-avenue-gallery-3.jpg


// Brochure PDFs (create a 'brochures' subfolder for organization):
// - /public/brochures/company-brochure.pdf (for general company brochure)
// - /public/brochures/ali-baba-banglows-brochure.pdf
// - /public/brochures/khayaban-e-shafi-brochure.pdf
// - /public/brochures/grand-avenue-homes-brochure.pdf

// Google Maps Embed URLs:
// For each project and the company info, replace the placeholder `googleMapsUrl` with actual iframe `src` values obtained from Google Maps.

// Owner's Video URL:
// If using, replace the placeholder YouTube URL in `ownerBioData.videoUrl` with an actual YouTube embed URL.


// Service Specific Images & Icons (create 'services' subfolder for images, 'icons' subfolder for SVGs):
// - /public/images/services/land-development-main.jpg
// - /public/images/services/architectural-planning-main.jpg
// - /public/images/services/construction-main.jpg
// - /public/icons/land-development.svg
// - /public/icons/architectural-planning.svg
// - /public/icons/construction.svg
// - /public/images/og-services.jpg (for Services Listing Page Open Graph)

// Gallery Specific Images (create a 'gallery' subfolder for general gallery images):
// - /public/images/gallery-hero-bg.jpg (for Gallery Hero background)
// - /public/images/og-gallery.jpg (for Gallery Listing Page Open Graph)
// - /public/images/gallery/construction-site-1.jpg
// - /public/images/gallery/blueprint-meeting.jpg
// - /public/images/gallery/finished-interior.jpg
// - /public/images/gallery/team-work.jpg
// Note: Project images (ali-baba-gallery-X.jpg etc.) are already listed under /images/projects/
