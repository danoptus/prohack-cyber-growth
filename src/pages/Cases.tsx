import { TrendingUp, Shield, Target, Zap, CheckCircle, ArrowRight, Building, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "Fintech - Redução de 85% em Vulnerabilidades Críticas",
      industry: "Fintech",
      company: "Empresa de Pagamentos (Série B)",
      challenge: "Alta exposição a riscos cibernéticos com múltiplas vulnerabilidades críticas em ambiente de pagamentos digitais",
      solution: "Pentest completo + Programa de Gestão de Vulnerabilidades + vCISO",
      duration: "6 meses",
      teamSize: "50-100 colaboradores",
      services: ["Penetration Testing", "Gestão de Vulnerabilidades", "vCISO"],
      results: [
        {
          metric: "85%",
          description: "Redução em vulnerabilidades críticas",
          type: "reduction"
        },
        {
          metric: "< 24h",
          description: "MTTR para vulnerabilidades críticas",
          type: "time"
        },
        {
          metric: "100%",
          description: "Compliance PCI-DSS alcançado",
          type: "compliance"
        },
        {
          metric: "ROI 400%",
          description: "Retorno sobre investimento em 12 meses",
          type: "financial"
        }
      ],
      testimonial: {
        quote: "A ProHack transformou nossa postura de segurança. Em 6 meses, saímos de uma situação crítica para compliance total, com métricas claras que conseguimos apresentar ao board.",
        author: "CTO",
        role: "Chief Technology Officer"
      },
      timeline: [
        { phase: "Mês 1-2", activity: "Assessment inicial + Pentest + Plano estratégico" },
        { phase: "Mês 3-4", activity: "Implementação de controles + Programa de vulnerabilidades" },
        { phase: "Mês 5-6", activity: "Reteste + Certificação PCI-DSS + Governance" }
      ]
    },
    {
      id: 2,
      title: "E-commerce - SOC 24/7 com MTTR < 15 Minutos",
      industry: "E-commerce",
      company: "Marketplace Nacional (Líder de Mercado)",
      challenge: "Ataques constantes durante Black Friday, necessidade de monitoramento 24/7 e resposta rápida a incidentes",
      solution: "SOC-as-a-Service + Resposta a Incidentes + Threat Intelligence",
      duration: "12 meses (ongoing)",
      teamSize: "200+ colaboradores",
      services: ["SOC 24/7", "Resposta a Incidentes", "Threat Intelligence"],
      results: [
        {
          metric: "< 15min",
          description: "MTTD - Mean Time to Detection",
          type: "time"
        },
        {
          metric: "< 1h",
          description: "MTTR para incidentes críticos",
          type: "time"
        },
        {
          metric: "99.9%",
          description: "Uptime durante Black Friday",
          type: "availability"
        },
        {
          metric: "Zero",
          description: "Incidentes com impacto no negócio",
          type: "security"
        }
      ],
      testimonial: {
        quote: "Durante a Black Friday, nossa equipe conseguiu dormir tranquila sabendo que a ProHack estava monitorando 24/7. Zero incidentes impactaram nosso faturamento.",
        author: "CISO",
        role: "Chief Information Security Officer"
      },
      timeline: [
        { phase: "Mês 1", activity: "Setup do SOC + Integração de ferramentas + Playbooks" },
        { phase: "Mês 2-3", activity: "Tuning de alertas + Treinamento + Threat Hunting" },
        { phase: "Mês 4+", activity: "Operação contínua + Melhorias + Relatórios executivos" }
      ]
    },
    {
      id: 3,
      title: "Indústria - Resposta a Ransomware em < 4 Horas",
      industry: "Manufatura",
      company: "Indústria Química (Multinacional)",
      challenge: "Ataque de ransomware que criptografou servidores críticos da produção, necessidade de resposta imediata",
      solution: "Resposta a Incidentes + Forensics + Plano de Recuperação + Hardening",
      duration: "3 semanas (resposta + recuperação)",
      teamSize: "500+ colaboradores",
      services: ["Resposta a Incidentes", "Digital Forensics", "Consultoria"],
      results: [
        {
          metric: "< 4h",
          description: "RTO - Recovery Time Objective",
          type: "time"
        },
        {
          metric: "< 1h",
          description: "RPO - Recovery Point Objective",
          type: "time"
        },
        {
          metric: "$0",
          description: "Pagamento de resgate (recuperação via backup)",
          type: "financial"
        },
        {
          metric: "100%",
          description: "Recuperação de sistemas críticos",
          type: "recovery"
        }
      ],
      testimonial: {
        quote: "A resposta da ProHack foi extraordinária. Em menos de 4 horas estávamos operacionais novamente. A análise forense revelou como prevenir futuros ataques.",
        author: "CEO",
        role: "Chief Executive Officer"
      },
      timeline: [
        { phase: "0-4h", activity: "Contenção + Isolamento + Assessment inicial" },
        { phase: "4-24h", activity: "Erradicação + Recuperação + Forensics" },
        { phase: "1-3 sem", activity: "Hardening + Políticas + Treinamento + Monitoramento" }
      ]
    },
    {
      id: 4,
      title: "Healthtech - Compliance LGPD + ISO 27001",
      industry: "Saúde Digital",
      company: "Plataforma de Telemedicina",
      challenge: "Necessidade de compliance LGPD para dados sensíveis de pacientes e certificação ISO 27001",
      solution: "vCISO + Assessment de Maturidade + Programa de Governance + Auditoria",
      duration: "8 meses",
      teamSize: "30-50 colaboradores",
      services: ["vCISO", "Compliance", "Políticas & Processos"],
      results: [
        {
          metric: "100%",
          description: "Compliance LGPD alcançado",
          type: "compliance"
        },
        {
          metric: "ISO 27001",
          description: "Certificação obtida",
          type: "certification"
        },
        {
          metric: "70%",
          description: "Redução em riscos identificados",
          type: "reduction"
        },
        {
          metric: "ROI 350%",
          description: "Retorno via novos contratos enterprise",
          type: "financial"
        }
      ],
      testimonial: {
        quote: "A certificação ISO 27001 nos abriu portas para contratos enterprise que eram impossíveis antes. O vCISO da ProHack foi fundamental para estruturar nossa governança.",
        author: "Founder & CEO",
        role: "Founder & Chief Executive Officer"
      },
      timeline: [
        { phase: "Mês 1-2", activity: "Assessment + Gap Analysis + Roadmap estratégico" },
        { phase: "Mês 3-6", activity: "Implementação de controles + Políticas + Treinamentos" },
        { phase: "Mês 7-8", activity: "Auditoria interna + Certificação + Documentação" }
      ]
    },
    {
      id: 5,
      title: "Startup SaaS - Hardening de Cloud Infrastructure",
      industry: "SaaS B2B",
      company: "Plataforma de Analytics (Série A)",
      challenge: "Infraestrutura AWS mal configurada, dados de clientes expostos, necessidade de hardening urgente",
      solution: "Cloud Security Assessment + Hardening + DevSecOps + Monitoramento",
      duration: "4 meses",
      teamSize: "20-30 colaboradores",
      services: ["Cloud Security", "DevSecOps", "Consultoria"],
      results: [
        {
          metric: "95%",
          description: "Redução em misconfigurations",
          type: "reduction"
        },
        {
          metric: "Zero",
          description: "Dados expostos publicamente",
          type: "security"
        },
        {
          metric: "SOC 2",
          description: "Certificação Type II obtida",
          type: "certification"
        },
        {
          metric: "$2M",
          description: "Valor do contrato enterprise fechado",
          type: "financial"
        }
      ],
      testimonial: {
        quote: "O hardening da nossa infraestrutura AWS foi crucial para fecharmos nosso maior contrato enterprise. A consultoria em DevSecOps mudou nosso processo de desenvolvimento.",
        author: "CTO & Co-founder",
        role: "Chief Technology Officer & Co-founder"
      },
      timeline: [
        { phase: "Mês 1", activity: "Cloud Security Assessment + Identificação de riscos" },
        { phase: "Mês 2-3", activity: "Hardening + Automação + Pipeline DevSecOps" },
        { phase: "Mês 4", activity: "Monitoramento + SOC 2 + Documentação" }
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "Clientes Atendidos", icon: Building },
    { number: "95%", label: "Taxa de Sucesso", icon: TrendingUp },
    { number: "< 24h", label: "MTTR Médio", icon: Clock },
    { number: "ROI 350%", label: "ROI Médio", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Cases de Sucesso</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Resultados reais em organizações de diferentes portes e setores. 
            Cada case demonstra nossa capacidade de entregar <span className="text-primary font-semibold">
            métricas mensuráveis e impacto no negócio</span>.
          </p>
        </div>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cases */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <Card key={caseStudy.id} className="card-cyber overflow-hidden">
              <CardHeader className="border-b border-border">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{caseStudy.industry}</Badge>
                      <Badge variant="outline">{caseStudy.teamSize}</Badge>
                      <Badge variant="outline">{caseStudy.duration}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
                    <p className="text-muted-foreground font-medium">{caseStudy.company}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.services.map((service, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Challenge & Solution */}
                  <div className="xl:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Target className="mr-2 text-accent-warning" size={18} />
                        Desafio
                      </h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Shield className="mr-2 text-primary" size={18} />
                        Solução
                      </h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Clock className="mr-2 text-secondary" size={18} />
                        Timeline de Execução
                      </h4>
                      <div className="space-y-3">
                        {caseStudy.timeline.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium text-primary text-sm">{item.phase}</span>
                              <p className="text-sm text-muted-foreground">{item.activity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <blockquote className="text-foreground font-medium mb-4 italic">
                        "{caseStudy.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <TrendingUp className="mr-2 text-secondary" size={18} />
                      Resultados Alcançados
                    </h4>
                    
                    <div className="space-y-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <Button className="w-full btn-cyber">
                        Ver Caso Completo
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="card-cyber p-12">
            <h2 className="heading-md mb-4">Seu Próximo Case de Sucesso?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Cada organização tem necessidades únicas. Vamos discutir como adaptar nossa experiência 
              comprovada para resolver seus desafios específicos de cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber text-lg px-8 py-4">
                Iniciar Conversa Estratégica
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Baixar Cases Completos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cases;