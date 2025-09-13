import React from 'react';
import './Home.css';
import fotoGliciela from '../assets/gliciela_borges.jpg';
import curriculoPDF from '../assets/curriculo_gliciela_borges.pdf';

const Home = () => {
  return (
    <div className="home-container">
      <img src={fotoGliciela} alt="Gliciela Borges" className="profile-pic" />
      <h1>Gliciela Borges</h1>
      <p>Consultora e Desenvolvedora</p>
      <a href={curriculoPDF} download="Gliciela_Borges_Curriculo.pdf" className="download-button">
        Baixar Currículo
      </a>

    </div>
  );
};

export default Home;