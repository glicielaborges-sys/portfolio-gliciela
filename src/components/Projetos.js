import React from 'react';
import './Projetos.css';

const Projetos = () => {
  return (
    <div className="projetos-container">
      <h2>Meus Projetos</h2>

      <div className="video-container">
        <h3>Curso React</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FXqX7oof0I4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="download-container">
        <h3>Projeto de Extensão</h3>
        <p>"Os Perigos do Mau Uso da Internet"</p>
        <a href="/Apresentacao.pptx" download="Apresentacao.pptx" className="download-button">
          Baixar Apresentação
        </a>
      </div>

    </div>
  );
};

export default Projetos;