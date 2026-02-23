import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import { ArrowRight, Shield, Mail, Lock } from "lucide-react";

const PricingSection = () => (
  <section id="oferta" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Oferta Especial</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Escolha o seu <span className="text-gradient-orange">Pacote</span>
          </h2>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="max-w-md mx-auto">
          <motion.div
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-card rounded-3xl border-2 border-primary shadow-card-hover overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider opacity-90">Acesso Completo</p>
              <h3 className="text-xl font-bold mt-1">+1.200 Moldes + Todos os Bônus</h3>
            </div>

            {/* Body */}
            <div className="p-8 text-center space-y-6">
              <div>
                <p className="text-muted-foreground line-through text-lg">De R$ 97,00</p>
                <p className="text-5xl font-bold text-foreground mt-1">
                  R$ <span className="text-gradient-orange">27</span>
                  <span className="text-lg text-muted-foreground font-normal">,00</span>
                </p>
                <p className="text-sm text-secondary font-bold mt-2">Pagamento único • Acesso vitalício</p>
              </div>

              <ul className="text-left space-y-3 text-sm">
                {[
                  "+1.200 moldes para imprimir",
                  "Coleção Heróis e Princesas",
                  "Alfabeto e Números 3D",
                  "Casinhas e Cenários Gigantes",
                  "Atualizações gratuitas",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <span className="text-secondary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full bg-secondary text-secondary-foreground font-bold text-lg py-4 rounded-2xl pulse-glow-green text-center cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  Garantir Meu Acesso Agora
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>

              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento Seguro</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Acesso Imediato</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Garantia 14 dias</span>
              </div>
            </div>
          </motion.div>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default PricingSection;
