import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Configuración de EmailJS
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            alert('Error: Configuración de EmailJS no encontrada')
            return
        }

        try {
            // Enviar email usando EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    message: formData.message,
                    time: new Date().toLocaleString('es-CO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }),
                    email: formData.email,
                    subject: formData.subject,
                },
                publicKey
            )

            alert('¡Mensaje enviado correctamente! Te contactaremos pronto.')
            // Resetear formulario
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
        }
    }

    const contactInfo = [
        {
            number: '01',
            title: 'Email',
            value: 'Enviame un mensaje',
            link: 'mailto:wladimyr.mojica@gmail.com',
        },
        {
            number: '02',
            title: 'Horario',
            value: 'Lun-Vie 9:00-18:00',
        },
        {
            number: '03',
            title: 'Ubicación',
            value: 'Colombia',
        },
        {
            number: '04',
            title: 'Whatsapp',
            value: 'Contactame',
            link: 'https://wa.me/3248213762',
        },
    ]

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <span className={styles.label}>Contacto</span>
                    <h2 className={styles.title}>
                        ¿Listo para
                        <span className={styles.gradient}> empezar tu proyecto?</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Cuéntanos sobre tu idea y trabajemos juntos para hacerla realidad.
                        Responderemos lo antes posible.
                    </p>
                </div>

                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Información de Contacto</h3>
                        <p className={styles.infoText}>
                            Estamos aquí para ayudarte. Elige la forma más conveniente para comunicarte con nosotros.
                        </p>

                        <div className={styles.infoCards}>
                            {contactInfo.map((info, index) => (
                                <a 
                                    key={index} 
                                    href={info.link}
                                    className={styles.infoCard}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={styles.infoNumber}>{info.number}</div>
                                    <div className={styles.infoContent}>
                                        <div className={styles.infoCardTitle}>{info.title}</div>
                                        <div className={styles.infoCardValue}>{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.formLabel}>
                                Asunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="¿En qué podemos ayudarte?"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.formTextarea}
                                placeholder="Cuéntanos sobre tu proyecto..."
                                rows={5}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
