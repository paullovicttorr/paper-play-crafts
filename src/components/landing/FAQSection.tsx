import { FadeInUp } from "./Animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Necesito impresora a color?", a: "No. Puedes imprimir en blanco y negro y colorear después." },
  { q: "¿Qué papel usar?", a: "Papel normal funciona perfecto. Para más durabilidad, usa papel más grueso." },
  { q: "¿Desde qué edad?", a: "Desde los 3 años con ayuda, desde 6 pueden hacerlo solos." },
  { q: "¿Cómo recibo acceso?", a: "Recibes un enlace inmediato después del pago." },
  { q: "¿Puedo imprimir ilimitado?", a: "Sí, acceso de por vida." },
];

const FAQSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <FadeInUp>
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Dúvidas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Perguntas <span className="text-gradient-orange">Frequentes</span>
          </h2>
        </div>
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default FAQSection;
