import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MessageSquare, MapPin, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
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
        title: "Consentimento necessário",
        description: "Por favor, aceite nossa política de privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Aqui você integraria com sua API de e-mail (Resend, SMTP, etc.)
      // Por enquanto, vamos simular o envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas. Para urgências, use nosso WhatsApp."
      });
      
      // Reset form
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
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactChannels = [
    {
      icon: MessageSquare,
      title: "WhatsApp 24/7",
      subtitle: "Resposta imediata",
      info: "+55 11 99665-2416",
      action: "Abrir WhatsApp",
      link: whatsappUrl,
      highlight: true
    },
    {
      icon: Mail,
      title: "E-mail Comercial",
      subtitle: "Propostas e parcerias",
      info: "contato@prohack.com.br",
      action: "Enviar E-mail",
      link: "mailto:contato@prohack.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      subtitle: "Horário comercial",
      info: "+55 11 99665-2416",
      action: "Ligar",
      link: "tel:+5511996652416"
    },
    {
      icon: AlertTriangle,
      title: "Emergências",
      subtitle: "Incidentes de segurança",
      info: "Botão de Pânico",
      action: "Socorro Imediato",
      link: "https://wa.me/5511996652416?text=Tenho%20um%20incidente%20de%20seguran%C3%A7a%20e%20preciso%20de%20ajuda%20imediata.",
      emergency: true
    }
  ];

  const serviceOptions = [
    "Penetration Testing",
    "Gestão de Vulnerabilidades",
    "SOC - Monitoramento 24/7",
    "Resposta a Incidentes",
    "vCISO - Governança Estratégica",
    "Consultoria Especializada",
    "Assessment de Maturidade",
    "Outro - Especificar na mensagem"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para elevar a segurança da sua organização? 
            Nossa equipe de especialistas está disponível para uma conversa estratégica.
          </p>
        </div>

        {/* Contact Channels Grid */}
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
          {/* Contact Form */}
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="text-2xl">Formulário de Contato</CardTitle>
              <p className="text-muted-foreground">
                Preencha os dados abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail Corporativo *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@empresa.com.br"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Nome da empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                      Cargo
                    </label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="CTO, CISO, Gerente TI..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+55 11 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto / Serviço de Interesse *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground"
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Descrição do Projeto / Necessidade *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descreva brevemente sua necessidade, contexto da empresa, urgência, orçamento estimado, etc."
                  />
                </div>

                {/* LGPD Consent */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, consent: checked as boolean }))
                    }
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    Concordo com o tratamento dos meus dados pessoais conforme a{" "}
                    <a href="/privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o contato da ProHack para fins comerciais. *
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-cyber w-full"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Card */}
          <div className="space-y-8">
            <Card className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 text-primary" size={24} />
                  Horários de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Comercial</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">24 horas, 7 dias por semana</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-accent-danger">Emergências</h4>
                  <p className="text-muted-foreground">
                    Para incidentes de segurança, use o Botão de Pânico - resposta imediata
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 text-primary" size={24} />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>São Paulo - SP, Brasil</strong><br />
                  Atendemos todo território nacional remotamente.<br />
                  Presencial disponível para projetos na Grande São Paulo.
                </p>
                <p className="text-sm text-muted-foreground">
                  CNPJ: XX.XXX.XXX/XXXX-XX<br />
                  Inscrição Estadual: XXXXXXXXX
                </p>
              </CardContent>
            </Card>

            <Card className="card-cyber border-secondary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-secondary mb-3">Tempo de Resposta Garantido</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span className="font-medium">Imediato</span>
                  </div>
                  <div className="flex justify-between">
                    <span>E-mail comercial:</span>
                    <span className="font-medium">&lt; 24h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Propostas:</span>
                    <span className="font-medium">&lt; 48h</span>
                  </div>
                  <div className="flex justify-between text-accent-danger">
                    <span>Incidentes:</span>
                    <span className="font-bold">&lt; 1h</span>
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