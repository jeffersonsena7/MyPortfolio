import './AboutMeStyle.css'
import React from '../../assets/react.jpeg'
import Node from '../../assets/node.jpeg'
import Angular from '../../assets/angular.jpeg'
import Ciber from '../../assets/ciber.jpeg'
import front from '../../assets/front.jpeg'
import frontAngular from '../../assets/front-angular.jpeg'

import foto from '../../assets/perfil.jpeg'

export const AboutMe = () => {
  return (
    <section id="AboutMe">
    <div className="container-aboutMe">
        <div className='container-aboutMe-title'>
            <h1>Sobre mim</h1>
        </div>
        <div className='container-aboutMe-content'>
            <div className='container-aboutMe-image'>
                <img src={foto} alt="Profile" />
            </div>
        
            <div className='container-aboutMe-text'>
                <h2>
                    Desenvolvedor front-end e back-end
                </h2>
                <p>
                Desenvolvedor front-end e back-end com experiência em JavaScript, React, Node.js e bancos de dados. Apaixonado por criar soluções eficientes e escaláveis para desafios complexos de desenvolvimento web.
                </p>
            </div>
        </div>
        <div className='container-aboutMe-certificados'>
            <h2>Meus Certificados</h2>

            <div className='container-aboutMe-certificados-images'>
                <div className='image-certificado'>
                    <img src={React} alt="" />
                    <img src={Node} alt="" />
                    <img src={Angular} alt="" />
                    <img src={Ciber} alt="" />
                    <img src={front} alt="" />
                    <img src={frontAngular} alt="" />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}