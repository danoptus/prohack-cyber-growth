import { TrendingUp, Shield, Target, Zap, CheckCircle, ArrowRight, Building, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Cases = () => {
  const { t } = useTranslation();

  const cases = [
    {
      id: 1, title: "Fintech - Redução de 85% em Vulnerabilidades Críticas",
      industry: "Fintech", company: "Empresa de Pagamentos (Série B)",
      challenge: "Alta exposição a riscos cibernéticos com múltiplas vulnerabilidades críticas em ambiente de pagamentos digitais",
      solution: "Pentest completo + Programa de Gestão de Vulnerabilidades + vCISO",
      duration: "6 meses", teamSize: "50-100 colaboradores",
      services: ["Penetration Testing", "Gestão de Vulnerabilidades", "vCISO"],
      results: [
        { metric: "85%", description: "Redução em vulnerabilidades críticas" },
        { metric: "< 24h", description: "MTTR para vulnerabilidades críticas" },
        { metric: "100%", description: "Compliance PCI-DSS alcançado" },
        { metric: "ROI 400%", description: "Retorno sobre investimento em 12 meses" }
      ],
      testimonial: {
        quote: "A ProHack transformou nossa postura de segurança. Em 6 meses, saímos de uma situação crítica para compliance total, com métricas claras que conseguimos apresentar ao board.",
        author: "CTO", role: "Chief Technology Officer"
      },
      timeline: [
        { phase: "Mês 1-2", activity: "Assessment inicial + Pentest + Plano estratégico" },
        { phase: "Mês 3-4", activity: "Implementação de controles + Programa de vulnerabilidades" },
        { phase: "Mês 5-6", activity: "Reteste + Certificação PCI-DSS + Governance" }
      ]
    },
    {
      id: 2, title: "E-commerce - SOC 24/7 com MTTR < 15 Minutos",
      industry: "E-commerce", company: "Marketplace Nacional (Líder de Mercado)",
      challenge: "Ataques constantes durante Black Friday, necessidade de monitoramento 24/7 e resposta rápida a incidentes",
      solution: "SOC-as-a-Service + Resposta a Incidentes + Threat Intelligence",
      duration: "12 meses (ongoing)", teamSize: "200+ colaboradores",
      services: ["SOC 24/7", "Resposta a Incidentes", "Threat Intelligence"],
      results: [
        { metric: "< 15min", description: "MTTD - Mean Time to Detection" },
        { metric: "< 1h", description: "MTTR para incidentes críticos" },
        { metric: "99.9%", description: "Uptime durante Black Friday" },
        { metric: "Zero", description: "Incidentes com impacto no negócio" }
      ],
      testimonial: {
        quote: "Durante a Black Friday, nossa equipe conseguiu dormir tranquila sabendo que a ProHack estava monitorando 24/7. Zero incidentes impactaram nosso faturamento.",
        author: "CISO", role: "Chief Information Security Officer"
      },
      timeline: [
        { phase: "Mês 1", activity: "Setup do SOC + Integração de ferramentas + Playbooks" },
        { phase: "Mês 2-3", activity: "Tuning de alertas + Treinamento + Threat Hunting" },
        { phase: "Mês 4+", activity: "Operação contínua + Melhorias + Relatórios executivos" }
      ]
    }
  ];

  const stats = [
    { number: "50+", label: t("cases.clientsServed"), icon: Building },
    { number: "95%", label: t("cases.successRate"), icon: TrendingUp },
    { number: "< 24h", label: t("cases.avgMttr"), icon: Clock },
    { number: "ROI 350%", label: t("cases.avgRoi"), icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">{t("cases.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t("cases.subtitle").split("<highlight>")[0]}
            <span className="text-primary font-semibold">
              {t("cases.subtitle").match(/<highlight>(.*?)<\/highlight>/)?.[1]}
            </span>
            {t("cases.subtitle").split("</highlight>")[1]}
          </p>
        </div>

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

        <div className="space-y-16">
          {cases.map((caseStudy) => (
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
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{service}</span>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  <div className="xl:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Target className="mr-2 text-accent-warning" size={18} />
                        {t("cases.challenge")}
                      </h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Shield className="mr-2 text-primary" size={18} />
                        {t("cases.solution")}
                      </h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Clock className="mr-2 text-secondary" size={18} />
                        {t("cases.timeline")}
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

                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <TrendingUp className="mr-2 text-secondary" size={18} />
                      {t("cases.results")}
                    </h4>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button className="w-full btn-cyber">
                        {t("cases.viewFull")}
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Card className="card-cyber p-12">
            <h2 className="heading-md mb-4">{t("cases.ctaTitle")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t("cases.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber text-lg px-8 py-4">
                {t("cases.ctaButton")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                {t("cases.ctaDownload")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cases;
