import React from 'react';
import { Calendar, Clock, Globe, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-orange-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Imersão <span className="text-primary">Dominando Go</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">Forja Dev</p>
          <p className="text-xl text-primary mb-8 font-semibold">Workshop Gratuito!</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" size={24} />
              <span>15 de Dezembro, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary" size={24} />
              <span>14h às 18h (Horário de Brasília)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-primary" size={24} />
              <span>100% Online</span>
            </div>
          </div>

          <button 
            onClick={() => {
              document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-primary text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 flex items-center gap-2 mx-auto"
          >
            Quero Participar!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;