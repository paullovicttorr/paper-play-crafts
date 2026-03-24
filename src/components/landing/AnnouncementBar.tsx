import { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 bg-destructive text-destructive-foreground py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base font-bold">
        <span><span>🔥 OFERTA CON 80% DE DESCUENTO — SOLO HOY</span></span>
        <span className="bg-black/20 px-3 py-1 rounded-full font-mono tracking-wider">
          {mins}:{secs}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
