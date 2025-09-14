import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Formacao from './components/Formacao';
import Profissional from './components/Profissional';
import Contatos from './components/Contatos';
import Projetos from './components/Projetos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="menu-navegacao">
          <Link to="/">Home</Link>
          <Link to="/formacao">Minha Formação</Link>
          <Link to="/historico-profissional">Histórico Profissional</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contatos">Contatos</Link>
        </nav>

        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formacao" element={<Formacao />} />
            <Route path="/historico-profissional" element={<Profissional />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;