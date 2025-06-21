export type NavLink = {
  href: string;
  label: string;
};

export type Skill = {
  name: string;
};

export type Project = {
  id: number;
  title: string;
  category: "Sustainable Architecture" | "Urban Interventions" | "Academic Projects";
  images: string[];
  description: string;
  role: string;
  features: string[];
  links?: { href: string; label:string }[];
  location: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  specialization: string;
};

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'Revit' },
  { name: 'AutoCAD' },
  { name: 'Sustainable Design' },
  { name: 'Urban Planning' },
  { name: 'Rhino 3D' },
  { name: 'SketchUp' },
  { name: 'Adobe Creative Suite' },
  { name: 'Regenerative Design' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Veridian Eco-Tower',
    category: 'Sustainable Architecture',
    images: ['https://firebasestudio.corp.google.com/static/transient/67a5b3a4-84c6-4d76-8809-5a58ac52c035.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    description: 'A mixed-use high-rise concept that integrates vertical gardens, rainwater harvesting, and passive solar design to create a self-sustaining ecosystem in an urban core.',
    role: 'Lead Designer',
    features: [
      'Biophilic design principles',
      'Net-zero energy consumption target',
      'Integrated greywater recycling system',
      'Community rooftop farm',
    ],
    location: "Metropolis, USA"
  },
  {
    id: 2,
    title: 'The Ripple Park',
    category: 'Urban Interventions',
    images: ['https://firebasestudio.corp.google.com/static/transient/915152a5-da9f-4318-8f86-d28c94e77353.jpeg', 'https://placehold.co/800x600.png'],
    description: 'A transformative public space project that repurposed a derelict industrial canal into a vibrant park focused on stormwater management and community engagement.',
    role: 'Urban Strategist & Planner',
    features: [
      'Bioswales for natural water filtration',
      'Modular, adaptable public seating and spaces',
      'Use of recycled and locally sourced materials',
      'Art installations by local artists',
    ],
    location: "Rivertown, USA"
  },
  {
    id: 3,
    title: 'Symbiotic Housing',
    category: 'Academic Projects',
    images: ['https://firebasestudio.corp.google.com/static/transient/14b301b4-e3ac-41e9-913a-7ed403c9ebac.jpeg', 'https://placehold.co/800x600.png'],
    description: 'Master\'s thesis project exploring co-living models that integrate shared resources, waste-to-energy systems, and adaptable living units for a circular economy.',
    role: 'Researcher & Designer',
    features: [
      'Prefabricated modular construction',
      'Anaerobic digester for organic waste',
      'Shared electric vehicle fleet',
      'Adaptable floor plans for changing family needs',
    ],
    location: "University of Innovation"
  },
  {
    id: 4,
    title: 'Solar Canopy Market',
    category: 'Sustainable Architecture',
    images: ['https://firebasestudio.corp.google.com/static/transient/b4277b73-0f19-48e0-a7d1-e62e08e6f1a8.jpeg', 'https://placehold.co/800x600.png'],
    description: 'A community market topped with an expansive photovoltaic canopy, providing clean energy for the neighborhood and a shaded public gathering space.',
    role: 'Project Architect',
    features: [
      'Generates 120% of its own energy needs',
      'Passive cooling through canopy design',
      'Flexible vendor stalls for local entrepreneurs',
      'Educational displays on renewable energy',
    ],
    location: "Sunfield, USA"
  },
    {
    id: 5,
    title: 'Green-Link Corridor',
    category: 'Urban Interventions',
    images: ['https://firebasestudio.corp.google.com/static/transient/e8802956-6a2c-4cc0-911e-7b715694c92e.jpeg', 'https://placehold.co/800x600.png'],
    description: 'An urban design initiative to connect disparate green spaces within the city via a network of pedestrian and cycling-friendly pathways, promoting biodiversity and active transport.',
    role: 'Urban Designer',
    features: [
      'Prioritizes pedestrian and cyclist safety',
      'Incorporates native plant species to create pollinator pathways',
      'Integrates smart lighting and wayfinding systems',
      'Reduces urban heat island effect through increased green cover',
    ],
    location: "Bridgeway City, USA"
  },
  {
    id: 6,
    title: 'The Living Classroom',
    category: 'Academic Projects',
    images: ['https://firebasestudio.corp.google.com/static/transient/51b9d4f0-459f-4a0b-9c29-37ca8d89e4bc.jpeg'],
    description: 'A proposal for a primary school built with natural materials, designed as a teaching tool for sustainability, featuring exposed systems and interactive environmental displays.',
    role: 'Student Project Lead',
    features: [
      'Rammed earth and timber construction',
      'Outdoor learning spaces for every classroom',
      'Visible water collection and filtration systems',
      'Designed to Living Building Challenge standards',
    ],
    location: "University of Innovation"
  },
];

export const professionalExperience: Experience[] = [
    {
        company: 'GreenScape Architects',
        role: 'Architectural Intern',
        period: 'Summer 2024',
        description: [
            'Assisted in the design development of two large-scale sustainable commercial projects.',
            'Produced detailed drawings and 3D models using Revit and AutoCAD.',
            'Conducted research on sustainable materials and green building certifications.'
        ]
    },
    {
        company: 'City Planning Department',
        role: 'Urban Design Intern',
        period: 'Summer 2023',
        description: [
            'Contributed to the development of a new master plan for the downtown district.',
            'Created visualizations and public presentation materials for community workshops.',
            'Analyzed zoning codes and land use policies for urban intervention proposals.'
        ]
    }
];

export const education: Education[] = [
    {
        institution: 'University of Innovation',
        degree: 'Master of Architecture',
        period: '2023 - 2025',
        specialization: 'Specialization in Sustainable and Regenerative Design'
    },
    {
        institution: 'State Design College',
        degree: 'Bachelor of Science in Architecture',
        period: '2019 - 2023',
        specialization: 'Minor in Urban Studies'
    }
];

export const certifications: string[] = [
    'LEED Green Associate',
    'Certified Passive House Designer (In Progress)',
    'Student Ambassador for Architects for a Sustainable Future'
];
