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
    title: "Héroes y princesas",
    description: "Más de 50 moldes exclusivos de los personajes favoritos de los niños para armar y coleccionar.",
    from: "$15.00",
    image: bonusHeroes,
  },
  {
    title: "Castillos y escenarios gigantes",
    description: "Castillos, ciudades y escenarios medievales en papel para crear mundos enteros de juego.",
    from: "$12.00",
    image: bonusHouses,
  },
  {
    title: "Letras y números 3D",
    description: "Letras y números en formato 3D para que los niños aprendan jugando mientras arman sus propias creaciones educativas.",
    from: "$9.00",
    image: bonusAlphabet,
  },
  {
    title: "100 juegos de lógica",
    description: "100 rompecabezas listos para imprimir que estimulan razonamiento, enfoque y paciencia mientras el niño se divierte armando.",
    from: "$12.00",
    image: bonusPuzzles,
  },
  {
    title: "Juegos de memoria",
    description: "Juegos simples y adictivos que desarrollan memoria, concentración y agilidad mental. Ideal para momentos en familia lejos del celular.",
    from: "$9.00",
    image: bonusMemory,
  },
  {
    title: "Actividades para colorear y crear",
    description: "Más de 100 actividades para colorear, recortar y crear. Estimulando coordinación motora, imaginación y creatividad de forma ligera y divertida.",
    from: "$9.00",
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
            Llévalo hoy y recibe
          </h2>
          <span className="inline-block bg-accent text-accent-foreground text-2xl md:text-3xl font-bold px-5 py-1.5 rounded-md mt-2">
            6 Bonos Exclusivos GRATIS
          </span>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {bonuses.map((b, i) => (
          <FadeInUp key={i}>
            <div
              className="bg-card rounded-2xl overflow-hidden border-b-4 border-secondary shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
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
                  GRATIS
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                  BONO {i + 1}: {b.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {b.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="line-through text-sm text-destructive">
                    De {b.from}
                  </span>
                  <span className="text-secondary font-bold text-base">
                    POR: $0.00
                  </span>
                </div>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
