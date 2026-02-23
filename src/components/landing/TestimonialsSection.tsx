import { FadeInUp, TiltCard } from "./Animations";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Maria", child: "mãe do Enzo", text: "Meu filho largou o tablet para montar os dinossauros. Melhor investimento que fiz!" },
  { name: "Carla", child: "mãe da Sofia", text: "Minha filha amou as princesas! Já imprimimos mais de 50 moldes e ela quer mais." },
  { name: "Pedro", child: "pai do Lucas", text: "Tempo de qualidade com meu filho. Montamos juntos todo fim de semana agora." },
  { name: "Ana", child: "mãe do Miguel", text: "O custo é ridículo! Uma impressão e pronto, brinquedo novo. Super recomendo!" },
  { name: "Juliana", child: "mãe da Valentina", text: "As crianças ficam concentradas por horas! Muito melhor que qualquer tela." },
  { name: "Roberto", child: "pai do Arthur", text: "Presente perfeito. Meu filho ganhou e não parou de montar os heróis." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Prova Social</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            O que as famílias estão <span className="text-gradient-orange">dizendo...</span>
          </h2>
        </div>
      </FadeInUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <FadeInUp key={i} delay={i * 0.1}>
            <TiltCard className="bg-card rounded-3xl p-6 border border-border h-full">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.child}</p>
                </div>
              </div>
            </TiltCard>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
