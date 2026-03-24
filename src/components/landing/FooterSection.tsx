import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "./Animations";

const FooterSection = () => (
  <footer className="bg-foreground text-background/70">
    {/* Final CTA */}
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Imagina a tu hijo:
          </h2>
          <div className="flex flex-col items-center gap-2 text-muted-foreground mb-3">
            <p>✔ Creando en lugar de deslizar pantallas</p>
            <p>✔ Aprendiendo mientras juega</p>
            <p>✔ Pasando más tiempo contigo</p>
          </div>
          <p className="text-lg font-semibold text-foreground mb-6">
            Di adiós al celular como única distracción.
          </p>
          <motion.a
            href="https://pay.hotmart.com/G105060095P?off=jxwr6qjj&checkoutMode=10&bid=1774385240192"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-bold text-lg px-8 py-4 rounded-2xl pulse-glow-green cursor-pointer"
          >
            SÍ, QUIERO TRANSFORMAR EL TIEMPO DE MI HIJO
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </FadeInUp>
      </div>
    </div>

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
