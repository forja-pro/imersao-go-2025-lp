import Agenda from "@/components/Agenda";
import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Inscricao from "@/components/Inscricao";
import Palestrante from "@/components/Palestrante";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <HeroSection />
      <Agenda />
      <Palestrante />
      <Beneficios />
      <Inscricao />
      <Footer />
      <Toaster richColors />
    </div>
  );
}
