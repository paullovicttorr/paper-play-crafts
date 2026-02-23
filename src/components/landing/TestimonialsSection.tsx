import { motion } from "framer-motion";
import { FadeInUp } from "./Animations";
import { Star } from "lucide-react";
import testimonialProduct1 from "@/assets/testimonial-product-1.jpg";
import testimonialProduct2 from "@/assets/testimonial-product-2.jpg";
import testimonialProduct3 from "@/assets/testimonial-product-3.jpg";
import testimonialAvatar1 from "@/assets/testimonial-avatar-1.jpeg";
import testimonialAvatar2 from "@/assets/testimonial-avatar-2.jpeg";
import testimonialAvatar3 from "@/assets/testimonial-avatar-3.jpeg";

const testimonials = [
  {
    name: "Maria González",
    role: "MÃE DE 2",
    text: "Me surpreendeu muito a qualidade. As peças encaixam perfeito e o resultado final é incrível, muito melhor do que esperava. É um produto que realmente vale a pena montar.",
    image: testimonialProduct1,
    avatar: testimonialAvatar1,
  },
  {
    name: "Ana Rodrigues",
    role: "PROFESSORA",
    text: "As instruções são super claras e fáceis de seguir. Não precisa de experiência prévia, tudo está bem explicado passo a passo. Foi uma experiência muito divertida e relaxante.",
    image: testimonialProduct2,
    avatar: testimonialAvatar2,
  },
  {
    name: "Carmen Sánchez",
    role: "MÃE DO ARTHUR",
    text: "Disfrutei cada parte da montagem. É intuitivo, bem pensado e muito satisfatório ver como vai tomando forma. Ideal para fazer sozinho ou em família.",
    image: testimonialProduct3,
    avatar: testimonialAvatar3,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background relative overflow-hidden">
    {/* Subtle dot pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <FadeInUp>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quem monta,{" "}
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-md">
              se apaixona!
            </span>
          </h2>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <FadeInUp key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative pt-8 group"
            >
              {/* Avatar overlapping top */}
              <div className="absolute -top-0 left-8 z-10">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-primary text-lg border-4 border-card shadow-lg overflow-hidden">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col">
                <div className="p-6 pt-10 flex flex-col flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Product image */}
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={t.image}
                      alt={`Produto feito por ${t.name}`}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-5 flex-1">
                    "{t.text}"
                  </p>

                  {/* Signature */}
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
