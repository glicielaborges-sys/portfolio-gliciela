import React from 'react';
import './Contatos.css';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importe os ícones

const Contatos = () => {
  return (
    <div className="contatos-container">
      <h2>Contatos</h2>
      <ul>
        <li>
          <FaPhoneAlt className="icon" /> <span>(79) 99995-2577</span>
        </li>
        <li>
          <FaEnvelope className="icon" /> <span>gliciela@hotmail.com | gliciela@yahoo.com.br</span>
        </li>
        <li>
          <FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/glici-borges-a6258390" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/glici-borges-a6258390</a>
        </li>
        <li>
          <FaGithub className="icon" /> <a href="https://github.com/glicielaborges-sys" target="_blank" rel="noopener noreferrer">github.com/glicielaborges-sys</a>
        </li>
      </ul>
    </div>
  );
};

export default Contatos;