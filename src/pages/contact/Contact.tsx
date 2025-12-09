
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './ContactStyle.css';
import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {

    const [state, handleSubmit] = useForm("mldqndqq");
    
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowMessage(true);

            // Oculta a mensagem após 5 segundos
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000);

            // Limpa o timer se o componente for desmontado antes do tempo
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    return (
        <div className="container-contact-page">          
            <div className="container-contact">
                <section id="Contact" >
                    <h1>Entre em contato</h1>
                </section>
            <div>
                <div className="container-form-contact">

                    {showMessage && (
                        <p className="success-message">
                            Obrigado por entrar em contato!.
                        </p>
                    )}

                    {!showMessage && (
                        <form action="https://formspree.io/f/mldqndqq"
                            method="POST"
                            className="form-contact"
                            onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Nome:
                        </label>
                        <input
                            type="text" 
                            id="name" 
                            name="name" 
                            required />
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email" 
                            id="email" 
                            name="email" 
                            required />

                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <label htmlFor="message">
                            Mensagem:
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required>
                        </   textarea>
                        
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        {/* Ant-span */}
                        <input
                            type='text'
                            name='_gotcha'
                            style={{ display: 'none' }}
                            tabIndex={-1}
                            autoComplete='off'
                        />
                            <button 
                                type="submit"
                                disabled={state.submitting}
                                >
                                {state.submitting ? "Enviando..." : "Enviar Mensagem"}
                            </button>
                        </form>
                    )}
                    
                </div>
            </div>
            </div>
             <div className='container-icons-contact'>
                <footer className='footer-premium'>
                    <p>
                        2025 © Jefferson Sena
                    </p>
                </footer>
                <div className='icons-contact'>
                    <a href="https://wa.me/5583988038630?text=Ol%C3%A1%2C%20tudo%20bem!" 
                        target="_blank" 
                    >
                        <FaWhatsapp size={30} color="#25D366" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/jefferson-sena-0b347a232/" target="_blank">
                        <FaLinkedin size={30} color="#0077B5" />
                    </a>
                    
                    <a href="https://github.com/jeffersonsena7" target="_blank">
                        <FaGithub size={30} color="#000" />
                    </a>
                    <a href="mailto:jefferson.senna777@gmail.com" target="_blank">
                        <FaEnvelope size={30} color="#D44638" />
                    </a>
                </div>                
            </div>            
        </div>
    )
}