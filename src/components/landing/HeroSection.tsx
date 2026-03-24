import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import { ArrowRight } from "lucide-react";
import avatarFace1 from "@/assets/avatar-face-1.jpeg";
import avatarFace2 from "@/assets/avatar-face-2.jpeg";
import avatarFace3 from "@/assets/avatar-face-3.jpeg";
import avatarFace4 from "@/assets/avatar-face-4.jpeg";
import heroCarousel1 from "@/assets/hero-carousel-1.jpeg";
import heroCarousel2 from "@/assets/hero-carousel-2.jpeg";
import heroCarousel3 from "@/assets/hero-carousel-3.jpeg";
import heroCarousel4 from "@/assets/hero-carousel-4.jpeg";
import heroCarousel5 from "@/assets/hero-carousel-5.jpeg";
import heroCarousel6 from "@/assets/hero-carousel-6.jpeg";
import { useEffect, useRef, useState } from "react";

const avatarFaces = [avatarFace1, avatarFace2, avatarFace3, avatarFace4];
const carouselImages = [
  heroCarousel1, heroCarousel2, heroCarousel3,
  heroCarousel4, heroCarousel5, heroCarousel6,
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

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
                +1.200 Moldes Disponibles
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Transforma papel en increíbles{" "}
                <span className="text-gradient-orange">mundos 3D</span> y saca a tu hijo de las pantallas
              </h1>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Más de 1.200 moldes listos para imprimir, recortar y montar.
                Crea momentos inolvidables mientras tu hijo aprende jugando — lejos del celular.
              </p>
              <motion.a
                href="https://pay.hotmart.com/G105060095P?off=jxwr6qjj&checkoutMode=10&bid=1774385240192"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-2xl pulse-glow cursor-pointer"
              >
                QUIERO ACCEDER A LOS 1.200 MOLDES
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  {avatarFaces.map((src, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-card overflow-hidden">
                      <img src={src} alt="Cliente satisfecho" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+5.000 familias</strong> ya lo están disfrutando
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Hero Carousel */}
          <FadeInUp delay={0.2}>
            <div className="relative flex items-center justify-center w-full">
              {/* Shadow background */}
              <div className="absolute w-[90%] max-w-[340px] md:w-[70%] md:max-w-[320px] aspect-[9/16] bg-secondary rounded-3xl translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3" />

              {/* Carousel frame */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-[6px] border-card shadow-xl aspect-[9/16] w-[90%] max-w-[340px] md:w-[70%] md:max-w-[320px]">
                {carouselImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Prueba social ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                    style={{ opacity: current === i ? 1 : 0 }}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 md:-right-4 z-20 bg-secondary text-secondary-foreground font-bold px-5 py-3 rounded-2xl shadow-lg text-sm"
              >
                ⭐ Acceso Inmediato
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
