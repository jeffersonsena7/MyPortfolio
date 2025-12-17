import { useState } from "react";
import Hamburger from 'hamburger-react'
import './MenuButtonStyle.css'


export const MenuButton = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     }

     const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });            
        }
     }

    return (
        <div className="container">

            <div className={`container-buttons ${menuOpen ? 'open' : 'close'}`}>
                <div className='text-button'>
                    <button onClick={() => scrollToSection('Home')}>
                        Inicio
                    </button>
                    <button onClick={() => scrollToSection('AboutMe')}>
                        Sobre mim
                    </button>
                    <button onClick={() => scrollToSection('Project')}  >
                        Projetos
                    </button>
                    <button onClick={() => scrollToSection('Contact')}>
                        Contatos
                    </button>
                </div>      
            </div>
        
            <div onClick={toggleMenu}>            
                <p className='container-hamburger'>
                    <Hamburger size={20} color="#fff" />
                </p>                
            </div>
        </div>  
    )
}