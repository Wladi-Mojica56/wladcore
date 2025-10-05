
import styles from './Navbar.module.css'
import logo from '../assets/Logo WladCore.svg'

const Navbar = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        
        // Para "Inicio", ir completamente arriba
        if (sectionId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        // Para otras secciones, usar scrollIntoView sin offset
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Función para abrir WhatsApp
    const handleWhatsAppClick = () => {
        const phoneNumber = "3248213762";
        const message = "¡Hola! Me interesa conocer más sobre sus servicios.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <div 
                className={styles.navbarLogo}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >
                <img src={logo} alt="WladCore" />
                <span className={styles.navbarLogoText}>WladCore</span>
            </div>
            
            <ul className={styles.navbarMenu}>
            <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Inicio</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Servicios</a></li>
            <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portafolio</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Sobre Nosotros</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a></li>
            </ul>

            <button className={styles.navbarCta} onClick={handleWhatsAppClick}>
                WhatsApp
            </button>
        </div>
        </nav>
    )
}

export default Navbar
