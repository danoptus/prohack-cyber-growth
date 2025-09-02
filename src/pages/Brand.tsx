import { Download, Palette, Type, Image, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Brand = () => {
  const colorPalette = [
    {
      name: "Primary",
      description: "Azul ciano - Cor principal da marca",
      hex: "#0EA5E9",
      hsl: "199, 89%, 48%",
      usage: "CTAs, links, elementos interativos"
    },
    {
      name: "Secondary", 
      description: "Verde - Cor de apoio para sucesso e confirmações",
      hex: "#10B981",
      hsl: "142, 69%, 58%",
      usage: "Badges, status positivos, ícones de check"
    },
    {
      name: "Background",
      description: "Azul escuro - Fundo principal",
      hex: "#0B1220",
      hsl: "223, 47%, 11%",
      usage: "Planos de fundo, containers principais"
    },
    {
      name: "Foreground",
      description: "Cinza claro - Texto principal",
      hex: "#E2E8F0",
      hsl: "210, 40%, 92%",
      usage: "Textos principais, títulos"
    },
    {
      name: "Accent Warning",
      description: "Laranja - Para alertas e destaques",
      hex: "#F59E0B",
      hsl: "38, 92%, 50%",
      usage: "Avisos, botão de pânico (alternativo)"
    },
    {
      name: "Accent Danger",
      description: "Vermelho - Para emergências",
      hex: "#EF4444",
      hsl: "0, 84%, 60%",
      usage: "Botão de pânico, alertas críticos"
    }
  ];

  const typography = [
    {
      family: "Inter Tight",
      usage: "Display - Títulos e headlines",
      weights: ["400", "500", "600", "700", "800"],
      characteristics: "Sans-serif moderna, alta legibilidade, tracking otimizado"
    },
    {
      family: "Inter",
      usage: "Body - Textos corridos e interface",
      weights: ["300", "400", "500", "600", "700"],
      characteristics: "Sans-serif versátil, excelente para UI, boa performance"
    }
  ];

  const logoVersions = [
    {
      name: "Logo Principal",
      file: "logo.svg",
      description: "Versão completa com ícone + texto",
      usage: "Cabeçalhos, materiais oficiais"
    },
    {
      name: "Ícone",
      file: "logo-icon.svg", 
      description: "Apenas o escudo com circuito",
      usage: "Favicon, aplicativos, espaços reduzidos"
    },
    {
      name: "Versão Escura",
      file: "logo-dark.svg",
      description: "Para fundos claros",
      usage: "Documentos, apresentações em fundo branco"
    }
  ];

  const usageGuidelines = {
    correct: [
      "Use o logo em tamanho mínimo de 120px de largura",
      "Mantenha área de respiro igual à altura do escudo",
      "Use as cores oficiais da paleta",
      "Aplique em fundos que garantam contraste adequado",
      "Mantenha proporções originais (não distorça)"
    ],
    incorrect: [
      "Não altere as cores do logo",
      "Não use em fundos com baixo contraste", 
      "Não distorça ou redimensione desproporcionalmente",
      "Não adicione efeitos (sombra, relevo, rotação)",
      "Não use tamanho menor que 120px de largura"
    ]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Brand Kit ProHack</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Diretrizes visuais, assets e recursos para uso correto da marca ProHack. 
            <span className="text-primary font-semibold">Cybersecurity com precisão e resultado</span>.
          </p>
        </div>

        {/* Logo & Downloads */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="mr-3 text-primary" size={24} />
                Logotipo & Downloads
              </CardTitle>
              <p className="text-muted-foreground">
                Versões oficiais do logo ProHack em diferentes formatos
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Main Logo Display */}
              <div className="text-center bg-gradient-background rounded-2xl p-12">
                <img src="/logo.svg" alt="ProHack Logo" className="mx-auto h-20 mb-4" />
                <p className="text-sm text-muted-foreground">Logo principal - Versão padrão</p>
              </div>

              {/* Logo Versions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {logoVersions.map((version, index) => (
                  <Card key={index} className="border border-border">
                    <CardContent className="p-6 text-center">
                      <div className="bg-muted/30 rounded-lg p-8 mb-4">
                        <img 
                          src={`/${version.file}`} 
                          alt={version.name}
                          className="mx-auto h-12"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{version.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{version.description}</p>
                      <p className="text-xs text-muted-foreground mb-4">{version.usage}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2" size={14} />
                        Baixar SVG
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Download All */}
              <div className="text-center">
                <Button className="btn-cyber">
                  <Download className="mr-2" size={18} />
                  Download Completo (ZIP)
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Inclui todas as versões em SVG, PNG (alta resolução) e formatos para impressão
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-3 text-secondary" size={24} />
                Paleta de Cores
              </CardTitle>
              <p className="text-muted-foreground">
                Cores oficiais da marca com códigos e diretrizes de uso
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorPalette.map((color, index) => (
                  <Card key={index} className="border border-border">
                    <CardContent className="p-6">
                      <div 
                        className="w-full h-20 rounded-lg mb-4 border border-border"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      
                      <h4 className="font-semibold text-foreground mb-2">{color.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{color.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">HEX:</span>
                          <code className="text-foreground font-mono">{color.hex}</code>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">HSL:</span>
                          <code className="text-foreground font-mono">{color.hsl}</code>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          <strong>Uso:</strong> {color.usage}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Type className="mr-3 text-primary" size={24} />
                Tipografia
              </CardTitle>
              <p className="text-muted-foreground">
                Famílias tipográficas e diretrizes de uso
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {typography.map((font, index) => (
                <div key={index} className="border border-border rounded-xl p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: font.family }}>
                        {font.family}
                      </h4>
                      <Badge variant="secondary" className="mb-4">{font.usage}</Badge>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {font.characteristics}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Pesos disponíveis:</h5>
                        <div className="flex flex-wrap gap-2">
                          {font.weights.map((weight, idx) => (
                            <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                              {weight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4" style={{ fontFamily: font.family }}>
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-1">Display (32px)</h5>
                        <p className="text-2xl font-bold">ProHack Cybersecurity</p>
                      </div>
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-1">Heading (24px)</h5>
                        <p className="text-xl font-semibold">Precisão e Resultado</p>
                      </div>
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-1">Body (16px)</h5>
                        <p className="text-base">Consultoria especializada em cybersecurity com foco em resultados mensuráveis.</p>
                      </div>
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-1">Small (14px)</h5>
                        <p className="text-sm">Pentest, SOC, vCISO e Resposta a Incidentes</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Do's */}
            <Card className="card-cyber border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center text-secondary">
                  <CheckCircle className="mr-3" size={24} />
                  Uso Correto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usageGuidelines.correct.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="card-cyber border-accent-danger/30">
              <CardHeader>
                <CardTitle className="flex items-center text-accent-danger">
                  <X className="mr-3" size={24} />
                  Evite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usageGuidelines.incorrect.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <X className="text-accent-danger flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Brand Voice */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle>Tom de Voz & Personalidade</CardTitle>
              <p className="text-muted-foreground">
                Como a ProHack se comunica e se posiciona no mercado
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">T</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Técnico</h4>
                  <p className="text-sm text-muted-foreground">
                    Precisão técnica, metodologia estruturada, expertise comprovada
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">C</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Claro</h4>
                  <p className="text-sm text-muted-foreground">
                    Comunicação direta, métricas objetivas, sem jargões desnecessários
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-accent-warning/10 rounded-full flex items-center justify-center">
                    <span className="text-accent-warning font-bold">C</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Confiável</h4>
                  <p className="text-sm text-muted-foreground">
                    Transparência, ética, compromisso com resultados de longo prazo
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">R</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Responsivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Agilidade na resposta, SLAs cumpridos, disponibilidade 24/7
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">Exemplos de Comunicação</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-medium text-secondary mb-2">✓ Prefira</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• "MTTR reduzido para menos de 24h"</li>
                      <li>• "ROI de 350% em 12 meses"</li>
                      <li>• "Compliance 100% alcançado"</li>
                      <li>• "Metodologia baseada em NIST CSF"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-accent-danger mb-2">✗ Evite</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• "Solução revolucionária"</li>
                      <li>• "Proteção 100% garantida"</li>
                      <li>• "Melhor do mercado"</li>
                      <li>• "Hackeamos tudo"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <Card className="card-cyber border-primary/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Dúvidas sobre Uso da Marca?
            </h3>
            <p className="text-muted-foreground mb-6">
              Para solicitações específicas, parcerias ou dúvidas sobre o uso correto da marca ProHack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                Contatar Equipe de Marketing
              </Button>
              <Button variant="outline">
                Download Assets Completos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Brand;