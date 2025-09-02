import { Target, Shield, Users, Award, CheckCircle, ArrowRight, Brain, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Precisão Técnica",
      description: "Metodologia estruturada baseada em frameworks internacionais para resultados consistentes e auditáveis."
    },
    {
      icon: Brain,
      title: "Clareza Executiva",
      description: "Traduzimos riscos técnicos em impactos de negócio com métricas que o board entende e aceita."
    },
    {
      icon: Zap,
      title: "Agilidade na Resposta",
      description: "SLAs agressivos e processos otimizados para minimizar janelas de exposição e tempo de recuperação."
    },
    {
      icon: Heart,
      title: "Parceria de Longo Prazo",
      description: "Construímos relacionamentos duradouros focados no crescimento sustentável da segurança organizacional."
    }
  ];

  const team = [
    {
      name: "João Silva",
      role: "Founder & CEO",
      specialization: "Penetration Testing, Cloud Security",
      certifications: ["CISSP", "OSCP", "AWS Security"],
      bio: "15+ anos em cybersecurity, ex-consultor em Big4, especialista em testes de invasão e arquiteturas cloud.",
      avatar: "👤"
    },
    {
      name: "Maria Santos",
      role: "Head of SOC",
      specialization: "SOC Operations, Incident Response",
      certifications: ["GCIH", "GCFA", "SANS GIAC"],
      bio: "12+ anos em operações de segurança, ex-analista sênior em CSIRT governamental, especialista em resposta a incidentes.",
      avatar: "👩‍💻"
    },
    {
      name: "Carlos Oliveira", 
      role: "vCISO Lead",
      specialization: "Governance, Risk Management, Compliance",
      certifications: ["CISM", "CISA", "ISO 27001 LA"],
      bio: "18+ anos em governança de TI, ex-CISO de multinacional, especialista em compliance e gestão de riscos.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Costa",
      role: "Security Architect", 
      specialization: "DevSecOps, Cloud Security, Automation",
      certifications: ["CSSLP", "Kubernetes Security", "Terraform"],
      bio: "10+ anos em arquitetura de segurança, ex-engenheira em fintech unicórnio, especialista em DevSecOps e automação.",
      avatar: "👩‍🔬"
    }
  ];

  const differentials = [
    {
      title: "Métricas Executivas",
      description: "Todos os nossos entregáveis incluem KPIs e KRIs que demonstram ROI claro e facilitam apresentações ao board.",
      icon: Award
    },
    {
      title: "Tempo de Resposta",
      description: "SLAs agressivos com resposta < 1h para emergências e MTTR < 24h para vulnerabilidades críticas.",
      icon: Zap
    },
    {
      title: "Roadmap Estratégico",
      description: "Todo projeto inclui roadmap 90-180 dias com quick wins, initiatives táticas e visão estratégica.",
      icon: Target
    },
    {
      title: "Knowledge Transfer",
      description: "Capacitamos suas equipes internas através de mentoring estruturado e documentação técnica detalhada.",
      icon: Users
    }
  ];

  const stats = [
    { number: "50+", label: "Clientes Atendidos" },
    { number: "500+", label: "Pentests Realizados" },
    { number: "< 24h", label: "MTTR Médio" },
    { number: "95%", label: "Taxa de Retenção" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Sobre a ProHack</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Somos uma consultoria especializada em cybersecurity que combina <span className="text-primary font-semibold">
            precisão técnica com clareza executiva</span>, entregando resultados mensuráveis 
            que fortalecem tanto a postura de segurança quanto a credibilidade junto ao board.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-3 text-primary" size={24} />
                Nossa Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Elevar a maturidade de cybersecurity das organizações brasileiras através de 
                consultoria especializada que traduz complexidade técnica em valor de negócio, 
                permitindo que líderes tomem decisões informadas sobre investimentos em segurança.
              </p>
            </CardContent>
          </Card>

          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-3 text-secondary" size={24} />
                Nossa Visão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a consultoria de cybersecurity que melhor conecta excelência 
                técnica com resultados de negócio, sendo a primeira escolha de CTOs e CISOs que 
                buscam parceria estratégica de longo prazo.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground">
              Princípios que guiam cada projeto e relacionamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-service text-center">
                <CardContent className="p-0">
                  <div className="text-primary mb-4">
                    <value.icon size={32} />
                  </div>
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
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground">
              Especialistas seniores com experiência em empresas de diferentes portes e setores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-cyber">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.specialization}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {member.certifications.map((cert, idx) => (
                      <span key={idx} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Differentials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground">
              O que nos torna únicos no mercado de consultoria em cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <Card key={index} className="card-cyber">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      <differential.icon size={24} />
                    </div>
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

        {/* Certifications & Partnerships */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Certificações & Parcerias</CardTitle>
              <p className="text-muted-foreground">
                Mantemos as mais altas certificações técnicas e parcerias estratégicas
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Certificações Técnicas</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">CISSP, CISM, CISA</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">OSCP, GCIH, GCFA</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">AWS/Azure Security</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">Compliance</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">ISO 27001 Lead Auditor</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">NIST CSF Framework</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">LGPD Compliance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">Parcerias</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">AWS Partner Network</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">Microsoft Security Partner</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm">SANS Training Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* History Timeline */}
        <section className="mb-20">
          <Card className="card-cyber">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Nossa Jornada</CardTitle>
              <p className="text-muted-foreground">
                Marcos importantes na evolução da ProHack
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2020 - Fundação</h4>
                    <p className="text-sm text-muted-foreground">
                      Criação da ProHack com foco em testes de invasão para startups e scaleups brasileiras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2021 - Expansão de Serviços</h4>
                    <p className="text-sm text-muted-foreground">
                      Lançamento dos serviços de SOC-as-a-Service e vCISO para atender demandas de clientes em crescimento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2022 - Certificações</h4>
                    <p className="text-sm text-muted-foreground">
                      Obtenção de certificações ISO 27001 e parcerias estratégicas com provedores cloud.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2023 - Reconhecimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Primeira consultoria brasileira a atingir MTTR &lt; 24h em 95% dos casos, com 50+ clientes ativos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent-warning rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2024 - Inovação</h4>
                    <p className="text-sm text-muted-foreground">
                      Lançamento de metodologia proprietária de "Executive Cybersecurity Metrics" e expansão nacional.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="card-cyber p-12">
            <h2 className="heading-md mb-4">Vamos Construir Juntos?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Estamos sempre em busca de organizações que valorizam excelência técnica 
              e querem elevar sua maturidade de cybersecurity com parceria estratégica de longo prazo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber text-lg px-8 py-4">
                Iniciar Conversa Estratégica
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Conhecer Nossa Metodologia
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sobre;