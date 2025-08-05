import React from 'react';
import { BookOpen, Users, Download, Trophy, MessageCircle, Rocket } from 'lucide-react';

const Beneficios: React.FC = () => {
  const beneficios = [
    {
      icon: <BookOpen className="text-primary" size={32} />,
      titulo: "Aprendizado Prático",
      descricao: "Projetos reais e exercícios hands-on para fixar o conhecimento"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      titulo: "Networking Online",
      descricao: "Conecte-se com outros desenvolvedores e expanda sua rede profissional"
    },
    {
      icon: <Download className="text-primary" size={32} />,
      titulo: "Material Exclusivo",
      descricao: "Acesso vitalício a slides, códigos e recursos complementares"
    },
    {
      icon: <Trophy className="text-primary" size={32} />,
      titulo: "Certificado de Participação",
      descricao: "Comprove sua participação no workshop com certificado digital"
    },
    {
      icon: <MessageCircle className="text-primary" size={32} />,
      titulo: "Suporte Direto",
      descricao: "Tire dúvidas ao vivo e tenha acesso ao instrutor durante o evento"
    },
    {
      icon: <Rocket className="text-primary" size={32} />,
      titulo: "Projeto Final",
      descricao: "Desenvolva uma aplicação completa para seu portfólio"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que <span className="text-primary">Participar?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma experiência completa de aprendizado que vai acelerar sua jornada com Go
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/20 rounded-xl">
                  {beneficio.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{beneficio.titulo}</h3>
              <p className="text-gray-300 leading-relaxed">{beneficio.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;