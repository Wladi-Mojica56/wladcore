export interface Project {
    title: string
    category: string
    description: string
    tags: string[]
    image: string
    link: string
}

export const projectsData: Project[] = [
    {
        title: 'Interview AI',
        category: 'Web Development',
        description: 'Plataforma de entrevistas tecnicas y psicológicas para empresas impulsada por inteligencia artificial.',
        tags: ['React', 'Node.js', 'Firebase'],
        image: 'project1',
        link: 'https://interview-ai.com',
    },
    {
        title: 'Portafolio Profesional',
        category: 'Web Development',
        description: 'Portafolio profesional para mostrar proyectos y habilidades.',
        tags: ['React', 'Firebase', 'API'],
        image: 'project2',
        link: 'https://wladcode.pro',
    },
    {
        title: 'SaaS Dashboard',
        category: 'UI/UX Design',
        description: 'Dashboard analítico para gestión de datos empresariales con visualizaciones interactivas.',
        tags: ['TypeScript', 'Charts', 'Design'],
        image: 'project3',
        link: 'https://saas-dashboard.com',
    },
    {
        title: 'AI Content Generator',
        category: 'AI/ML',
        description: 'Herramienta de generación de contenido impulsada por inteligencia artificial.',
        tags: ['Python', 'OpenAI', 'Next.js'],
        image: 'project4',
        link: 'https://ai-content-gen.com',
    },
    {
        title: 'Fitness Tracking',
        category: 'Mobile App',
        description: 'App de seguimiento fitness con planes personalizados y estadísticas detalladas.',
        tags: ['Flutter', 'Health API', 'Cloud'],
        image: 'project5',
        link: 'https://fitness-tracker.com',
    },
    {
        title: 'Real Estate Portal',
        category: 'Web Development',
        description: 'Portal inmobiliario con búsqueda avanzada, mapas interactivos y tours virtuales.',
        tags: ['Vue.js', 'Maps API', 'WebGL'],
        image: 'project6',
        link: 'https://real-estate-portal.com',
    },
]
