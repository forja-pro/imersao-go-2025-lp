import { CodeIcon, CalendarIcon, ClockIcon } from "lucide-react";
import Button from "./Button";
import Code from "./Code";

const HeroSection = () => {
  const handleGoToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen">
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-12 lg:w-1/2 lg:mb-0">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10">
              <p className="flex items-center text-sm font-medium text-primary">
                <CodeIcon size={16} className="mr-2" />
                Imersão Online Ao Vivo
              </p>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="text-primary">Dominando Go:</span> Sua Jornada
              para Alta Performance
            </h1>
            <p className="max-w-xl mb-8 text-lg text-gray-300">
              Participe da nossa imersão intensiva e aprenda tudo o que você
              precisa para desenvolver aplicações de alta performance com Go.
              Ideal para iniciantes e desenvolvedores experientes que querem
              adicionar uma nova linguagem ao seu portfólio.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-[#1a1a1a] rounded-lg p-4 flex items-center">
                <CalendarIcon className="mr-3 text-primary" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Início</p>
                  <p className="font-medium text-white">15 de Junho de 2023</p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 flex items-center">
                <ClockIcon className="mr-3 text-primary" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Duração</p>
                  <p className="font-medium text-white">4 Dias Intensivos</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button primary onClick={() => handleGoToSection("inscricao")}>
                Reserve Sua Vaga
              </Button>
              <Button onClick={() => handleGoToSection("agenda")}>
                Ver Agenda
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <Code />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
