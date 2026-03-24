const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo-icon.svg" alt="ProHack" className="h-10 w-10" />
              <div>
                <span className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                  ProHack
                </span>
                <p className="text-xs text-muted-foreground">Cybersecurity com precisão e resultado</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Consultoria especializada em cybersecurity com foco em resultados mensuráveis e governança executiva.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/servicos#pentest" className="hover:text-primary transition-colors">Penetration Testing</a></li>
              <li><a href="/servicos#vuln" className="hover:text-primary transition-colors">Gestão de Vulnerabilidades</a></li>
              <li><a href="/servicos#soc" className="hover:text-primary transition-colors">SOC 24/7</a></li>
              <li><a href="/servicos#incident" className="hover:text-primary transition-colors">Resposta a Incidentes</a></li>
              <li><a href="/servicos#vciso" className="hover:text-primary transition-colors">vCISO</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/metodologia" className="hover:text-primary transition-colors">Metodologia</a></li>
              <li><a href="/cases" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/brand" className="hover:text-primary transition-colors">Brand Kit</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
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
                  href="https://wa.me/5511996652416" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp 24/7
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ProHack. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="/privacidade#lgpd" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LGPD
            </a>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Conformidade:</span>
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