import { Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-gold-gradient mb-4">ELITE DA RUA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Streetwear premium para quem domina as ruas. Exclusividade, poder e identidade urbana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-foreground mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Produtos", "Categorias"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-foreground mb-4">Informações</h4>
            <ul className="space-y-3">
              {["Política de Troca", "Termos de Uso", "Política de Privacidade"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                @elitedarua
              </a>
              <a
                href="mailto:contato@elitedarua.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                contato@elitedarua.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Elite da Rua. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
