import styles from './Footer.module.css'
import logo from '../assets/Logotipo WladCore.svg'


const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        services: [
            { name: 'Desarrollo Web', href: '#services' },
            { name: 'Diseño UI/UX', href: '#services' },
            { name: 'Automatización', href: '#services' },
            { name: 'Performance', href: '#services' },
        ],
        company: [
            { name: 'Sobre Nosotros', href: '#about' },
            { name: 'Portafolio', href: '#portfolio' },
            { name: 'Contacto', href: '#contact' },
        ],
    }

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Wladi-Mojica56',
            icon: 'bi bi-github',
        },
        {
            name: 'Email',
            href: 'mailto:wladimyr.mojica@gmail.com',
            icon: 'bi bi-envelope',
        },
        {
            name: 'Portfolio',
            href: 'https://wladcode.pro',
            icon: 'bi bi-globe',
        },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Top Section */}
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <img src={logo} alt="WladCore" />
                        </div>
                        <p className={styles.footerDescription}>
                            Transformamos ideas en experiencias digitales. 
                            Desarrollo web moderno y soluciones tecnológicas 
                            para startups y empresas.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={social.name}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        <div className={styles.linkColumn}>
                            <h3 className={styles.linkTitle}>Servicios</h3>
                            <ul className={styles.linkList}>
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className={styles.linkItem}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3 className={styles.linkTitle}>Empresa</h3>
                            <ul className={styles.linkList}>
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className={styles.linkItem}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomContent}>
                        <p className={styles.copyright}>
                            © {currentYear} WladCore. Todos los derechos reservados.
                        </p>
                        <div className={styles.footerBottomLinks}>
                            <a href="#" className={styles.bottomLink}>
                                Política de Privacidad
                            </a>
                            <span className={styles.separator}>•</span>
                            <a href="#" className={styles.bottomLink}>
                                Términos de Servicio
                            </a>
                            <span className={styles.separator}>•</span>
                            <a href="#" className={styles.bottomLink}>
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Effects */}
            <div className={styles.footerEffects}>
                <div className={styles.footerGradient}></div>
            </div>
        </footer>
    )
}

export default Footer