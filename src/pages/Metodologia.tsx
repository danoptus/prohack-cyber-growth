import { ArrowRight, Target, Search, Zap, Shield, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema } from "@/lib/seo-schemas";

const Metodologia = () => {
  const { t } = useTranslation();

  const killChainSteps = [
    {
      phase: t("methodologyPage.step1.phase"), title: t("methodologyPage.step1.title"),
      description: t("methodologyPage.step1.description"), icon: Search,
      activities: [t("methodologyPage.step1.act1"), t("methodologyPage.step1.act2"), t("methodologyPage.step1.act3"), t("methodologyPage.step1.act4"), t("methodologyPage.step1.act5")],
      tools: ["Nmap", "Shodan", "TheHarvester", "Maltego", "Recon-ng"],
      deliverables: [t("methodologyPage.step1.deliv1"), t("methodologyPage.step1.deliv2"), t("methodologyPage.step1.deliv3"), t("methodologyPage.step1.deliv4")]
    },
    {
      phase: t("methodologyPage.step2.phase"), title: t("methodologyPage.step2.title"),
      description: t("methodologyPage.step2.description"), icon: Target,
      activities: [t("methodologyPage.step2.act1"), t("methodologyPage.step2.act2"), t("methodologyPage.step2.act3"), t("methodologyPage.step2.act4"), t("methodologyPage.step2.act5")],
      tools: ["Nessus", "Burp Suite", "OWASP ZAP", "Nikto", "Qualys"],
      deliverables: [t("methodologyPage.step2.deliv1"), t("methodologyPage.step2.deliv2"), t("methodologyPage.step2.deliv3"), t("methodologyPage.step2.deliv4")]
    },
    {
      phase: t("methodologyPage.step3.phase"), title: t("methodologyPage.step3.title"),
      description: t("methodologyPage.step3.description"), icon: Zap,
      activities: [t("methodologyPage.step3.act1"), t("methodologyPage.step3.act2"), t("methodologyPage.step3.act3"), t("methodologyPage.step3.act4"), t("methodologyPage.step3.act5")],
      tools: ["Metasploit", "Cobalt Strike", "SQLmap", "Custom Scripts", "Exploitdb"],
      deliverables: [t("methodologyPage.step3.deliv1"), t("methodologyPage.step3.deliv2"), t("methodologyPage.step3.deliv3"), t("methodologyPage.step3.deliv4")]
    },
    {
      phase: t("methodologyPage.step4.phase"), title: t("methodologyPage.step4.title"),
      description: t("methodologyPage.step4.description"), icon: Shield,
      activities: [t("methodologyPage.step4.act1"), t("methodologyPage.step4.act2"), t("methodologyPage.step4.act3"), t("methodologyPage.step4.act4"), t("methodologyPage.step4.act5")],
      tools: ["PowerShell Empire", "Mimikatz", "BloodHound", "CrackMapExec", "Covenant"],
      deliverables: [t("methodologyPage.step4.deliv1"), t("methodologyPage.step4.deliv2"), t("methodologyPage.step4.deliv3"), t("methodologyPage.step4.deliv4")]
    },
    {
      phase: t("methodologyPage.step5.phase"), title: t("methodologyPage.step5.title"),
      description: t("methodologyPage.step5.description"), icon: BarChart3,
      activities: [t("methodologyPage.step5.act1"), t("methodologyPage.step5.act2"), t("methodologyPage.step5.act3"), t("methodologyPage.step5.act4"), t("methodologyPage.step5.act5")],
      tools: ["Custom Templates", "Risk Matrices", "CVSS Calculator", "PowerBI", "Executive Dashboards"],
      deliverables: [t("methodologyPage.step5.deliv1"), t("methodologyPage.step5.deliv2"), t("methodologyPage.step5.deliv3"), t("methodologyPage.step5.deliv4")]
    },
    {
      phase: t("methodologyPage.step6.phase"), title: t("methodologyPage.step6.title"),
      description: t("methodologyPage.step6.description"), icon: CheckCircle,
      activities: [t("methodologyPage.step6.act1"), t("methodologyPage.step6.act2"), t("methodologyPage.step6.act3"), t("methodologyPage.step6.act4"), t("methodologyPage.step6.act5")],
      tools: ["Targeted Scanning", "Manual Testing", "Automated Validation", "Custom Scripts"],
      deliverables: [t("methodologyPage.step6.deliv1"), t("methodologyPage.step6.deliv2"), t("methodologyPage.step6.deliv3"), t("methodologyPage.step6.deliv4")]
    }
  ];

  const serviceMethodologies = [
    {
      service: t("methodologyPage.socMethod.service"), icon: Shield,
      framework: t("methodologyPage.socMethod.framework"),
      phases: [
        { name: t("methodologyPage.socMethod.phase1"), activities: [t("methodologyPage.socMethod.p1a1"), t("methodologyPage.socMethod.p1a2"), t("methodologyPage.socMethod.p1a3"), t("methodologyPage.socMethod.p1a4")] },
        { name: t("methodologyPage.socMethod.phase2"), activities: [t("methodologyPage.socMethod.p2a1"), t("methodologyPage.socMethod.p2a2"), t("methodologyPage.socMethod.p2a3"), t("methodologyPage.socMethod.p2a4")] },
        { name: t("methodologyPage.socMethod.phase3"), activities: [t("methodologyPage.socMethod.p3a1"), t("methodologyPage.socMethod.p3a2"), t("methodologyPage.socMethod.p3a3")] },
        { name: t("methodologyPage.socMethod.phase4"), activities: [t("methodologyPage.socMethod.p4a1"), t("methodologyPage.socMethod.p4a2"), t("methodologyPage.socMethod.p4a3"), t("methodologyPage.socMethod.p4a4"), t("methodologyPage.socMethod.p4a5")] },
        { name: t("methodologyPage.socMethod.phase5"), activities: [t("methodologyPage.socMethod.p5a1"), t("methodologyPage.socMethod.p5a2"), t("methodologyPage.socMethod.p5a3")] }
      ]
    },
    {
      service: t("methodologyPage.vulnMethod.service"), icon: Target,
      framework: t("methodologyPage.vulnMethod.framework"),
      phases: [
        { name: t("methodologyPage.vulnMethod.phase1"), activities: [t("methodologyPage.vulnMethod.p1a1"), t("methodologyPage.vulnMethod.p1a2"), t("methodologyPage.vulnMethod.p1a3"), t("methodologyPage.vulnMethod.p1a4")] },
        { name: t("methodologyPage.vulnMethod.phase2"), activities: [t("methodologyPage.vulnMethod.p2a1"), t("methodologyPage.vulnMethod.p2a2"), t("methodologyPage.vulnMethod.p2a3"), t("methodologyPage.vulnMethod.p2a4")] },
        { name: t("methodologyPage.vulnMethod.phase3"), activities: [t("methodologyPage.vulnMethod.p3a1"), t("methodologyPage.vulnMethod.p3a2"), t("methodologyPage.vulnMethod.p3a3"), t("methodologyPage.vulnMethod.p3a4")] },
        { name: t("methodologyPage.vulnMethod.phase4"), activities: [t("methodologyPage.vulnMethod.p4a1"), t("methodologyPage.vulnMethod.p4a2"), t("methodologyPage.vulnMethod.p4a3"), t("methodologyPage.vulnMethod.p4a4")] },
        { name: t("methodologyPage.vulnMethod.phase5"), activities: [t("methodologyPage.vulnMethod.p5a1"), t("methodologyPage.vulnMethod.p5a2"), t("methodologyPage.vulnMethod.p5a3"), t("methodologyPage.vulnMethod.p5a4")] }
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
