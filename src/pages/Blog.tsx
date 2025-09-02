import { Calendar, Clock, ArrowRight, User, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  // Posts de exemplo - em uma implementação real, estes viriam de um CMS ou API
  const featuredPost = {
    id: 1,
    title: "Zero Trust: Implementação Prática em Ambientes Cloud",
    excerpt: "Guia completo para implementar arquitetura Zero Trust em infraestruturas AWS, Azure e GCP, com casos reais de sucesso e ROI comprovado.",
    content: `# Zero Trust: Implementação Prática em Ambientes Cloud

A arquitetura Zero Trust tem se tornado cada vez mais essencial para organizações que operam em ambientes cloud...`,
    author: "João Silva",
    authorRole: "Founder & CEO",
    date: "2024-02-15",
    readTime: "8 min",
    category: "Cloud Security",
    tags: ["Zero Trust", "Cloud Security", "AWS", "Azure"],
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "LGPD e Cybersecurity: Compliance Técnica na Prática",
      excerpt: "Como implementar controles técnicos de segurança que atendam aos requisitos da LGPD, com templates e checklists práticos.",
      author: "Carlos Oliveira",
      authorRole: "vCISO Lead", 
      date: "2024-02-10",
      readTime: "6 min",
      category: "Compliance",
      tags: ["LGPD", "Privacy", "Compliance", "Data Protection"]
    },
    {
      id: 3,
      title: "SOC Metrics: KPIs que o Board Precisa Ver",
      excerpt: "Métricas executivas para demonstrar o valor de um SOC, incluindo cálculos de ROI e templates de apresentação para diretoria.",
      author: "Maria Santos",
      authorRole: "Head of SOC",
      date: "2024-02-05",
      readTime: "10 min",
      category: "SOC",
      tags: ["SOC", "Metrics", "KPI", "Executive"]
    },
    {
      id: 4,
      title: "Pentest Report: Do Técnico ao Executivo",
      excerpt: "Como transformar achados técnicos de pentest em relatórios que geram ação do board, com exemplos práticos de ROI de remediação.",
      author: "Ana Costa",
      authorRole: "Security Architect",
      date: "2024-01-30",
      readTime: "7 min",
      category: "Penetration Testing",
      tags: ["Pentest", "Reporting", "Risk Management"]
    },
    {
      id: 5,
      title: "DevSecOps: Segurança na Pipeline CI/CD",
      excerpt: "Implementação de controles de segurança automatizados em pipelines DevOps, com ferramentas open-source e exemplos práticos.",
      author: "Ana Costa",
      authorRole: "Security Architect",
      date: "2024-01-25",
      readTime: "12 min",
      category: "DevSecOps",
      tags: ["DevSecOps", "CI/CD", "Automation", "SAST"]
    },
    {
      id: 6,
      title: "Incident Response: Playbook para Ransomware",
      excerpt: "Guia step-by-step para resposta a incidentes de ransomware, com templates de comunicação e checklist de contenção.",
      author: "Maria Santos",
      authorRole: "Head of SOC",
      date: "2024-01-20",
      readTime: "15 min",
      category: "Incident Response",
      tags: ["Incident Response", "Ransomware", "Playbook", "Crisis Management"]
    }
  ];

  const categories = [
    "Todos",
    "Penetration Testing", 
    "SOC",
    "Cloud Security",
    "Compliance",
    "DevSecOps",
    "Incident Response"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Blog ProHack</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Insights técnicos e estratégicos sobre cybersecurity. 
            Conteúdo prático de <span className="text-primary font-semibold">especialistas seniores</span> para 
            CTOs, CISOs e profissionais de segurança.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <Input 
              placeholder="Buscar artigos, tags ou tópicos..." 
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "btn-cyber" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Card className="card-cyber mb-16">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8">
                <Badge className="mb-4 bg-primary/10 text-primary">Artigo em Destaque</Badge>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="btn-cyber">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>

              <div className="bg-gradient-primary rounded-r-2xl p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl mb-4">🛡️</div>
                  <p className="text-lg font-semibold">Zero Trust Architecture</p>
                  <p className="text-sm opacity-90">Implementação Prática</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <Card key={post.id} className="card-cyber">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    <div className="font-medium">{post.author}</div>
                    <div>{new Date(post.date).toLocaleDateString('pt-BR')}</div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Ler mais
                    <ArrowRight className="ml-1" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <Card className="card-cyber">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Newsletter ProHack Security Insights
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Receba semanalmente insights exclusivos, análises de ameaças emergentes 
              e guias práticos de implementação. Conteúdo curado por nossos especialistas seniores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="seu@email.com.br" 
                className="flex-1"
              />
              <Button className="btn-cyber">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Sem spam. Cancele quando quiser. Conforme nossa{" "}
              <a href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Artigos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;