import { FadeInUp } from "./Animations";
import guaranteeImg from "@/assets/guarantee-shield.png";

const GuaranteeSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
          <img src={guaranteeImg} alt="Sello de garantía" className="w-32 h-32 object-contain flex-shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Garantía total: <span className="text-secondary">30 días</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Prueba todos los moldes con tu hijo. Si no te encanta, te devolvemos el{" "}
              <strong className="text-foreground">100% del dinero</strong>. El riesgo es completamente nuestro.
            </p>
          </div>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default GuaranteeSection;
