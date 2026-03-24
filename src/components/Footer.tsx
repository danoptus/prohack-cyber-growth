import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo-icon.png" alt="ProHack" className="h-10 w-10" />
              <div>
                <span className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                  ProHack
                </span>
                <p className="text-xs text-muted-foreground">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/servicos#pentest" className="hover:text-primary transition-colors">Penetration Testing</a></li>
              <li><a href="/servicos#vuln" className="hover:text-primary transition-colors">{t("contact.serviceOptions.vuln")}</a></li>
              <li><a href="/servicos#soc" className="hover:text-primary transition-colors">SOC 24/7</a></li>
              <li><a href="/servicos#incident" className="hover:text-primary transition-colors">{t("home.serviceIr")}</a></li>
              <li><a href="/servicos#vciso" className="hover:text-primary transition-colors">vCISO</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/metodologia" className="hover:text-primary transition-colors">{t("nav.methodology")}</a></li>
              <li><a href="/cases" className="hover:text-primary transition-colors">{t("nav.cases")}</a></li>
              <li><a href="/sobre" className="hover:text-primary transition-colors">{t("nav.about")}</a></li>
              <li><a href="/brand" className="hover:text-primary transition-colors">Brand Kit</a></li>
            </ul>
          </div>

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
            <a href="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </a>
            <a href="/privacidade#lgpd" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LGPD
            </a>
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
