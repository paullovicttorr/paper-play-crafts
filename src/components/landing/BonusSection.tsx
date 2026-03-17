import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import { Gift } from "lucide-react";
import bonusHeroes from "@/assets/bonus-heroes.jpg";
import bonusAlphabet from "@/assets/bonus-alphabet.jpg";
import bonusHouses from "@/assets/bonus-houses.jpg";
import bonusPuzzles from "@/assets/bonus-puzzles.png";
import bonusMemory from "@/assets/bonus-memory.png";
import bonusColoring from "@/assets/bonus-coloring.png";

const bonuses = [
  {
    title: "Coleção Especial Heróis e Princesas",
    description: "Mais de 50 moldes exclusivos dos personagens favoritos das crianças para montar e colecionar.",
    from: "R$ 47,00",
    image: bonusHeroes,
  },
  {
    title: "Casinhas e Cenários Gigantes",
    description: "Castelos, cidades e cenários medievais em papel para criar mundos inteiros de brincadeira.",
    from: "R$ 37,00",
    image: bonusHouses,
  },
  {
    title: "Alfabeto e Números 3D Educativos",
    description: "Letras e números em formato 3D para as crianças aprenderem brincando enquanto montam suas próprias criações educativas.",
    from: "R$ 27,00",
    image: bonusAlphabet,
  },
  {
    title: "Desafios que Prendem a Atenção (Sem Tela)",
    description: "100 quebra-cabeças prontos para imprimir que estimulam raciocínio, foco e paciência enquanto a criança se diverte montando. Perfeito para substituir o tempo de tela por um desafio envolvente.",
    from: "R$ 37,00",
    image: bonusPuzzles,
  },
  {
    title: "Treine a Memória Brincando",
    description: "Jogos simples e viciantes que desenvolvem memória, concentração e agilidade mental. Ideal para momentos em família longe do celular.",
    from: "R$ 27,00",
    image: bonusMemory,
  },
  {
    title: "Criatividade Sem Limites (Imprima e Use Agora)",
    description: "Mais de 100 atividades para colorir, recortar e criar. Estimulando coordenação motora, imaginação e criatividade de forma leve e divertida.",
    from: "R$ 27,00",
    image: bonusColoring,
  },
];

const BonusSection = () => (
  <section className="py-20 bg-gradient-bonus relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-foreground"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <FadeInUp>
        <div className="text-center mb-14">
          <Gift className="w-10 h-10 mx-auto mb-3 text-primary-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Leve Hoje e Ganhe
          </h2>
          <span className="inline-block bg-accent text-accent-foreground text-2xl md:text-3xl font-bold px-5 py-1.5 rounded-md mt-2">
            6 Bônus Exclusivos!
          </span>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {bonuses.map((b, i) => (
          <FadeInUp key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-card rounded-2xl overflow-hidden border-b-4 border-secondary shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Image with GRÁTIS badge */}
              <div className="relative">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  GRÁTIS
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                  BÔNUS {i + 1}: {b.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {b.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="line-through text-sm text-muted-foreground">
                    De {b.from}
                  </span>
                  <span className="text-secondary font-bold text-base">
                    POR: GRÁTIS
                  </span>
                </div>
              </div>
            </motion.div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
