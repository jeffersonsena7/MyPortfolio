import foto from '../../assets/perfil.jpeg'
import foto2 from '../../assets/icone.png'

import { DefaultButton } from '../../components/defaultButton/DefaultButton'
import { Footer } from '../../components/footer/Footer'
import './HomeStyle.css'


const scrollProject = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


export const Home = () => {

    return (
        <div>
            <section id="Home">
            <div className="container-home">
                <div className='flip-card'>
                    <img src={foto} alt="Profile" /> 
                    <img src={foto2} alt="Profile" /> 
                </div>
                    
            </div>
            <div className='container-home-text'>
                <h3>Jefferson Sena</h3>
                <p>
                    Full Stack JavaScript Developer
                </p>
            </div>
            <div className='container-home-button'>
                <DefaultButton 
                    className="my-button-projetos" 
                    onClick={() => scrollProject('Project')}>
                    
                    Projetos
                </DefaultButton>

                <a 
                    href="/videos/JS - curriculo atualizado 2026-2.pdf" download="JS - curriculo atualizado 2026-2.pdf"
                >
                <DefaultButton className="my-button-curriculo">
                    Download Currículo
                </DefaultButton>
                
                </a>
                
            </div>

            <div>
                <Footer />
            </div>
            </section>
        </div>
        
        
    )
}