import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "./Animations";

const FooterSection = () => (
  <footer className="bg-foreground text-background/70">
    {/* Footer links */}
    <div className="py-10">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-lg font-bold text-background">Mundo 3D en Papel</p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <a href="#" className="hover:text-background transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-background transition-colors">Términos de Uso</a>
        </div>
        <p className="text-xs text-background/50">
          Mundo 3D en Papel © 2026. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
