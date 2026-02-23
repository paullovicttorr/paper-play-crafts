import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-paper-toys.jpg";
import avatarFace1 from "@/assets/avatar-face-1.jpeg";
import avatarFace2 from "@/assets/avatar-face-2.jpeg";
import avatarFace3 from "@/assets/avatar-face-3.jpeg";
import avatarFace4 from "@/assets/avatar-face-4.jpeg";

const avatarFaces = [avatarFace1, avatarFace2, avatarFace3, avatarFace4];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-8 md:py-24">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <FadeInUp>
            <div className="space-y-3 md:space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
              <span className="inline-block mx-auto md:mx-0 bg-accent/30 text-accent-foreground font-bold text-sm px-4 py-1.5 rounded-full text-center">
                +1.200 Moldes Disponíveis
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Transforme Papel em Incríveis{" "}
                <span className="text-gradient-orange">Mundos 3D</span> e Tire Seus Filhos das Telas!
              </h1>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Mais de 1.200 moldes divertidos para imprimir, recortar e montar.
                Crie memórias inesquecíveis e estimule o desenvolvimento da sua criança hoje mesmo.
              </p>
              <motion.a
                href="#oferta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-2xl pulse-glow cursor-pointer"
              >
                Quero Acessar os 1.200 Moldes
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  {avatarFaces.map((src, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-card overflow-hidden">
                      <img src={src} alt="Cliente" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+5.000 famílias</strong> já aproveitam
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Hero Image */}
          <FadeInUp delay={0.2}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover border-4 border-card aspect-square">
                <img src={heroImg} alt="Brinquedos de papel 3D coloridos" className="w-full h-full object-cover" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground font-bold px-5 py-3 rounded-2xl shadow-lg text-sm"
              >
                ⭐ Acesso Imediato
              </motion.div>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
