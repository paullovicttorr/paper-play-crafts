import { FadeInUp, TiltCard } from "./Animations";
import { Printer, Scissors, Smile } from "lucide-react";

const steps = [
  { icon: Printer, title: "1. Imprime", desc: "Elige cualquier modelo e imprime en casa.", color: "text-primary" },
  { icon: Scissors, title: "2. Recorta y dobla", desc: "Sigue las líneas fácilmente.", color: "text-sky" },
  { icon: Smile, title: "3. ¡Juega!", desc: "Diversión asegurada por horas sin pantallas.", color: "text-secondary" },
];

const HowItWorksSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Simples assim</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            É tão simples como <span className="text-gradient-orange">1, 2, 3...</span>
          </h2>
        </div>
      </FadeInUp>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <FadeInUp key={i} delay={i * 0.1}>
            <TiltCard className="bg-card rounded-3xl p-8 text-center border border-border">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </TiltCard>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
