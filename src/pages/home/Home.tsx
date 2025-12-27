import foto from '../../assets/perfil.jpeg'
import foto2 from '../../assets/icone.png'

import { DefaultButton } from '../../components/defaultButton/DefaultButton'
import { Footer } from '../../components/footer/Footer'
import './HomeStyle.css'
// import { useEffect, useState } from 'react'

const scrollProject = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

//mudar a imagem do perfil 

const fotoPerfil = [
    foto,
    foto2
]

export const Home = () => {

    // const [imagePerfil, setImagePerfil] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setImagePerfil((prevImage) => (prevImage + 1) % fotoPerfil.length);
    //     }, 3000); // Muda a imagem a cada 3 segundos

    //     return () => clearInterval(interval);
    // }, []);

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