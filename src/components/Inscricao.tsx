import React, { useState } from 'react';
import { User, Mail, Code, Lightbulb, CheckCircle } from 'lucide-react';

const Inscricao: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    nivel: '',
    projeto: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="inscricao" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-500/20 rounded-full">
                <CheckCircle className="text-green-400" size={48} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Inscrição Confirmada!</h2>
            <p className="text-xl text-gray-300 mb-6">
              Parabéns! Você está inscrito na Imersão Dominando Go.
            </p>
            <p className="text-gray-300">
              Você receberá um email com todas as informações de acesso em breve.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Garanta sua <span className="text-primary">Vaga</span>
          </h2>
          <p className="text-xl text-gray-300">
            Preencha o formulário abaixo e comece sua jornada com Go
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-white text-lg font-semibold mb-3">
                  <User className="inline mr-2" size={20} />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-lg font-semibold mb-3">
                  <Mail className="inline mr-2" size={20} />
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nivel" className="block text-white text-lg font-semibold mb-3">
                <Code className="inline mr-2" size={20} />
                Qual seu nível de experiência com Go? *
              </label>
              <select
                id="nivel"
                name="nivel"
                required
                value={formData.nivel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="" className="bg-gray-800">Selecione seu nível</option>
                <option value="iniciante" className="bg-gray-800">Iniciante (nunca usei Go)</option>
                <option value="basico" className="bg-gray-800">Básico (já fiz alguns tutoriais)</option>
                <option value="intermediario" className="bg-gray-800">Intermediário (já desenvolvi projetos pequenos)</option>
                <option value="avancado" className="bg-gray-800">Avançado (uso Go profissionalmente)</option>
              </select>
            </div>

            <div>
              <label htmlFor="projeto" className="block text-white text-lg font-semibold mb-3">
                <Lightbulb className="inline mr-2" size={20} />
                Qual projeto você gostaria de desenvolver? *
              </label>
              <textarea
                id="projeto"
                name="projeto"
                required
                rows={4}
                value={formData.projeto}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Descreva uma ideia de projeto que você gostaria de criar com Go..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                Confirmar Inscrição
              </button>
              <p className="text-sm text-gray-400 mt-4">
                * Campos obrigatórios. Seus dados estão seguros conosco.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inscricao;