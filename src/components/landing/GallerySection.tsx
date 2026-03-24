import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import galleryHeroes from "@/assets/gallery-heroes-new.webp";
import galleryAnimals from "@/assets/gallery-animals-new-v2.jpg";
import galleryCharacters from "@/assets/gallery-characters-new.jpg";
import galleryVehicles from "@/assets/gallery-vehicles-new.jpg";
import galleryMasks from "@/assets/gallery-masks-new.jpg";
import galleryDiverse from "@/assets/gallery-diverse-new.jpg";

const categories = [
  { src: galleryHeroes, label: "Héroes" },
  { src: galleryAnimals, label: "Animales" },
  { src: galleryCharacters, label: "Personajes" },
  { src: galleryVehicles, label: "Vehículos" },
  { src: galleryMasks, label: "Máscaras" },
  { src: galleryDiverse, label: "Diversos" },
];

const duplicated = [...categories, ...categories, ...categories];

const GallerySection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);
  const lastTime = useRef(0);
  const paused = useRef(false);
  const SPEED = 0.8; // px per frame at 60fps

  const getSetWidth = useCallback(() => {
    if (!trackRef.current) return 1;
    return trackRef.current.scrollWidth / 3;
  }, []);

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
  }, []);

  const normalizePos = useCallback(() => {
    const setW = getSetWidth();
    if (posRef.current <= -setW * 2) {
      posRef.current += setW;
    } else if (posRef.current > 0) {
      posRef.current -= setW;
    }
  }, [getSetWidth]);

  const animate = useCallback((timestamp: number) => {
    if (!paused.current && !isDragging.current) {
      if (lastTime.current) {
        const delta = timestamp - lastTime.current;
        posRef.current -= SPEED * (delta / 16.67);
        normalizePos();
        applyTransform();
      }
      lastTime.current = timestamp;
    } else {
      lastTime.current = 0;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [normalizePos, applyTransform]);

  useEffect(() => {
    // Start from middle set
    posRef.current = -getSetWidth();
    applyTransform();
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate, getSetWidth, applyTransform]);

  // Mouse drag
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startPos.current = posRef.current;
    document.body.style.userSelect = "none";
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    posRef.current = startPos.current + diff;
    normalizePos();
    applyTransform();
  }, [normalizePos, applyTransform]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  }, []);

  // Touch drag
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startPos.current = posRef.current;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const diffX = e.touches[0].clientX - startX.current;
    // Only handle horizontal drags — let vertical scroll pass through
    if (Math.abs(diffX) > 5) {
      e.preventDefault();
    }
    posRef.current = startPos.current + diffX;
    normalizePos();
    applyTransform();
  }, [normalizePos, applyTransform]);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

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
      <div
        className="relative cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-6 px-3 w-max will-change-transform"
          style={{ transform: "translateX(0px)" }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                Categoria
              </span>
              <span className="absolute bottom-5 left-5 text-white text-xl font-bold drop-shadow-lg">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
