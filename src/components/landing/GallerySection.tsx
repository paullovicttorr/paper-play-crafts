import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import galleryHero from "@/assets/gallery-hero.jpg";
import galleryPrincess from "@/assets/gallery-princess.jpg";
import galleryDino from "@/assets/gallery-dino.jpg";
import galleryAnimals from "@/assets/gallery-animals.jpg";
import galleryHouses from "@/assets/gallery-houses.jpg";
import galleryCar from "@/assets/gallery-car.jpg";

const images = [
  { src: galleryHero, label: "Heróis" },
  { src: galleryPrincess, label: "Princesas" },
  { src: galleryDino, label: "Dinossauros" },
  { src: galleryAnimals, label: "Animais" },
  { src: galleryHouses, label: "Casinhas" },
  { src: galleryCar, label: "Veículos" },
];

const GallerySection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Veja o que vocês vão <span className="text-gradient-orange">criar juntos!</span>
          </h2>
        </div>
      </FadeInUp>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <FadeInUp key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-card shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
                <img src={img.src} alt={img.label} className="w-full aspect-square object-cover" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-sm text-foreground shadow-lg">
                {img.label}
              </div>
            </motion.div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
