import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Ahora disponible
                    </div>
                    
                    <h1 className={styles.heroTitle}>
                        Transformamos ideas en
                        <span className={styles.gradient}> experiencias digitales</span>
                    </h1>
                    
                    <p className={styles.heroSubtitle}>
                        Desarrollo web moderno y soluciones tecnológicas para startups 
                        y empresas que buscan destacar en el mundo digital.
                    </p>
                    
                    <div className={styles.heroActions}>
                        <button className={styles.btnPrimary}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Comenzar proyecto
                        </button>
                        <button className={styles.btnSecondary}
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            Ver portafolio
                        </button>
                    </div>

                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>50+</div>
                            <div className={styles.statLabel}>Proyectos</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>Satisfacción</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>24/7</div>
                            <div className={styles.statLabel}>Soporte</div>
                        </div>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    <div className={styles.visualCard}>
                        <div className={styles.cardGlow}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.gridPattern}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.backgroundEffects}>
                <div className={styles.gradientBlur}></div>
                <div className={styles.gradientBlur2}></div>
            </div>
        </section>
    )
}

export default Hero

