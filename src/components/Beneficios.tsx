import React from 'react';
import {
  BookOpen,
  Users,
  Trophy,
  MessageCircle,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const Beneficios: React.FC = () => {
  const beneficios = [
    {
      icon: <BookOpen className="text-primary" size={32} />,
      titulo: "Aprendizado Prático",
      descricao:
        "Aprenda Go desenvolvendo projetos reais e aplicando o que aprendeu imediatamente",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      titulo: "Networking Online",
      descricao:
        "Conecte-se com outros desenvolvedores e expanda sua rede profissional",
    },
    {
      icon: <MessageCircle className="text-primary" size={32} />,
      titulo: "Aulas Ao Vivo e Interativas",
      descricao: "Tire dúvidas na hora e receba feedback direto do instrutor",
    },
    {
      icon: <Trophy className="text-primary" size={32} />,
      titulo: "Certificado de Participação",
      descricao: "Receba um certificado digital para comprovar seu aprendizado",
    },
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      titulo: "Experiência com Boas Práticas",
      descricao:
        "Descubra padrões, técnicas e ferramentas usadas em projetos de alta performance no mercado",
    },
    {
      icon: <Rocket className="text-primary" size={32} />,
      titulo: "Projeto Final",
      descricao: "Desenvolva uma aplicação completa mostrar suas habilidades",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Por que <span className="text-primary">Participar?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Uma experiência completa de aprendizado que vai acelerar sua jornada
            com Go
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="p-8 text-center transition-all duration-300 border shadow-xl backdrop-blur-xl bg-white/5 rounded-2xl border-white/10 hover:bg-white/10 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/20 rounded-xl">
                  {beneficio.icon}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {beneficio.titulo}
              </h3>
              <p className="leading-relaxed text-gray-300">
                {beneficio.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;