import styles from './About.module.css'

const About = () => {
    const stats = [
        {
            number: '3+',
            label: 'Años de experiencia',
        },
        {
            number: '48h',
            label: 'Tiempo de Respuesta',
        },
        {
            number: '1000+',
            label: 'Horas Dominadas',
        },
        {
            number: '24/7',
            label: 'Soporte disponible',
        },
    ]

    const values = [
        {
            title: 'Innovación',
            description: 'Adoptamos las últimas tecnologías y metodologías para crear soluciones que marquen la diferencia.',
        },
        {
            title: 'Calidad',
            description: 'Cada línea de código es revisada meticulosamente para garantizar productos de la más alta calidad.',
        },
        {
            title: 'Compromiso',
            description: 'Tu éxito es nuestro éxito. Nos comprometemos al 100% con cada proyecto que emprendemos.',
        },
    ]

    return (
        <section className={styles.about} id="about">
            <div className={styles.aboutContainer}>
                <div className={styles.aboutHeader}>
                    <span className={styles.label}>Sobre Nosotros</span>
                    <h2 className={styles.title}>
                        Construimos el futuro
                        <span className={styles.gradient}> digital de tu negocio</span>
                    </h2>
                </div>

                <div className={styles.aboutContent}>
                    <div className={styles.contentLeft}>
                        <p className={styles.mainText}>
                            Startup enfocada en desarollo web y automatización de procesos, apasionados por crear 
                            experiencias digitales excepcionales. Desde plataformas hasta procesos empresariales, 
                            ayudamos a nuestros clientes a alcanzar sus objetivos mediante soluciones 
                            tecnológicas innovadoras.
                        </p>
                        <p className={styles.secondaryText}>
                            Nuestra misión es transformar ideas en productos digitales que no solo 
                            cumplan con las expectativas, sino que las superen. Combinamos creatividad, 
                            tecnología y estrategia para entregar resultados medibles.
                        </p>

                        <div className={styles.stats}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statCard}>
                                    <div className={styles.statNumber}>{stat.number}</div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentRight}>
                        <div className={styles.values}>
                            {values.map((value, index) => (
                                <div 
                                    key={index} 
                                    className={styles.valueCard}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={styles.valueNumber}>0{index + 1}</div>
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDescription}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

