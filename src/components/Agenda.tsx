import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const Agenda: React.FC = () => {
  const trilhas = [
    {
      icon: <Code className="text-primary" size={32} />,
      titulo: "Fundamentos do Go",
      horario: "Dia 1",
      descricao: "Sintaxe, tipos de dados, estruturas de controle e as particularidades que fazem do Go uma linguagem única."
    },
    {
      icon: <Server className="text-primary" size={32} />,
      titulo: "Concorrência com Goroutines",
      horario: "Dia 2",
      descricao: "Domine goroutines e channels para criar aplicações altamente concorrentes e performáticas."
    },
    {
      icon: <Database className="text-primary" size={32} />,
      titulo: "APIs RESTful em Go",
      horario: "Dia 3",
      descricao: "Construa APIs robustas usando Gin framework, middleware customizados e boas práticas de arquitetura."
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      titulo: "Deploy e Performance",
      horario: "Dia 4",
      descricao: "Otimização, profiling, containerização com Docker e estratégias de deploy em produção."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agenda <span className="text-primary">Detalhada</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            4 horas intensivas de conteúdo prático, desde os fundamentos até técnicas avançadas de desenvolvimento em Go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trilhas.map((trilha, index) => (
            <div 
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  {trilha.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{trilha.titulo}</h3>
                    <span className="text-primary text-sm font-semibold bg-primary/20 px-3 py-1 rounded-full">
                      {trilha.horario}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{trilha.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;