import Agenda from "./components/Agenda";
import Palestrante from "./components/Palestrante";
import Beneficios from "./components/Beneficios";
import Inscricao from "./components/Inscricao";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero />
      <Agenda />
      <Palestrante />
      <Beneficios />
      <Inscricao />
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;
