import styles from './Services.module.css'

const Services = () => {
    const services = [
        {
            number: '01',
            title: 'Desarrollo Web',
            description: 'Aplicaciones web modernas y responsive con las últimas tecnologías. React, TypeScript y frameworks modernos.',
        },
        {
            number: '02',
            title: 'Diseño UI/UX',
            description: 'Interfaces intuitivas y atractivas que convierten visitantes en clientes. Diseño centrado en el usuario.',
        },
        {
            number: '03',
            title: 'Automatización Inteligente',
            description: 'Soluciones personalizadas que implementan algoritmos para optimizar y automatizar procesos repetitivos, sin necesidad de desarrollar proyectos complejos.',
        },
        {
            number: '04',
            title: 'Performance',
            description: 'Optimización y velocidad. Sitios web ultra-rápidos que mejoran el SEO y la experiencia del usuario.',
        },
        {
            number: '05',
            title: 'Seguridad',
            description: 'Implementación de mejores prácticas de seguridad. Protección de datos y cumplimiento de normativas.',
        },
        {
            number: '06',
            title: 'Cloud & DevOps',
            description: 'Despliegue en la nube, CI/CD, y gestión de infraestructura. Escalabilidad garantizada.',
        },
    ]

    return (
        <section className={styles.services} id="services">
            <div className={styles.servicesContainer}>
                <div className={styles.servicesHeader}>
                    <span className={styles.label}>Servicios</span>
                    <h2 className={styles.title}>
                        Todo lo que necesitas para
                        <span className={styles.gradient}> destacar online</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Soluciones completas de desarrollo y diseño para startups 
                        y empresas que quieren crecer en el mundo digital.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={styles.serviceCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardVisual}>
                                <div className={styles.visualShape}></div>
                                <span className={styles.visualNumber}>{service.number}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <div className={styles.cardHover}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
