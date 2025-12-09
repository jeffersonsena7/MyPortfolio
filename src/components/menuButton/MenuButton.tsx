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
                        Home
                    </button>
                    <button onClick={() => scrollToSection('AboutMe')}>
                        About Me
                    </button>
                    <button onClick={() => scrollToSection('Project')}  >
                        Projects
                    </button>
                    <button onClick={() => scrollToSection('Contact')}>
                        Contact
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