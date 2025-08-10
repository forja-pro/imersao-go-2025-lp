import React from 'react';
import { Github, Linkedin, Award } from "lucide-react";
import arthur from "../assets/arthur.jpg";

const Palestrante: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Seu <span className="text-primary">Instrutor</span>
          </h2>
        </div>

        <div className="p-8 border shadow-2xl backdrop-blur-xl bg-white/5 rounded-3xl md:p-12 border-white/10">
          <div className="flex flex-col items-center lg:flex-row gap:6 lg:gap-12">
            <div>
              <div className="relative">
                <div className="w-64 h-64 p-1 rounded-3xl bg-primary">
                  <div className="w-full h-full rounded-[1.25rem] bg-gray-800 flex items-center justify-center">
                    <img
                      src={arthur}
                      alt="Palestrante"
                      className="object-cover w-60 h-60 rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute p-3 rounded-full -bottom-4 -right-4 bg-primary">
                  <Award className="text-white" size={24} />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <a
                  href="https://github.com/arthur404dev"
                  className="p-3 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/arthur404dev/"
                  className="p-3 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h3 className="mb-2 text-3xl font-bold text-white">
                Arthur Andrade
              </h3>
              <p className="mb-6 text-xl text-primary">
                Staff Software Engineer
              </p>

              <div className="mb-8 space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Com mais de 15 anos de carreira na tecnologia e 7+ anos
                  trabalhando com Go, Arthur é referência quando o assunto é
                  desenvolvimento de aplicações de alta performance. Atuou como
                  líder técnico em projetos complexos, mentorando diversos
                  desenvolvedores e conduzindo times em ambientes de missão
                  crítica.
                </p>
                <p className="text-lg leading-relaxed">
                  Além da experiência prática, Arthur é um entusiasta de
                  culturas de trabalho saudáveis, ajudando empresas e
                  profissionais a aliarem excelência técnica com bem-estar no
                  dia a dia.
                </p>
              </div>

              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-400">Anos de Carreira</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1500+</div>
                  <div className="text-sm text-gray-400">Devs Treinados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Palestrante;