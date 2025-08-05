import React from 'react';
import Header from './components/Header';
import Agenda from './components/Agenda';
import Palestrante from './components/Palestrante';
import Beneficios from './components/Beneficios';
import Inscricao from './components/Inscricao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900" style={{ backgroundColor: '#0A0A0A' }}>
      <Header />
      <Agenda />
      <Palestrante />
      <Beneficios />
      <Inscricao />
      <Footer />
    </div>
  );
}

export default App;