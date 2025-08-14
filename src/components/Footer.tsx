import React from 'react';
import { Linkedin, Github, Heart } from 'lucide-react';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <Image
            src="/logo.png"
            className="w-64 mx-auto"
            alt="Forja Dev"
            width={256}
            height={62}
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Forjando desenvolvedores para o sucesso.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex items-center flex-1 gap-6">
            <a
              href="https://www.linkedin.com/company/forjadev/"
              className="p-3 transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20 hover:transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white" size={24} />
            </a>
            <a
              href="https://github.com/forja-pro"
              className="p-3 transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20 hover:transform hover:scale-110"
              aria-label="Website"
            >
              <Github className="text-white" size={24} />
            </a>
          </div>

          <p className="text-gray-400 flex-2">
            © 2025 Forja Dev. Todos os direitos reservados.
          </p>

          <p className="flex items-center justify-center flex-1 gap-2 text-gray-300 md:justify-end">
            Feito com <Heart className="text-primary" size={16} /> para a
            comunidade dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;