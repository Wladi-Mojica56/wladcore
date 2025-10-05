import styles from './Portfolio.module.css'
import { projectsData } from '../data/projectsData'

const Portfolio = () => {
    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.portfolioContainer}>
                <div className={styles.portfolioHeader}>
                    <span className={styles.label}>Portafolio</span>
                    <h2 className={styles.title}>
                        Proyectos que
                        <span className={styles.gradient}> hablan por sí mismos</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Explora algunos de nuestros trabajos más recientes y descubre 
                        cómo ayudamos a empresas a alcanzar sus objetivos digitales.
                    </p>
                </div>

                <div className={styles.portfolioGrid}>
                    {projectsData.map((project, index) => (
                        <article 
                            key={index} 
                            className={styles.projectCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.projectImage}>
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} - ${project.description}`}
                                    className={styles.projectImage}
                                />
                                <div className={styles.imageOverlay}>
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.viewButton}
                                        aria-label={`Ver proyecto ${project.title}`}
                                    >
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                            
                            <div className={styles.projectContent}>
                                <span className={styles.projectCategory}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio