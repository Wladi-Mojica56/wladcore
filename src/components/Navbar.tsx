import styles from './Navbar.module.css'
import logo from '../assets/Logo WladCore.svg'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
                <img src={logo} alt="WladCode" />
                <span className={styles.navbarLogoText}>WladCode</span>
            </div>
            
            <ul className={styles.navbarMenu}>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
            </ul>

            <button className={styles.navbarCta}  
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            ¡Vamos!
            </button>
        </div>
        </nav>
    )
}

export default Navbar

