import { Target, Shield, Zap, CheckCircle, Users, BarChart3, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo-schemas";

const Servicos = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "pentest",
      title: t("servicesPage.pentest.title"),
      icon: Target,
      tagline: t("servicesPage.pentest.tagline"),
      description: t("servicesPage.pentest.description"),
      methodology: [
        t("servicesPage.pentest.method1"),
        t("servicesPage.pentest.method2"),
        t("servicesPage.pentest.method3"),
        t("servicesPage.pentest.method4"),
        t("servicesPage.pentest.method5"),
        t("servicesPage.pentest.method6")
      ],
      deliverables: [
        t("servicesPage.pentest.deliv1"),
        t("servicesPage.pentest.deliv2"),
        t("servicesPage.pentest.deliv3"),
        t("servicesPage.pentest.deliv4"),
        t("servicesPage.pentest.deliv5")
      ],
      metrics: [
        t("servicesPage.pentest.metric1"),
        t("servicesPage.pentest.metric2"),
        t("servicesPage.pentest.metric3"),
        t("servicesPage.pentest.metric4")
      ],
      duration: t("servicesPage.pentest.duration")
    },
    {
      id: "vuln",
      title: t("servicesPage.vuln.title"),
      icon: BarChart3,
      tagline: t("servicesPage.vuln.tagline"),
      description: t("servicesPage.vuln.description"),
      methodology: [
        t("servicesPage.vuln.method1"),
        t("servicesPage.vuln.method2"),
        t("servicesPage.vuln.method3"),
        t("servicesPage.vuln.method4"),
        t("servicesPage.vuln.method5"),
        t("servicesPage.vuln.method6")
      ],
      deliverables: [
        t("servicesPage.vuln.deliv1"),
        t("servicesPage.vuln.deliv2"),
        t("servicesPage.vuln.deliv3"),
        t("servicesPage.vuln.deliv4"),
        t("servicesPage.vuln.deliv5")
      ],
      metrics: [
        t("servicesPage.vuln.metric1"),
        t("servicesPage.vuln.metric2"),
        t("servicesPage.vuln.metric3"),
        t("servicesPage.vuln.metric4")
      ],
      duration: t("servicesPage.vuln.duration")
    },
    {
      id: "soc",
      title: t("servicesPage.soc.title"),
      icon: Shield,
      tagline: t("servicesPage.soc.tagline"),
      description: t("servicesPage.soc.description"),
      methodology: [
        t("servicesPage.soc.method1"),
        t("servicesPage.soc.method2"),
        t("servicesPage.soc.method3"),
        t("servicesPage.soc.method4"),
        t("servicesPage.soc.method5"),
        t("servicesPage.soc.method6")
      ],
      deliverables: [
        t("servicesPage.soc.deliv1"),
        t("servicesPage.soc.deliv2"),
        t("servicesPage.soc.deliv3"),
        t("servicesPage.soc.deliv4"),
        t("servicesPage.soc.deliv5")
      ],
      metrics: [
        t("servicesPage.soc.metric1"),
        t("servicesPage.soc.metric2"),
        t("servicesPage.soc.metric3"),
        t("servicesPage.soc.metric4")
      ],
      duration: t("servicesPage.soc.duration")
    },
    {
      id: "incident",
      title: t("servicesPage.incident.title"),
      icon: Zap,
      tagline: t("servicesPage.incident.tagline"),
      description: t("servicesPage.incident.description"),
      methodology: [
        t("servicesPage.incident.method1"),
        t("servicesPage.incident.method2"),
        t("servicesPage.incident.method3"),
        t("servicesPage.incident.method4"),
        t("servicesPage.incident.method5"),
        t("servicesPage.incident.method6")
      ],
      deliverables: [
        t("servicesPage.incident.deliv1"),
        t("servicesPage.incident.deliv2"),
        t("servicesPage.incident.deliv3"),
        t("servicesPage.incident.deliv4"),
        t("servicesPage.incident.deliv5")
      ],
      metrics: [
        t("servicesPage.incident.metric1"),
        t("servicesPage.incident.metric2"),
        t("servicesPage.incident.metric3"),
        t("servicesPage.incident.metric4")
      ],
      duration: t("servicesPage.incident.duration")
    },
    {
      id: "vciso",
      title: t("servicesPage.vciso.title"),
      icon: Users,
      tagline: t("servicesPage.vciso.tagline"),
      description: t("servicesPage.vciso.description"),
      methodology: [
        t("servicesPage.vciso.method1"),
        t("servicesPage.vciso.method2"),
        t("servicesPage.vciso.method3"),
        t("servicesPage.vciso.method4"),
        t("servicesPage.vciso.method5"),
        t("servicesPage.vciso.method6")
      ],
      deliverables: [
        t("servicesPage.vciso.deliv1"),
        t("servicesPage.vciso.deliv2"),
        t("servicesPage.vciso.deliv3"),
        t("servicesPage.vciso.deliv4"),
        t("servicesPage.vciso.deliv5")
      ],
      metrics: [
        t("servicesPage.vciso.metric1"),
        t("servicesPage.vciso.metric2"),
        t("servicesPage.vciso.metric3"),
        t("servicesPage.vciso.metric4")
      ],
      duration: t("servicesPage.vciso.duration")
    },
    {
      id: "consulting",
      title: t("servicesPage.consulting.title"),
      icon: Award,
      tagline: t("servicesPage.consulting.tagline"),
      description: t("servicesPage.consulting.description"),
      methodology: [
        t("servicesPage.consulting.method1"),
        t("servicesPage.consulting.method2"),
        t("servicesPage.consulting.method3"),
        t("servicesPage.consulting.method4"),
        t("servicesPage.consulting.method5"),
        t("servicesPage.consulting.method6")
      ],
      deliverables: [
        t("servicesPage.consulting.deliv1"),
        t("servicesPage.consulting.deliv2"),
        t("servicesPage.consulting.deliv3"),
        t("servicesPage.consulting.deliv4"),
        t("servicesPage.consulting.deliv5")
      ],
      metrics: [
        t("servicesPage.consulting.metric1"),
        t("servicesPage.consulting.metric2"),
        t("servicesPage.consulting.metric3"),
        t("servicesPage.consulting.metric4")
      ],
      duration: t("servicesPage.consulting.duration")
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">{t("services.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t("services.subtitle").split("<highlight>")[0]}
            <span className="text-primary font-semibold">
              {t("services.subtitle").match(/<highlight>(.*?)<\/highlight>/)?.[1]}
            </span>
            {t("services.subtitle").split("</highlight>")[1]}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service) => (
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
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="mr-2 text-secondary" size={18} />
                      {t("services.methodology")}
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

                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Target className="mr-2 text-secondary" size={18} />
                      {t("services.deliverables")}
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

                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <BarChart3 className="mr-2 text-secondary" size={18} />
                      {t("services.expectedResults")}
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

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="card-cyber p-12">
            <h2 className="heading-md mb-4">{t("services.customTitle")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("services.customSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                {t("services.talkExpert")}
              </Button>
              <Button variant="outline">
                {t("services.viewCases")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
