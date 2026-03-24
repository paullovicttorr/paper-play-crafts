import { FadeInUp, TiltCard } from "./Animations";
import { MonitorOff, Brain, Users, Coins } from "lucide-react";

const benefits = [
  { icon: MonitorOff, title: "Menos tiempo en pantallas", desc: "Cambia el celular por creatividad real y tangible." },
  { icon: Brain, title: "Estimula la creatividad", desc: "Desarrolla la imaginación y el pensamiento creativo de forma lúdica." },
  { icon: Users, title: "Momentos reales en familia", desc: "La excusa perfecta para sentarse y reír juntos." },
  { icon: Coins, title: "Costo casi cero", desc: "Solo paga la impresión y tendrás juguetes infinitos." },
];

const BenefitsSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Beneficios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            ¿Por qué <span className="text-gradient-orange">Mundo 3D en Papel</span> es diferente?
          </h2>
        </div>
      </FadeInUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <FadeInUp key={i} delay={Math.min(i * 0.08, 0.24)}>
            <TiltCard className="bg-card rounded-3xl p-7 text-center border border-border h-full">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </TiltCard>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
