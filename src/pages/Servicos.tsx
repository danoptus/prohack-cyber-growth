import { Target, Shield, Zap, CheckCircle, Users, BarChart3, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Servicos = () => {
  const services = [
    {
      id: "pentest",
      title: "Penetration Testing",
      icon: Target,
      tagline: "Testes de invasão com precisão executiva",
      description: "Simulamos ataques reais para identificar vulnerabilidades críticas antes dos cibercriminosos. Metodologia baseada no Cyber Kill Chain com foco em resultados mensuráveis para o board.",
      methodology: [
        "Reconnaissance e OSINT",
        "Vulnerability Assessment",
        "Exploitation e PoC",
        "Post-exploitation e Pivoting",
        "Relatórios executivo + técnico",
        "Reteste e validação"
      ],
      deliverables: [
        "Relatório Executivo com risk score e ROI de remediação",
        "Relatório Técnico com PoCs e scripts de exploração",
        "Plano de Remediação priorizado por criticidade",
        "Reteste após correções (incluído no pacote)",
        "Apresentação executiva para stakeholders"
      ],
      metrics: [
        "MTTR < 30 dias para críticos",
        "Redução de 80%+ em vulnerabilidades críticas",
        "ROI médio de 300% em remediação",
        "Compliance com frameworks regulatórios"
      ],
      duration: "2-4 semanas"
    },
    {
      id: "vuln",
      title: "Gestão de Vulnerabilidades",
      icon: BarChart3,
      tagline: "Visibilidade contínua do risco cibernético",
      description: "Programa contínuo de identificação, priorização e remediação de vulnerabilidades com métricas executivas e dashboards em tempo real.",
      methodology: [
        "Asset Discovery automatizado",
        "Scanning contínuo (interno/externo)",
        "Priorização por CVSS + contexto de negócio",
        "Workflow de remediação integrado",
        "Métricas MTTR/MTTD/MTTV",
        "Relatórios executivos mensais"
      ],
      deliverables: [
        "Dashboard executivo com KPIs de risco",
        "Inventário de ativos atualizado",
        "Risk Register com classificação por criticidade",
        "SLAs de remediação por severidade",
        "Relatórios de compliance automatizados"
      ],
      metrics: [
        "MTTR < 72h para vulnerabilidades críticas",
        "95%+ de cobertura de ativos",
        "Redução de 70% no tempo de detecção",
        "ROI positivo em 60 dias"
      ],
      duration: "Serviço contínuo"
    },
    {
      id: "soc",
      title: "SOC - Security Operations Center",
      icon: Shield,
      tagline: "Monitoramento 24/7 com resposta inteligente",
      description: "Centro de operações de segurança com analistas especializados, SIEM avançado e resposta automatizada via SOAR. Detecção proativa e resposta coordenada.",
      methodology: [
        "Coleta de logs (EDR, NDR, SIEM)",
        "Correlação e análise de eventos",
        "Threat Hunting proativo",
        "Resposta automatizada (SOAR)",
        "Escalation matrix por severidade",
        "Threat Intelligence integrado"
      ],
      deliverables: [
        "Dashboard de segurança em tempo real",
        "SLA de resposta: 15min (crítico), 1h (alto)",
        "Playbooks de resposta customizados",
        "Relatórios de incidentes detalhados",
        "Métricas mensais de eficácia"
      ],
      metrics: [
        "MTTD < 15 minutos",
        "MTTR < 4 horas",
        "99.9% de uptime do SOC",
        "Redução de 90% em falsos positivos"
      ],
      duration: "Contrato 12 meses"
    },
    {
      id: "incident",
      title: "Resposta a Incidentes",
      icon: Zap,
      tagline: "Resposta rápida e coordenada",
      description: "Equipe especializada em contenção, erradicação e recuperação de incidentes de segurança. Disponibilidade 24/7 com metodologia estruturada.",
      methodology: [
        "Preparação e playbooks",
        "Detecção e análise inicial",
        "Contenção e isolamento",
        "Erradicação da ameaça",
        "Recuperação e monitoramento",
        "Lessons learned e melhoria contínua"
      ],
      deliverables: [
        "Resposta imediata < 1 hora",
        "Plano de contenção executado",
        "Análise forense completa",
        "Relatório post-mortem com recomendações",
        "Roadmap de hardening"
      ],
      metrics: [
        "RTO < 4 horas",
        "RPO < 1 hora",
        "99% de sucesso na contenção",
        "Tempo médio de recuperação < 24h"
      ],
      duration: "Retainer + On-demand"
    },
    {
      id: "vciso",
      title: "vCISO - Virtual CISO",
      icon: Users,
      tagline: "Governança estratégica de segurança",
      description: "CISO virtual para organizações que precisam de governança estratégica sem o custo de um CISO full-time. Foco em resultados de negócio e compliance.",
      methodology: [
        "Assessment de maturidade inicial",
        "Definição de estratégia e roadmap",
        "Implementação de políticas e processos",
        "Gestão de riscos e compliance",
        "Relatórios executivos mensais",
        "Gestão de fornecedores e auditores"
      ],
      deliverables: [
        "Estratégia de segurança alinhada ao negócio",
        "Políticas e procedimentos estruturados", 
        "Risk Register atualizado mensalmente",
        "KPIs e KRIs executivos",
        "Plano de continuidade de negócios"
      ],
      metrics: [
        "ROI de 400%+ vs CISO full-time",
        "100% de compliance regulatório",
        "Redução de 60% em riscos críticos",
        "Aprovação do board em 90 dias"
      ],
      duration: "Contrato 6-12 meses"
    },
    {
      id: "consulting",
      title: "Consultoria Especializada",
      icon: Award,
      tagline: "Expertise sob demanda",
      description: "Projetos específicos e consultoria especializada em hardening, arquitetura de segurança, Zero Trust, Cloud Security e compliance regulatório.",
      methodology: [
        "Discovery e assessment",
        "Arquitetura e design",
        "Implementação guiada",
        "Transferência de conhecimento",
        "Documentação técnica",
        "Suporte pós-implementação"
      ],
      deliverables: [
        "Arquitetura de segurança detalhada",
        "Guias de implementação step-by-step",
        "Scripts e automações",
        "Treinamento das equipes internas",
        "Roadmap de evolução"
      ],
      metrics: [
        "Redução de 50% no tempo de projeto",
        "ROI positivo em 90 dias",
        "100% de knowledge transfer",
        "Satisfação do cliente > 9/10"
      ],
      duration: "2-12 semanas"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Soluções completas de cybersecurity com metodologia comprovada e foco em resultados mensuráveis. 
            Cada serviço é projetado para entregar <span className="text-primary font-semibold">métricas que o board entende</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <Card key={service.id} id={service.id} className="card-cyber overflow-hidden">
              <CardHeader className="border-b border-border">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">
                      <service.icon size={40} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      <p className="text-primary font-medium">{service.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">{service.duration}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">{service.description}</p>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Metodologia */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="mr-2 text-secondary" size={18} />
                      Metodologia
                    </h4>
                    <ul className="space-y-2">
                      {service.methodology.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entregáveis */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Target className="mr-2 text-secondary" size={18} />
                      Entregáveis
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Métricas */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-secondary" size={18} />
                      Resultados Esperados
                    </h4>
                    <ul className="space-y-2">
                      {service.metrics.map((metric, idx) => (
                        <li key={idx} className="text-sm font-medium text-secondary flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
                  <Button className="btn-cyber">
                    Solicitar Proposta
                  </Button>
                  <Button variant="outline">
                    Agendar Discovery Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="card-cyber p-12">
            <h2 className="heading-md mb-4">Precisa de uma Solução Customizada?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Combinamos nossos serviços para criar uma solução sob medida para suas necessidades específicas de segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                Falar com Especialista
              </Button>
              <Button variant="outline">
                Ver Casos de Sucesso
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Servicos;