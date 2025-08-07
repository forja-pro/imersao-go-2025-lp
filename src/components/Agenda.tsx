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
    <section className="px-6 py-20" id="agenda">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Agenda <span className="text-primary">Detalhada</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            4 horas intensivas de conteúdo prático, desde os fundamentos até
            técnicas avançadas de desenvolvimento em Go.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {trilhas.map((trilha, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 border shadow-xl backdrop-blur-xl bg-white/5 rounded-2xl border-white/10 hover:bg-white/10 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  {trilha.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {trilha.titulo}
                    </h3>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full text-primary bg-primary/20">
                      {trilha.horario}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-300">
                    {trilha.descricao}
                  </p>
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