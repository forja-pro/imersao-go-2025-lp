import React from 'react';
import { Github, Linkedin, Award, Users } from 'lucide-react';

const Palestrante: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seu <span className="text-primary">Instrutor</span>
          </h2>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap:6 lg:gap-12">
            <div>
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl bg-primary p-1">
                  <div className="w-full h-full rounded-[1.25rem] bg-gray-800 flex items-center justify-center">
                    <img 
                      src="https://cdn.discordapp.com/attachments/1105234770746687519/1390721179689549936/Arthur_4.jpg?ex=6892d0c7&is=68917f47&hm=5d15fbf0e3c7880424f39a473c47ca360713de8dc08d55d04b693070a7a24304&" 
                      alt="Palestrante" 
                      className="w-60 h-60 rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary rounded-full p-3">
                  <Award className="text-white" size={24} />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <a href="https://github.com/arthur404dev" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Github className="text-white" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/arthur404dev/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="text-white" size={24} />
                </a>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Arthur Andrade</h3>
              <p className="text-xl text-primary mb-6">Staff Software Engineer</p>
              
              <div className="space-y-4 text-gray-300 mb-8">
                <p className="text-lg leading-relaxed">
                  5+ anos de experiência com Go em ambientes de alta performance. Tech Lead em startups unicórnio, 
                  especialista em arquiteturas de microserviços e sistemas distribuídos.
                </p>
                <p className="text-lg leading-relaxed">
                  Contribuidor ativo da comunidade Go Brasil, palestrante em conferências nacionais e 
                  mentor de desenvolvedores em transição de carreira.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-400">Projetos Go</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-gray-400">Devs Treinados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-400">Palestras</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-400">Certificações</div>
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