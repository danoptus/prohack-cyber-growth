import { Target, Shield, Users, Award, CheckCircle, ArrowRight, Brain, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Sobre = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t("about.value1Title"), description: t("about.value1Desc") },
    { icon: Brain, title: t("about.value2Title"), description: t("about.value2Desc") },
    { icon: Zap, title: t("about.value3Title"), description: t("about.value3Desc") },
    { icon: Heart, title: t("about.value4Title"), description: t("about.value4Desc") }
  ];

  const team = [
    {
      name: "João Silva", role: "Founder & CEO", specialization: "Penetration Testing, Cloud Security",
      certifications: ["CISSP", "OSCP", "AWS Security"],
      bio: "15+ anos em cybersecurity, ex-consultor em Big4, especialista em testes de invasão e arquiteturas cloud.",
      avatar: "👤"
    },
    {
      name: "Maria Santos", role: "Head of SOC", specialization: "SOC Operations, Incident Response",
      certifications: ["GCIH", "GCFA", "SANS GIAC"],
      bio: "12+ anos em operações de segurança, ex-analista sênior em CSIRT governamental, especialista em resposta a incidentes.",
      avatar: "👩‍💻"
    },
    {
      name: "Carlos Oliveira", role: "vCISO Lead", specialization: "Governance, Risk Management, Compliance",
      certifications: ["CISM", "CISA", "ISO 27001 LA"],
      bio: "18+ anos em governança de TI, ex-CISO de multinacional, especialista em compliance e gestão de riscos.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Costa", role: "Security Architect", specialization: "DevSecOps, Cloud Security, Automation",
      certifications: ["CSSLP", "Kubernetes Security", "Terraform"],
      bio: "10+ anos em arquitetura de segurança, ex-engenheira em fintech unicórnio, especialista em DevSecOps e automação.",
      avatar: "👩‍🔬"
    }
  ];

  const differentials = [
    { title: t("about.diff1Title"), description: t("about.diff1Desc"), icon: Award },
    { title: t("about.diff2Title"), description: t("about.diff2Desc"), icon: Zap },
    { title: t("about.diff3Title"), description: t("about.diff3Desc"), icon: Target },
    { title: t("about.diff4Title"), description: t("about.diff4Desc"), icon: Users }
  ];

  const stats = [
    { number: "50+", label: t("about.statsClients") },
    { number: "500+", label: t("about.statsPentests") },
    { number: "< 24h", label: t("about.statsMttr") },
    { number: "95%", label: t("about.statsRetention") }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">{t("about.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t("about.subtitle").split("<highlight>")[0]}
            <span className="text-primary font-semibold">
              {t("about.subtitle").match(/<highlight>(.*?)<\/highlight>/)?.[1]}
            </span>
            {t("about.subtitle").split("</highlight>")[1]}
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-3 text-primary" size={24} />
                {t("about.missionTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{t("about.missionText")}</p>
            </CardContent>
          </Card>
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-3 text-secondary" size={24} />
                {t("about.visionTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{t("about.visionText")}</p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">{t("about.valuesTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.valuesSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-service text-center">
                <CardContent className="p-0">
                  <div className="text-primary mb-4"><value.icon size={32} /></div>
                  <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <Card className="card-cyber bg-card/50">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Differentials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">{t("about.diffTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.diffSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <Card key={index} className="card-cyber">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0"><differential.icon size={24} /></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{differential.title}</h3>
                      <p className="text-sm text-muted-foreground">{differential.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("about.certsTitle")}</CardTitle>
              <p className="text-muted-foreground">{t("about.certsSubtitle")}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">{t("about.techCerts")}</h4>
                  <div className="space-y-2">
                    {["CISSP, CISM, CISA", "OSCP, GCIH, GCFA", "AWS/Azure Security"].map((cert, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="text-secondary" size={16} />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">{t("about.compliance")}</h4>
                  <div className="space-y-2">
                    {["ISO 27001 Lead Auditor", "NIST CSF Framework", "LGPD Compliance"].map((cert, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="text-secondary" size={16} />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">{t("about.partnerships")}</h4>
                  <div className="space-y-2">
                    {["AWS Partner Network", "Microsoft Security Partner", "SANS Training Partner"].map((cert, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="text-secondary" size={16} />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* CTA */}
        <div className="text-center">
          <Card className="card-cyber p-12">
            <h2 className="heading-md mb-4">{t("about.ctaTitle")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t("about.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber text-lg px-8 py-4">
                {t("about.ctaButton")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                {t("about.ctaMethodology")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
