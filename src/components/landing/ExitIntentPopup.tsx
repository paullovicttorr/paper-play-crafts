import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    // Desktop: mouseleave on document
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !firedRef.current) {
        firedRef.current = true;
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    // Mobile: intercept back button via history API
    const pushState = () => {
      window.history.pushState({ exitIntent: true }, "");
    };
    pushState();

    const handlePopState = (e: PopStateEvent) => {
      if (!firedRef.current) {
        firedRef.current = true;
        setShow(true);
        pushState(); // re-push so page doesn't navigate away
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const close = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-muted-foreground hover:bg-muted rounded-full p-1 cursor-pointer transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground">
              🎁 Espere! Antes de sair...
            </h2>

            {/* Persuasion copy */}
            <p className="font-semibold text-foreground/80 text-center mt-2">
              Liberamos um desconto exclusivo para você agora.
            </p>
            <p className="text-muted-foreground text-center mt-2 mb-6">
              Leve o Pacote Completo com +1.200 moldes 3D para imprimir e montar com as crianças.
            </p>

            {/* Price block */}
            <div className="bg-muted/40 rounded-xl p-4 flex flex-col items-center justify-center mb-4 border border-border">
              <span className="text-sm text-muted-foreground">
                De{" "}
                <span className="line-through text-destructive font-medium">R$ 27,90</span>
                {" "}por apenas:
              </span>
              <span className="text-5xl font-black text-secondary my-1">
                R$ 15,90
              </span>
            </div>

            {/* Urgency */}
            <p className="text-sm text-center text-primary font-medium mb-4">
              ⏳ Essa oferta desaparece se você sair da página.
            </p>

            {/* CTA */}
            <a
              href="https://pay.lowify.com.br/go.php?offer=4hv2a3k"
              className="w-full py-4 flex items-center justify-center text-center bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg rounded-lg shadow-lg transition-transform hover:scale-[1.03] pulse-glow-green"
            >
              SIM! Quero acesso completo por R$ 15,90
            </a>

            {/* Footer */}
            <p className="text-xs text-muted-foreground text-center mt-3">
              Acesso imediato • Pagamento único
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
