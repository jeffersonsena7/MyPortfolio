import React from 'react';


import './ProjectStyle.css';
import { DefaultButton } from '../../components/defaultButton/DefaultButton';

export const Project: React.FC = () => {
  // Lista de vídeos (coloque seus vídeos na pasta public/videos/)
  const videos = [
    "/downloands/Buscador-web.mp4",
    "/downloands/Buscador-mobile.mp4",
    "/downloands/Academia2.mp4",
    "/downloands/Suplementos.mp4",
    "/downloands/Buzz.mp4",
    "/downloands/Blog-Angular.mp4",
  ];

  return (
    <div className="container-project">
      <section id="Project">
        <h1>
          Project Page
        </h1>
      </section>        

      <div className="images-row">        
        <div className='img-project'>
          <video src={videos[0]} controls />         
          <h1>Buscador de Tag & Descrição</h1>
          <p>
            O Buscador de Tag & Descrição é um sistema full-stack para consulta de equipamentos por TAG ou descrição, retornando localização e metadados do item.
            O Front-end, desenvolvido em React, consome a API via requisições REST.
            O Back-end, construído em Node.js, expõe endpoints para busca e consulta, conectado a um banco de dados hospedado no Render. A API fornece respostas otimizadas para pesquisa textual e consultas filtradas.
          </p>  
            <DefaultButton 
              className='button-project'
              onClick={() => 
              window.open('https://buscador-six-dun.vercel.app/', '_blank', 'noopener,noreferrer')}             
            >
              Ir para o projeto
            </DefaultButton>                               
          </div>
          
          <div className='img-project'>
            <video src={videos[1]} controls/>         
            <h1 style={{fontSize: "14px"}}>
              Buscador de Tag & Descrição Mobile
            </h1>
            <p style={{fontSize: "13.6px"}}>
              A versão mobile do Buscador de Tag & Descrição foi desenvolvida em React Native, permitindo consulta rápida de equipamentos diretamente pelo smartphone. O aplicativo consome os mesmos endpoints REST do back-end em Node.js + Express, hospedado no Render, garantindo sincronização total dos dados entre web e mobile.

              O usuário pode pesquisar por TAG ou descrição, recebendo em tempo real a localização e os metadados do equipamento. A aplicação foi distribuída em arquivo APK, pronto para instalação em dispositivos Android.

              Tecnologias: React Native, Node.js, Express, REST API, Render, Banco de Dados.
            </p> 
            <a 
              href="/downloands/meu-app.apk" 
              download='meu-app.apk'
            >
              <DefaultButton className='button-project'         
                >Baixar APK
              </DefaultButton>   
            </a>                     
          </div>

          <div className='img-project'>
            <video src={videos[2]} controls />          
            <h1>Projeto Academia</h1>
            <p style={{fontSize: "16.87px"}}>
              Recentemente, concluí um projeto emocionante de desenvolvimento web, utilizando HTML, CSS, JavaScript, JSX, React.js e Node.js. Integrei essas tecnologias para criar uma aplicação web dinâmica e responsiva, proporcionando uma experiência excepcional aos usuários. Foi uma oportunidade incrível para aprimorar minhas habilidades e explorar novas tecnologias no campo do desenvolvimento web.
            </p>
            <DefaultButton 
            className='button-project'
            onClick={() => 
              window.open('https://projeto-academia-sena.vercel.app/', '_blank', 'noopener,noreferrer')}             
            >
              Ir para o projeto
            </DefaultButton> 
          </div>

          <div className='img-project'>
            <video src={videos[3]} controls />      
            <h1>Projeto Suplementos</h1>
            <p style={{fontSize: '14.5px'}}>
              Este projeto marca minha primeira experiência prática com React, desenvolvido para consolidar os fundamentos do framework. A aplicação utiliza uma estrutura básica de componentes funcionais, gerenciamento simples de estado e manipulação direta do DOM virtual.
              Foram aplicados conceitos essenciais como JSX, props, componentização, além de estilização com CSS e lógica em JavaScript. O foco principal foi compreender o ciclo de renderização do React e a organização de uma aplicação front-end baseada em componentes.
            </p>
            <DefaultButton
              className='button-project'
              onClick={() => {
                window.open('https://jeffersonsena7.github.io/site-suplemento/index.html', '_blank', 'noopener,noreferrer')
              }}
            >
              Ir para o projeto
            </DefaultButton>
          </div>
          <div className='img-project'>
            <video src={videos[5]} controls />      
            <h1>Blog-Angular</h1>
            <p style={{fontSize: '15px'}}>
              Este foi meu primeiro projeto desenvolvido com Angular, consistindo em um blog básico voltado para aprendizado e prática do framework. A aplicação utiliza componentes, templates, data binding e diretivas estruturais para exibir e organizar conteúdo na interface.
              O projeto permitiu compreender o fluxo de componentização, o uso de services para lógica simples e a integração de TypeScript, HTML e CSS em uma aplicação Angular funcional, servindo como base para projetos mais avançados.
            </p>
            <DefaultButton
              className='button-project'
              onClick={() => {
                window.open('https://jeffersonsena7.github.io/blog-angular/', '_blank', 'noopener,noreferrer')
              }}
            >
              Ir para o projeto
            </DefaultButton>
          </div>

          <div className='img-project'>
            <video src={videos[4]} controls />      
            <h1>Projeto BuzzFeed</h1>
            <p style={{fontSize: '14.3px'}}>
              Este foi meu primeiro projeto utilizando HTML, CSS e JavaScript puro, desenvolvido com o objetivo de praticar e consolidar os fundamentos do front-end. A aplicação simula um BuzzFeed, permitindo a interação com quizzes, perguntas e respostas dinâmicas na interface.

              O projeto possibilitou a prática de:

              Estruturação de páginas com HTML

              Estilização e responsividade com CSS

              Manipulação do DOM e lógica interativa com JavaScript

              Foi um passo importante para entender o fluxo de eventos, funções e atualizações dinâmicas de conteúdo antes de migrar para frameworks modernos.
            </p>
            <DefaultButton
              className='button-project'
              onClick={() => {
                window.open('https://jeffersonsena7.github.io/projeto-buzzfeed/', '_blank', 'noopener,noreferrer')
              }}              
            >
              Ir para o projeto
            </DefaultButton>
          </div>
      </div>        
    </div>
  );
};
