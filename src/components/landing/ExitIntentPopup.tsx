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
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground">
              🎁 ¡ESPERA! ANTES DE SALIR…
            </h2>

            {/* Persuasion copy */}
            <p className="font-semibold text-foreground/80 text-center mt-2">
              Hemos liberado un descuento exclusivo solo para ti.
            </p>
            <p className="text-muted-foreground text-center mt-2 mb-6">
              Llévate el acceso completo con +1.200 moldes 3D para imprimir y crear con tu hijo.
            </p>

            {/* Price block */}
            <div className="bg-muted/40 rounded-xl p-4 flex flex-col items-center justify-center mb-4 border border-border">
              <span className="text-sm text-muted-foreground">
                De{" "}
                <span className="line-through text-destructive font-medium">$9.90</span>
                {" "}hoy por solo:
              </span>
              <span className="text-5xl font-black text-secondary my-1">
                $5.90 USD
              </span>
            </div>

            {/* Urgency */}
            <p className="text-sm text-center text-primary font-medium mb-4">
              ⏳ Esta oferta desaparecerá cuando salgas de la página.
            </p>

            {/* CTA */}
            <a
              href="https://pay.hotmart.com/G105060095P?off=k9b4s7wo&checkoutMode=10&bid=1774385043062"
              className="w-full py-4 flex items-center justify-center text-center bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg rounded-lg shadow-lg transition-transform hover:scale-[1.03] pulse-glow-green"
            >
              SÍ, QUIERO TODO POR $5.90
            </a>

            {/* Footer */}
            <p className="text-xs text-muted-foreground text-center mt-3">
              Acceso inmediato • Pago único
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
