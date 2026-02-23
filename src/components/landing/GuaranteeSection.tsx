import { FadeInUp } from "./Animations";
import guaranteeImg from "@/assets/guarantee-shield.png";

const GuaranteeSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
          <img src={guaranteeImg} alt="Selo de garantia" className="w-32 h-32 object-contain flex-shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Garantia Duplicada: <span className="text-secondary">30 Dias</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Baixe os moldes, imprima e monte com sua criança. Se por qualquer motivo vocês não amarem
              a experiência, devolvo <strong className="text-foreground">100% do seu dinheiro</strong>. O risco é todo meu.
            </p>
          </div>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default GuaranteeSection;
