import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MessageSquare, MapPin, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema } from "@/lib/seo-schemas";

const Contato = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    subject: "",
    message: "",
    consent: false
  });

  const whatsappUrl = "https://wa.me/5511996652416?text=Olá,%20gostaria%20de%20conversar%20sobre%20os%20serviços%20de%20cybersecurity%20da%20ProHack.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: t("contact.consentRequired"),
        description: t("contact.consentRequiredDesc"),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDesc")
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        phone: "",
        subject: "",
        message: "",
        consent: false
      });
    } catch (error) {
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorDesc"),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactChannels = [
    {
      icon: MessageSquare,
      title: t("contact.whatsapp247"),
      subtitle: t("contact.immediateResponse"),
      info: "+55 11 99665-2416",
      action: t("contact.openWhatsapp"),
      link: whatsappUrl,
      highlight: true
    },
    {
      icon: Mail,
      title: t("contact.commercialEmail"),
      subtitle: t("contact.proposalsPartnerships"),
      info: "contato@prohack.com.br",
      action: t("contact.sendEmail"),
      link: "mailto:contato@prohack.com.br"
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      subtitle: t("contact.businessHours"),
      info: "+55 11 99665-2416",
      action: t("contact.call"),
      link: "tel:+5511996652416"
    },
    {
      icon: AlertTriangle,
      title: t("contact.emergencies"),
      subtitle: t("contact.securityIncidents"),
      info: t("contact.panicButton"),
      action: t("contact.immediateHelp"),
      link: "https://wa.me/5511996652416?text=Tenho%20um%20incidente%20de%20seguran%C3%A7a%20e%20preciso%20de%20ajuda%20imediata.",
      emergency: true
    }
  ];

  const serviceOptions = [
    t("contact.serviceOptions.pentest"),
    t("contact.serviceOptions.vuln"),
    t("contact.serviceOptions.soc"),
    t("contact.serviceOptions.ir"),
    t("contact.serviceOptions.vciso"),
    t("contact.serviceOptions.consulting"),
    t("contact.serviceOptions.assessment"),
    t("contact.serviceOptions.other")
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">{t("contact.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactChannels.map((channel, index) => (
            <Card key={index} className={`card-cyber transition-all duration-300 hover:scale-105 ${
              channel.highlight ? 'border-primary/50 shadow-cyber' : ''
            } ${channel.emergency ? 'border-accent-danger/50' : ''}`}>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  channel.highlight ? 'bg-primary/20 text-primary' : 
                  channel.emergency ? 'bg-accent-danger/20 text-accent-danger' :
                  'bg-secondary/20 text-secondary'
                }`}>
                  <channel.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{channel.subtitle}</p>
                <p className="text-sm font-medium text-foreground mb-4">{channel.info}</p>
                <a 
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full ${
                    channel.emergency ? 'btn-panic' : channel.highlight ? 'btn-cyber' : ''
                  }`}
                >
                  <Button 
                    variant={channel.emergency ? "destructive" : channel.highlight ? "default" : "outline"}
                    className="w-full"
                  >
                    {channel.action}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="text-2xl">{t("contact.formTitle")}</CardTitle>
              <p className="text-muted-foreground">{t("contact.formSubtitle")}</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.fullName")}
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder={t("contact.fullNamePlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.corpEmail")}
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder={t("contact.corpEmailPlaceholder")} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.company")}
                    </label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} required placeholder={t("contact.companyPlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.position")}
                    </label>
                    <Input id="position" name="position" value={formData.position} onChange={handleChange} placeholder={t("contact.positionPlaceholder")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.phoneWhatsapp")}
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t("contact.phonePlaceholder")} />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.subject")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground"
                  >
                    <option value="">{t("contact.selectService")}</option>
                    {serviceOptions.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.messageLabel")}
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder={t("contact.messagePlaceholder")} />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    {t("contact.consentText").split("<link>")[0]}
                    <a href="/privacidade" className="text-primary hover:underline">
                      {t("contact.consentText").match(/<link>(.*?)<\/link>/)?.[1]}
                    </a>
                    {t("contact.consentText").split("</link>")[1]}
                  </label>
                </div>

                <Button type="submit" disabled={isSubmitting} className="btn-cyber w-full">
                  {isSubmitting ? t("contact.sending") : t("contact.sendMessage")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 text-primary" size={24} />
                  {t("contact.hoursTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">{t("contact.commercial")}</h4>
                  <p className="text-muted-foreground">{t("contact.commercialHours")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">{t("contact.whatsappHours")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-accent-danger">{t("contact.emergencyTitle")}</h4>
                  <p className="text-muted-foreground">{t("contact.emergencyDesc")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 text-primary" size={24} />
                  {t("contact.locationTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>{t("contact.locationText")}</strong><br />
                  {t("contact.locationDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="card-cyber border-secondary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-secondary mb-3">{t("contact.responseTitle")}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span className="font-medium">{t("contact.responseWhatsapp")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.commercialEmail")}:</span>
                    <span className="font-medium">{t("contact.responseEmail")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("services.requestProposal")}:</span>
                    <span className="font-medium">{t("contact.responseProposals")}</span>
                  </div>
                  <div className="flex justify-between text-accent-danger">
                    <span>{t("contact.emergencies")}:</span>
                    <span className="font-bold">{t("contact.responseIncidents")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
