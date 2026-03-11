import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useAnimation, PanInfo } from "framer-motion";
import { FadeInUp } from "./Animations";
import galleryHeroes from "@/assets/gallery-heroes-new.webp";
import galleryAnimals from "@/assets/gallery-animals-new-v2.jpg";
import galleryCharacters from "@/assets/gallery-characters-new.jpg";
import galleryVehicles from "@/assets/gallery-vehicles-new.jpg";
import galleryMasks from "@/assets/gallery-masks-new.jpg";
import galleryDiverse from "@/assets/gallery-diverse-new.jpg";

const categories = [
  { src: galleryHeroes, label: "Heróis" },
  { src: galleryAnimals, label: "Animais" },
  { src: galleryCharacters, label: "Personagens" },
  { src: galleryVehicles, label: "Veículos" },
  { src: galleryMasks, label: "Máscaras" },
  { src: galleryDiverse, label: "Diversos" },
];

// Triple the items for seamless looping
const duplicated = [...categories, ...categories, ...categories];

const CARD_WIDTH = 272; // w-64 (256) + gap-6 (16) ≈ 272
const SET_WIDTH = categories.length * CARD_WIDTH;
const SPEED = 40; // px per second

const GallerySection = () => {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startAutoScroll = useCallback((fromX?: number) => {
    const currentX = fromX ?? x.get();
    // Normalize to stay within [-SET_WIDTH, 0] range
    let normalizedX = currentX % SET_WIDTH;
    if (normalizedX > 0) normalizedX -= SET_WIDTH;
    
    x.set(normalizedX);
    
    const remaining = Math.abs(normalizedX + SET_WIDTH);
    const duration = remaining / SPEED;

    controls.start({
      x: normalizedX - SET_WIDTH,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [x, controls]);

  useEffect(() => {
    startAutoScroll(-SET_WIDTH);
  }, [startAutoScroll]);

  // Keep x in sync with animation
  useEffect(() => {
    return controls.subscribe?.(() => {}) || undefined;
  }, [controls]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    startAutoScroll();
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <FadeInUp>
          <div className="text-center">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              ✨ EXPLORE A COLEÇÃO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Olha só o que eles vão fazer{" "}
              <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-md mt-1">
                criar juntos
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Deslize para descobrir as categorias que tornarão suas tardes mágicas.
            </p>
          </div>
        </FadeInUp>
      </div>

      {/* Draggable + Auto-scroll carousel */}
      <div ref={containerRef} className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-6 px-3 w-max"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -SET_WIDTH * 2, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onHoverStart={() => { if (!isDragging) controls.stop(); }}
          onHoverEnd={() => { if (!isDragging) startAutoScroll(); }}
        >
          {duplicated.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-56 md:w-64 aspect-[3/4] rounded-3xl overflow-hidden shrink-0 shadow-card select-none"
            >
              <img
                src={cat.src}
                alt={cat.label}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
                draggable={false}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                Categoria
              </span>
              {/* Title */}
              <span className="absolute bottom-5 left-5 text-white text-xl font-bold drop-shadow-lg">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
