import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import { ArrowRight, Shield, Mail, Lock, Check, X, AlertTriangle, Gift, Star } from "lucide-react";

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

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Plano Completo (Premium) - PRIMEIRO */}
        <FadeInUp delay={0.1}>
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-accent text-accent-foreground text-xs font-bold uppercase px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                <Star className="w-3 h-3 fill-current" /> Mais Vendido <Star className="w-3 h-3 fill-current" />
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gradient-to-b from-primary/5 to-card rounded-3xl border-2 border-primary shadow-card-hover overflow-hidden"
            >
              <div className="bg-primary text-primary-foreground p-6 text-center">
                <p className="text-sm font-bold uppercase tracking-wider opacity-90">Acesso Completo</p>
                <h3 className="text-xl font-bold mt-1">Mundo 3D em Papel PRO</h3>
              </div>

              <div className="p-8 text-center space-y-6">
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-muted-foreground line-through text-lg">R$ 97,00</p>
                    <span className="bg-secondary/15 text-secondary text-xs font-bold px-2 py-0.5 rounded">ECONOMIZE 72%</span>
                  </div>
                  <p className="text-5xl font-bold text-foreground mt-1">
                    R$ <span className="text-gradient-orange">27</span>
                    <span className="text-lg text-muted-foreground font-normal">,90</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento único</p>
                </div>

                <ul className="text-left space-y-3 text-sm">
                  {[
                    { icon: "📦", text: "Coleção TOTAL (+1.200 Moldes Premium)" },
                    { icon: "🐾", text: "Animais" },
                    { icon: "🦸", text: "Heróis" },
                    { icon: "👸", text: "Princesas e Personagens" },
                    { icon: "🏠", text: "Casinhas e Cenários" },
                    { icon: "🚗", text: "Veículos" },
                    { icon: "🔤", text: "Alfabeto e Números 3D" },
                    { icon: "🧩", text: "100 Jogos Quebra Cabeça" },
                    { icon: "🧠", text: "100 Jogos da Memória" },
                    { icon: "🎨", text: "100 Atividades para Colorir e Recortar" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{item.icon} {item.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-secondary font-bold text-sm flex items-center justify-center gap-1">
                  🎉 Acesso VITALÍCIO (Nunca expira!)
                </p>

                <div className="border-2 border-dashed border-accent rounded-xl p-4 flex items-center gap-3 text-left bg-accent/5">
                  <div className="bg-accent/20 rounded-full p-2 flex-shrink-0">
                    <Gift className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">LEVE 6 BÔNUS EXTRAS!</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="line-through">Valor: R$ 202,00</span>{" "}
                       <span className="bg-secondary/15 text-secondary font-bold px-1.5 py-0.5 rounded text-xs">HOJE: R$ 0</span>
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://pay.lowify.com.br/checkout.php?product_id=wSfHMN"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full bg-secondary text-secondary-foreground font-bold text-lg py-4 rounded-2xl pulse-glow-green text-center cursor-pointer"
                >
                  <span className="flex flex-col items-center">
                    <span className="flex items-center gap-2">
                      EU QUERO TUDO!
                      <ArrowRight className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-normal opacity-80">Compra segura e acesso imediato</span>
                  </span>
                </motion.a>

                <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento Seguro</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Acesso Imediato</span>
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Garantia 30 dias</span>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeInUp>

        {/* Plano Básico - SEGUNDO */}
        <FadeInUp delay={0.25}>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-card rounded-2xl border border-border shadow-card p-8 space-y-6"
          >
            <div className="text-center space-y-3">
              <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground">Básico</h3>
              <p className="text-4xl font-bold text-foreground">
                R$ <span>9</span>
                <span className="text-lg text-muted-foreground font-normal">,90</span>
              </p>
              <p className="text-sm text-muted-foreground">Pagamento único</p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                +300 brinquedos para imprimir
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                Acesso imediato
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                Garantia de 7 dias
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                SEM Pacotes de Bônus
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                SEM Atualizações Futuras
              </li>
            </ul>

            <motion.a
              href="https://pay.lowify.com.br/go.php?offer=zsgce2p"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="block w-full bg-primary text-primary-foreground font-bold text-base py-3.5 rounded-2xl text-center cursor-pointer"
            >
              Escolher Básico
            </motion.a>
          </motion.div>
        </FadeInUp>
      </div>
    </div>
  </section>
);

export default PricingSection;
