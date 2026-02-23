import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import galleryHeroes from "@/assets/gallery-heroes.jpg";
import galleryAnimalsNew from "@/assets/gallery-animals-new.jpg";
import galleryCharacters from "@/assets/gallery-characters.jpg";
import galleryVehicles from "@/assets/gallery-vehicles.jpg";
import galleryMasks from "@/assets/gallery-masks.jpg";
import galleryDiverse from "@/assets/gallery-diverse.jpg";

const categories = [
  { src: galleryHeroes, label: "Heróis" },
  { src: galleryAnimalsNew, label: "Animais" },
  { src: galleryCharacters, label: "Personagens" },
  { src: galleryVehicles, label: "Veículos" },
  { src: galleryMasks, label: "Máscaras" },
  { src: galleryDiverse, label: "Diversos" },
];

// Duplicate for seamless infinite scroll
const duplicated = [...categories, ...categories];

const GallerySection = () => (
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

    {/* Infinite auto-scroll carousel */}
    <div className="group relative">
      <div className="flex animate-scroll-x group-hover:[animation-play-state:paused] w-max gap-6 px-3">
        {duplicated.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-56 md:w-64 aspect-[3/4] rounded-3xl overflow-hidden shrink-0 cursor-pointer shadow-card"
          >
            <img
              src={cat.src}
              alt={cat.label}
              className="w-full h-full object-cover"
              loading="lazy"
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
      </div>
    </div>
  </section>
);

export default GallerySection;
