import { FadeInUp, TiltCard } from "./Animations";
import { MonitorOff, Brain, Users, Coins } from "lucide-react";

const benefits = [
  { icon: MonitorOff, title: "Longe das Telas", desc: "Troque o vício do celular por criatividade real e palpável." },
  { icon: Brain, title: "Coordenação Motora", desc: "Estimula o cérebro e a precisão das crianças de forma lúdica." },
  { icon: Users, title: "Tempo em Família", desc: "A desculpa perfeita para sentar e rir junto com eles." },
  { icon: Coins, title: "Custo Quase Zero", desc: "Pague apenas a impressão e tenha brinquedos infinitos." },
];

const BenefitsSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Benefícios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Por que o <span className="text-gradient-orange">Mundo 3D em Papel</span> é diferente?
          </h2>
        </div>
      </FadeInUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <FadeInUp key={i} delay={i * 0.12}>
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
