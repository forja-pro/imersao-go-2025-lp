"use client";
import React, { useActionState, useEffect, useState } from "react";
import { User, Mail, Code, Lightbulb } from "lucide-react";
import Button from "./ui/Button";
import { toast } from "sonner";
import { registerEvent } from "@/actions/event-registration";
import { RegistrationSchemaErrorType, RegistrationSchemaType } from "@/types";
import Input from "./ui/Input";
import { twMerge } from "tailwind-merge";

const Inscricao: React.FC = () => {
  const [formState, formAction, pending] = useActionState(registerEvent, {
    data: {} as RegistrationSchemaType,
    errors: {} as RegistrationSchemaErrorType,
  });

  useEffect(() => {
    if (Object.keys(formState.errors || {}).length === 0) {
      toast.success("Inscrição realizada com sucesso!");
    } else {
      toast.error("Por favor, corrija os erros no formulário.");
      // Focus first error field
      const firstErrorField = Object.keys(
        formState.errors?.fieldErrors || {}
      )[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.focus();
      }
    }
  }, [formState]);

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
            action={formAction}
            className={`space-y-8 ${
              pending ? "opacity-50 pointer-events-none" : ""
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
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                  errors={formState.errors?.fieldErrors?.name}
                  minLength={2}
                  maxLength={100}
                  defaultValue={formState.data?.name}
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
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                  errors={formState.errors?.fieldErrors?.email}
                  defaultValue={formState.data?.email}
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
                id="experience_level"
                name="experience_level"
                required
                className={twMerge(
                  "w-full px-4 py-3 text-white transition-all border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  formState.errors?.fieldErrors?.experience_level?.length
                    ? "ring-2 ring-red-400"
                    : ""
                )}
                defaultValue={formState.data?.experience_level}
                key={formState.data?.experience_level || "default"}
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
              {formState.errors?.fieldErrors?.experience_level && (
                <span className="inline-block mt-2 text-red-400">
                  {formState.errors?.fieldErrors?.experience_level[0]}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="projeto"
                className="block mb-3 text-lg font-semibold text-white"
              >
                <Lightbulb className="inline mr-2" size={20} />
                Qual projeto você gostaria de desenvolver?
              </label>
              <textarea
                id="project_idea"
                name="project_idea"
                rows={4}
                className={twMerge(
                  "w-full px-4 py-3 text-white placeholder-gray-400 transition-all border resize-none bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  formState.errors?.fieldErrors?.project_idea?.length
                    ? "ring-2 ring-red-400"
                    : ""
                )}
                placeholder="Descreva uma ideia de projeto que você gostaria de criar com Go..."
                defaultValue={formState.data?.project_idea}
              />
              {formState.errors?.fieldErrors?.project_idea && (
                <span className="inline-block mt-2 text-red-400">
                  {formState.errors?.fieldErrors?.project_idea[0]}
                </span>
              )}
            </div>

            <div className="text-center">
              <Button type="submit" primary loading={pending}>
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
