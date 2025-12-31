import './AboutMeStyle.css'
import ReactImg from '../../assets/react.jpeg'
import Node from '../../assets/node.jpeg'
import Angular from '../../assets/angular.jpeg'
import Ciber from '../../assets/ciber.jpeg'
import front from '../../assets/front.jpeg'
import frontAngular from '../../assets/front-angular.jpeg'

import foto from '../../assets/perfil.jpeg'
import { Carrosel } from '../../components/carrosel/Carrosel'

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
            <h2>Desenvolvedor front-end e back-end</h2>
            <p>
              Desenvolvedor front-end e back-end com experiência em JavaScript, React, Node.js e bancos de dados. Apaixonado por criar soluções eficientes e escaláveis para desafios complexos de desenvolvimento web.
            </p>
          </div>
        </div>
        <div className='container-aboutMe-certificados'>
          <h2>Meus Certificados</h2>

          <div className='carrosel-infinit'> 
            <Carrosel>              
              <div className="carrossel-track">
                <img src={ReactImg} alt="" />
              </div>
                <div className="carrossel-track">
                  <img src={Node} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={Angular} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={Ciber} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={front} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={frontAngular} alt="" />
                </div>
                {/* repetir para efeito contínuo */}
                <div className="carrossel-track">
                  <img src={ReactImg} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={Node} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={Angular} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={Ciber} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={front} alt="" />
                </div>
                <div className="carrossel-track">
                  <img src={frontAngular} alt="" />
                </div>            
            </Carrosel>
          </div>
          
        </div>
      </div>
    </section>
  )
}
