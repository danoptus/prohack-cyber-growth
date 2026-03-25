import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo-icon.png" alt="ProHack Cybersecurity" className="h-10 w-10" loading="lazy" />
              <div>
                <span className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                  ProHack
                </span>
                <p className="text-xs text-muted-foreground">{t("footer.tagline")}</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Serviços */}
          <nav aria-label="Services">
            <h3 className="font-semibold text-foreground mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/servicos#pentest" className="hover:text-primary transition-colors">Penetration Testing</Link></li>
              <li><Link to="/servicos#vuln" className="hover:text-primary transition-colors">{t("contact.serviceOptions.vuln")}</Link></li>
              <li><Link to="/servicos#soc" className="hover:text-primary transition-colors">SOC 24/7</Link></li>
              <li><Link to="/servicos#incident" className="hover:text-primary transition-colors">{t("home.serviceIr")}</Link></li>
              <li><Link to="/servicos#vciso" className="hover:text-primary transition-colors">vCISO</Link></li>
            </ul>
          </nav>

          {/* Links */}
          <nav aria-label="Company">
            <h3 className="font-semibold text-foreground mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/metodologia" className="hover:text-primary transition-colors">{t("nav.methodology")}</Link></li>
              <li><Link to="/cases" className="hover:text-primary transition-colors">{t("nav.cases")}</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.contactTitle")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contato@prohack.com.br" className="hover:text-primary transition-colors">
                  contato@prohack.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511955513834" className="hover:text-primary transition-colors">
                  +55 11 95551-3834
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511955513834" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.whatsapp247")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link to="/privacidade#lgpd" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LGPD
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">{t("footer.compliance")}</span>
              <span className="text-xs font-medium text-secondary">ISO 27001</span>
              <span className="text-xs font-medium text-secondary">NIST CSF</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
