import { FadeInUp } from "./Animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Precisa de impressora colorida?", a: "Não! Você pode imprimir em preto e branco e pintar depois com lápis de cor ou giz de cera. As crianças adoram colorir antes de montar!" },
  { q: "Qual papel devo usar?", a: "Papel sulfite normal já funciona muito bem. Para modelos que duram mais, recomendamos papel fotográfico ou vergê (mais grosso)." },
  { q: "A partir de qual idade?", a: "Com ajuda de um adulto, crianças a partir de 3 anos podem brincar. Sozinhas, a partir de 6 anos conseguem montar com facilidade." },
  { q: "Como recebo o acesso?", a: "Assim que o pagamento for aprovado, você recebe um e-mail com o link de acesso imediato a todos os moldes e bônus." },
  { q: "Posso imprimir quantas vezes quiser?", a: "Sim! O acesso é vitalício e ilimitado. Imprima quantas vezes quiser, para sempre." },
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
