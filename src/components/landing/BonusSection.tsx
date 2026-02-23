import { motion } from "framer-motion";
import { FadeInUp, TiltCard } from "./Animations";
import { Gift } from "lucide-react";

const bonuses = [
  { title: "Coleção Especial Heróis e Princesas", from: "R$ 47", emoji: "🦸" },
  { title: "Alfabeto e Números 3D Educativos", from: "R$ 37", emoji: "🔤" },
  { title: "Casinhas e Cenários Gigantes", from: "R$ 27", emoji: "🏠" },
];

const BonusSection = () => (
  <section className="py-20 bg-gradient-bonus text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-2 h-2 rounded-full bg-primary-foreground" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
        }} />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <FadeInUp>
        <div className="text-center mb-14">
          <Gift className="w-10 h-10 mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Leve Hoje e Ganhe <span className="underline decoration-accent decoration-4 underline-offset-4">3 Bônus Exclusivos!</span>
          </h2>
        </div>
      </FadeInUp>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {bonuses.map((b, i) => (
          <FadeInUp key={i} delay={i * 0.15}>
            <TiltCard className="bg-card text-card-foreground rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">{b.emoji}</div>
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                BÔNUS {i + 1}
              </span>
              <h3 className="text-lg font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground">
                <span className="line-through text-sm">De {b.from}</span>
                <span className="block text-2xl font-bold text-secondary mt-1">GRÁTIS</span>
              </p>
            </TiltCard>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
