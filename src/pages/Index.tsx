import { ArrowRight, Shield, Zap, Target, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-cyber.jpg";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import { organizationSchema, websiteSchema, faqSchema, professionalServiceSchema, breadcrumbSchema } from "@/lib/seo-schemas";

const Index = () => {
  const { t } = useTranslation();
  const whatsappUrl = "https://wa.me/5511996652416?text=Tenho%20um%20incidente%20de%20seguran%C3%A7a%20e%20preciso%20de%20ajuda%20imediata.";

  const services = [
    {
      title: t("home.servicePentest"),
      description: t("home.servicePentestDesc"),
      icon: Target,
      features: [t("home.featureScope"), t("home.featureExecReport"), t("home.featureRetest"), t("home.featurePocs")]
    },
    {
      title: t("home.serviceSoc"),
      description: t("home.serviceSocDesc"),
      icon: Shield,
      features: [t("home.feature247"), t("home.featureSla"), t("home.featurePlaybooks"), t("home.featureMonthly")]
    },
    {
      title: t("home.serviceIr"),
      description: t("home.serviceIrDesc"),
      icon: Zap,
      features: [t("home.featureResponse1h"), t("home.featureContainment"), t("home.featureForensics"), t("home.featureRecovery")]
    },
    {
      title: t("home.serviceVciso"),
      description: t("home.serviceVcisoDesc"),
      icon: CheckCircle,
      features: [t("home.featureGovernance"), t("home.featureRiskRegister"), t("home.featurePolicies"), t("home.featureBoardReports")]
    }
  ];

  const metrics = [
    { number: "< 24h", label: t("home.metricMttr") },
    { number: "95%", label: t("home.metricPatches") },
    { number: "ISO 27001", label: t("home.metricCompliance") },
    { number: "24/7", label: t("home.metricSoc") }
  ];

  const faqs = [
    { question: t("home.faq1q"), answer: t("home.faq1a") },
    { question: t("home.faq2q"), answer: t("home.faq2a") },
    { question: t("home.faq3q"), answer: t("home.faq3a") },
    { question: t("home.faq4q"), answer: t("home.faq4a") }
  ];

  const faqJsonLd = faqSchema(faqs);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="ProHack | Cybersecurity B2B: Pentest, SOC, vCISO"
        description="Consultoria em cybersecurity B2B: Pentest, SOC 24/7, Resposta a Incidentes e vCISO. Métricas que o board entende. ISO 27001, NIST CSF, LGPD."
        keywords="cybersecurity, pentest, penetration testing, SOC, consultoria cybersecurity, segurança da informação, resposta a incidentes, vCISO, gestão vulnerabilidades, LGPD, ISO 27001, SOC 24/7, teste de invasão, segurança cibernética São Paulo"
        jsonLd={[organizationSchema, websiteSchema, professionalServiceSchema(), faqJsonLd, breadcrumbSchema([{ name: "Home", url: "/" }])]}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center cyber-grid">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cybersecurity Operations Center" 
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="heading-xl mb-6 fade-in">
              {t("home.heroTitle")}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl slide-up">
              {t("home.heroSubtitle").split("<highlight>")[0]}
              <span className="text-primary font-semibold">
                {t("home.heroSubtitle").match(/<highlight>(.*?)<\/highlight>/)?.[1]}
              </span>
              {t("home.heroSubtitle").split("</highlight>")[1]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contato">
                <Button className="btn-cyber text-lg px-8 py-4">
                  {t("home.ctaExpert")}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-panic text-lg px-8 py-4">
                  <AlertTriangle className="mr-2" size={20} />
                  {t("home.ctaPanic")}
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <CheckCircle size={16} className="text-secondary" />
                <span>{t("home.trustIso")}</span>
              </a>
              <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <CheckCircle size={16} className="text-secondary" />
                <span>{t("home.trustNist")}</span>
              </a>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-secondary" />
                <span>{t("home.trustLgpd")}</span>
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
            <h2 className="heading-lg mb-4">{t("home.servicesTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.servicesSubtitle")}
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
                  <Link to="/servicos">
                    <Button variant="outline" className="w-full">
                      {t("home.learnMore")}
                    </Button>
                  </Link>
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
            <h2 className="heading-lg mb-4">{t("home.faqTitle")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("home.faqSubtitle")}
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
          <h2 className="heading-lg mb-6">{t("home.ctaTitle")}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("home.ctaSubtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button className="btn-cyber text-lg px-8 py-4">
                {t("home.ctaButton")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                {t("home.ctaWhatsapp")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
