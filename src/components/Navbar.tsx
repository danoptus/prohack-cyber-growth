import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Metodologia", href: "/metodologia" },
    { name: "Cases", href: "/cases" },
    { name: "Sobre", href: "/sobre" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo-icon.svg" 
              alt="ProHack Logo" 
              className="h-10 w-10"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                ProHack
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Cybersecurity</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <PanicButton />
            <Link to="/contato">
              <Button variant="outline" size="sm">
                Falar com Especialista
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <PanicButton mobile />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full mt-4">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Botão de Pânico Component
const PanicButton = ({ mobile = false }: { mobile?: boolean }) => {
  const whatsappUrl = "https://wa.me/5511996652416?text=Tenho%20um%20incidente%20de%20seguran%C3%A7a%20e%20preciso%20de%20ajuda%20imediata.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-panic inline-flex items-center gap-2 ${mobile ? "px-3 py-2" : "px-4 py-2"}`}
      aria-label="Botão de emergência para incidentes de segurança"
    >
      <AlertTriangle size={mobile ? 16 : 18} />
      {!mobile && <span className="font-bold">Incidente? Fale Agora!</span>}
    </a>
  );
};

export default Navbar;