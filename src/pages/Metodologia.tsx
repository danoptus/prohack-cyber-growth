import { ArrowRight, Target, Search, Zap, Shield, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Metodologia = () => {
  const { t } = useTranslation();

  const killChainSteps = [
    {
      phase: "1. Reconnaissance", title: "Reconhecimento",
      description: "Coleta passiva de informações sobre o alvo", icon: Search,
      activities: ["OSINT (Open Source Intelligence)", "DNS enumeration e subdomain discovery", "Social engineering reconnaissance", "Análise de superfície de ataque", "Mapeamento de tecnologias"],
      tools: ["Nmap", "Shodan", "TheHarvester", "Maltego", "Recon-ng"],
      deliverables: ["Relatório de OSINT", "Mapa da infraestrutura", "Inventário de ativos expostos", "Assessment de superfície de ataque"]
    },
    {
      phase: "2. Scanning", title: "Varredura",
      description: "Identificação ativa de vulnerabilidades e serviços", icon: Target,
      activities: ["Port scanning e service enumeration", "Vulnerability assessment", "Web application scanning", "Análise de configurações", "Identificação de versões e patches"],
      tools: ["Nessus", "Burp Suite", "OWASP ZAP", "Nikto", "Qualys"],
      deliverables: ["Relatório de vulnerabilidades", "Matriz de riscos CVSS", "Inventário de serviços", "Baseline de segurança"]
    },
    {
      phase: "3. Exploitation", title: "Exploração",
      description: "Exploração controlada de vulnerabilidades identificadas", icon: Zap,
      activities: ["Exploit development e adaptação", "Proof of Concept (PoC)", "Bypass de controles de segurança", "Privilege escalation", "Validação de impacto"],
      tools: ["Metasploit", "Cobalt Strike", "SQLmap", "Custom Scripts", "Exploitdb"],
      deliverables: ["PoCs funcionais", "Scripts de exploração", "Evidências de comprometimento", "Análise de impacto detalhada"]
    },
    {
      phase: "4. Post-Exploitation", title: "Pós-Exploração",
      description: "Avaliação do alcance e persistência do comprometimento", icon: Shield,
      activities: ["Lateral movement", "Data exfiltration simulation", "Persistence mechanisms", "Privilege escalation avançado", "Domain enumeration"],
      tools: ["PowerShell Empire", "Mimikatz", "BloodHound", "CrackMapExec", "Covenant"],
      deliverables: ["Mapa de movimento lateral", "Análise de dados sensíveis", "Relatório de persistência", "Chain de exploração completa"]
    },
    {
      phase: "5. Reporting", title: "Relatórios",
      description: "Documentação executiva e técnica dos achados", icon: BarChart3,
      activities: ["Análise de risco executiva", "Documentação técnica detalhada", "Priorização por criticidade", "Roadmap de remediação", "Apresentação para stakeholders"],
      tools: ["Custom Templates", "Risk Matrices", "CVSS Calculator", "PowerBI", "Executive Dashboards"],
      deliverables: ["Relatório executivo com ROI", "Relatório técnico com PoCs", "Plano de remediação priorizado", "Dashboard de métricas"]
    },
    {
      phase: "6. Retesting", title: "Reteste",
      description: "Validação das correções implementadas", icon: CheckCircle,
      activities: ["Validação de patches", "Teste de configurações", "Verificação de controles", "Assessment de melhoria", "Sign-off final"],
      tools: ["Targeted Scanning", "Manual Testing", "Automated Validation", "Custom Scripts"],
      deliverables: ["Relatório de reteste", "Status de remediação", "Certificado de melhoria", "Recomendações finais"]
    }
  ];

  const serviceMethodologies = [
    {
      service: "SOC - Security Operations Center", icon: Shield,
      framework: "NIST Cybersecurity Framework + MITRE ATT&CK",
      phases: [
        { name: "Identify", activities: ["Asset Discovery", "Risk Assessment", "Governance", "Business Environment"] },
        { name: "Protect", activities: ["Access Control", "Awareness Training", "Data Security", "Maintenance"] },
        { name: "Detect", activities: ["Anomaly Detection", "Security Monitoring", "Detection Processes"] },
        { name: "Respond", activities: ["Response Planning", "Communications", "Analysis", "Mitigation", "Improvements"] },
        { name: "Recover", activities: ["Recovery Planning", "Improvements", "Communications"] }
      ]
    },
    {
      service: "Gestão de Vulnerabilidades", icon: Target,
      framework: "NIST SP 800-40 + ISO 27001",
      phases: [
        { name: "Asset Management", activities: ["Discovery", "Inventory", "Classification", "Ownership"] },
        { name: "Vulnerability Assessment", activities: ["Scanning", "Testing", "Analysis", "Prioritization"] },
        { name: "Risk Analysis", activities: ["CVSS Scoring", "Business Impact", "Threat Context", "Risk Rating"] },
        { name: "Remediation", activities: ["Planning", "Implementation", "Validation", "Documentation"] },
        { name: "Reporting", activities: ["Metrics", "Dashboards", "Executive Reports", "Compliance"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">{t("methodology.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t("methodology.subtitle").split("<highlight>")[0]}
            <span className="text-primary font-semibold">
              {t("methodology.subtitle").match(/<highlight>(.*?)<\/highlight>/)?.[1]}
            </span>
            {t("methodology.subtitle").split("</highlight>")[1]}
          </p>
        </div>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">{t("methodology.killChainTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("methodology.killChainSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {killChainSteps.map((step, index) => (
              <Card key={index} className="card-cyber relative overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-primary"><step.icon size={32} /></div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{step.phase}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="mr-2 text-secondary" size={16} />
                      {t("methodology.activities")}
                    </h4>
                    <ul className="space-y-1">
                      {step.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>{activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t("methodology.tools")}</h4>
                    <div className="flex flex-wrap gap-1">
                      {step.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t("methodology.deliverables")}</h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-secondary flex items-start">
                          <ArrowRight className="mr-2 mt-0.5 flex-shrink-0" size={12} />{deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">{t("methodology.serviceMethodTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("methodology.serviceMethodSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceMethodologies.map((methodology, index) => (
              <Card key={index} className="card-cyber">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center space-x-4">
                    <div className="text-primary"><methodology.icon size={32} /></div>
                    <div>
                      <CardTitle className="text-xl">{methodology.service}</CardTitle>
                      <p className="text-sm text-primary">{methodology.framework}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {methodology.phases.map((phase, idx) => (
                      <div key={idx} className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">{phase.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.activities.map((activity, actIdx) => (
                            <span key={actIdx} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">{activity}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("methodology.frameworksTitle")}</CardTitle>
              <p className="text-muted-foreground">{t("methodology.frameworksSubtitle")}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Shield, title: "ISO 27001", desc: t("methodology.isoDesc"), color: "primary" },
                  { icon: Target, title: "NIST CSF", desc: t("methodology.nistDesc"), color: "secondary" },
                  { icon: BarChart3, title: "MITRE ATT&CK", desc: t("methodology.mitreDesc"), color: "accent-warning" },
                  { icon: CheckCircle, title: "LGPD", desc: t("methodology.lgpdDesc"), color: "primary" }
                ].map((fw, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-${fw.color}/10 rounded-full flex items-center justify-center`}>
                      <fw.icon className={`text-${fw.color}`} size={24} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{fw.title}</h4>
                    <p className="text-sm text-muted-foreground">{fw.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Card className="card-cyber p-8">
            <h2 className="heading-md mb-4">{t("methodology.ctaTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">{t("methodology.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                {t("methodology.ctaDemo")}
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline">{t("methodology.ctaCases")}</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Metodologia;
