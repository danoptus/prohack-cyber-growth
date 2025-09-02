import { ArrowRight, Shield, Zap, Target, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-cyber.jpg";

const Index = () => {
  const whatsappUrl = "https://wa.me/5511996652416?text=Tenho%20um%20incidente%20de%20seguran%C3%A7a%20e%20preciso%20de%20ajuda%20imediata.";

  const services = [
    {
      title: "Penetration Testing",
      description: "Testes de invasão completos com relatórios executivos e técnicos",
      icon: Target,
      features: ["Escopo completo", "Relatório executivo + técnico", "Reteste incluído", "PoCs detalhados"]
    },
    {
      title: "SOC 24/7",
      description: "Monitoramento contínuo de segurança com resposta imediata",
      icon: Shield,
      features: ["Monitoramento 24/7", "SLA < 15min", "Playbooks customizados", "Relatórios mensais"]
    },
    {
      title: "Resposta a Incidentes",
      description: "Resposta rápida e coordenada a incidentes de segurança",
      icon: Zap,
      features: ["Resposta < 1h", "Contenção imediata", "Análise forense", "Plano de recuperação"]
    },
    {
      title: "vCISO",
      description: "CISO virtual para governança estratégica de segurança",
      icon: CheckCircle,
      features: ["Governança estratégica", "Risk Register", "Políticas e normas", "Relatórios ao board"]
    }
  ];

  const metrics = [
    { number: "< 24h", label: "MTTR médio" },
    { number: "95%", label: "Cobertura de patches" },
    { number: "ISO 27001", label: "Conformidade" },
    { number: "24/7", label: "Disponibilidade SOC" }
  ];

  const faqs = [
    {
      question: "Qual o tempo de resposta para incidentes críticos?",
      answer: "Nosso SLA para incidentes críticos é de resposta em até 1 hora, com contenção inicial em até 4 horas. Para emergências, temos o Botão de Pânico com resposta imediata via WhatsApp."
    },
    {
      question: "Como funciona o processo de pentest?",
      answer: "Seguimos a metodologia baseada no Cyber Kill Chain: reconnaissance, scanning, exploitation, post-exploitation e relatórios. Entregamos relatório executivo para o board e técnico para as equipes, com reteste incluído."
    },
    {
      question: "Vocês trabalham com empresas de que porte?",
      answer: "Atendemos desde startups até grandes corporações. Nossos serviços são escaláveis e adaptados ao porte e maturidade de cada organização."
    },
    {
      question: "Qual a diferença entre SOC e monitoramento tradicional?",
      answer: "Nosso SOC vai além do monitoramento: inclui threat hunting ativo, análise comportamental, resposta automatizada via SOAR e relatórios executivos com métricas de negócio."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center cyber-grid">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cybersecurity Operations Center" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="heading-xl mb-6 fade-in">
              ProHack — Cybersecurity com precisão e resultado
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl slide-up">
              Pentest, SOC, Resposta a Incidentes, vCISO e Gestão de Vulnerabilidades, 
              com <span className="text-primary font-semibold">métricas que o board entende</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contato">
                <Button className="btn-cyber text-lg px-8 py-4">
                  Falar com Especialista
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-panic text-lg px-8 py-4">
                  <AlertTriangle className="mr-2" size={20} />
                  Botão de Pânico: Incidente Agora
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary" />
                <span>ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary" />
                <span>NIST CSF</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary" />
                <span>LGPD Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Serviços que Entregam Resultados</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas de cybersecurity com foco em governança executiva e métricas de negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service">
                <CardContent className="p-0">
                  <div className="text-primary mb-4">
                    <service.icon size={32} />
                  </div>
                  <h3 className="heading-sm mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle size={14} className="text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground">
              Esclareça suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-cyber p-6">
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6">Pronto para Elevar sua Segurança?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba uma avaliação inicial gratuita e descubra como podemos fortalecer suas defesas digitais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contato">
              <Button className="btn-cyber text-lg px-8 py-4">
                Solicitar Avaliação Gratuita
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                WhatsApp Direto
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;