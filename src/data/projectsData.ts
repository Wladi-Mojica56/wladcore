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
]
