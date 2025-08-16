"use client";
import React, { useState } from "react";
import { User, Mail, Code, Lightbulb } from "lucide-react";
import Button from "./ui/Button";
import { toast } from "sonner";

const Inscricao: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nivel: "",
    projeto: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast.success("Inscrição realizada com sucesso!");
    }, 1000);
  };

  return (
    <section id="inscricao" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Garanta sua <span className="text-primary">Vaga</span>
          </h2>
          <p className="text-xl text-gray-300">
            Preencha o formulário abaixo e comece sua jornada com Go
          </p>
        </div>

        <div className="p-8 border shadow-2xl backdrop-blur-xl bg-white/5 rounded-3xl md:p-12 border-white/10">
          <form
            onSubmit={handleSubmit}
            className={`space-y-8 ${
              isSubmitted ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="block mb-3 text-lg font-semibold text-white"
                >
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
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 text-lg font-semibold text-white"
                >
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
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nivel"
                className="block mb-3 text-lg font-semibold text-white"
              >
                <Code className="inline mr-2" size={20} />
                Qual seu nível de experiência com Go? *
              </label>
              <select
                id="nivel"
                name="nivel"
                required
                value={formData.nivel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-white transition-all border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="" className="bg-gray-800">
                  Selecione seu nível
                </option>
                <option value="iniciante" className="bg-gray-800">
                  Iniciante (nunca usei Go)
                </option>
                <option value="basico" className="bg-gray-800">
                  Básico (já fiz alguns tutoriais)
                </option>
                <option value="intermediario" className="bg-gray-800">
                  Intermediário (já desenvolvi projetos pequenos)
                </option>
                <option value="avancado" className="bg-gray-800">
                  Avançado (uso Go profissionalmente)
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="projeto"
                className="block mb-3 text-lg font-semibold text-white"
              >
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
                className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border resize-none bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Descreva uma ideia de projeto que você gostaria de criar com Go..."
              />
            </div>

            <div className="text-center">
              <Button type="submit" primary loading={isSubmitting}>
                Confirmar Inscrição
              </Button>
              <p className="mt-4 text-sm text-gray-400">
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
