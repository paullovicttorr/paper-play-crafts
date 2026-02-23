const FooterSection = () => (
  <footer className="py-10 bg-foreground text-background/70">
    <div className="container mx-auto px-4 text-center space-y-4">
      <p className="text-lg font-bold text-background">Mundo 3D em Papel</p>
      <div className="flex items-center justify-center gap-6 text-sm">
        <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
      </div>
      <p className="text-xs text-background/50">
        Mundo 3D em Papel © 2026. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
