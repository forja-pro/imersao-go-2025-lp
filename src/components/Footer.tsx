import React from 'react';
import { Linkedin, Github, Heart } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
          <img src={logo} className="w-64 mx-auto" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Forjando desenvolvedores para o sucesso.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-6 flex-1">
            <a 
              href="https://www.linkedin.com/company/forjadev/" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white" size={24} />
            </a>
            <a 
              href="https://github.com/forja-pro" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors hover:transform hover:scale-110 duration-300"
              aria-label="Website"
            >
              <Github className="text-white" size={24} />
            </a>
          </div>

          <p className="text-gray-400 flex-2">
            © 2025 Forja Dev. Todos os direitos reservados.
          </p>
          
          <p className="flex items-center justify-center md:justify-end gap-2 text-gray-300 flex-1">
            Feito com <Heart className="text-primary" size={16} /> para a comunidade dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;