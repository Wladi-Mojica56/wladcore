import portada from '../assets/portada1.png'
import portada2 from '../assets/portada2.png'
import portada3 from '../assets/portada3 (2).png'

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
        image: portada,
        link: 'https://interview-ai.com',
    },
    {
        title: 'Portafolio Profesional',
        category: 'Web Development',
        description: 'Portafolio profesional para mostrar proyectos y habilidades.',
        tags: ['React', 'Firebase', 'API'],
        image: portada2,
        link: 'https://wladcode.pro',
    },
    {
        title: 'WhiteHunters',
        category: 'Web Development',
        description: 'Landing page profesional para ofrecer servicios de ciberseguridad.',
        tags: ['React', 'Firebase', 'API'],
        image: portada3,
        link: 'https://whitehunters.com',
    },
]
