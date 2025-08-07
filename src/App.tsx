import Agenda from "./components/Agenda";
import Palestrante from "./components/Palestrante";
import Beneficios from "./components/Beneficios";
import Inscricao from "./components/Inscricao";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-900" style={{ backgroundColor: "#0A0A0A" }}>
      <Hero />
      <Agenda />
      <Palestrante />
      <Beneficios />
      <Inscricao />
      <Footer />
    </div>
  );
}

export default App;
