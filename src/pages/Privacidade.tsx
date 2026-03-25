import { Shield, Eye, Lock, FileText, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema } from "@/lib/seo-schemas";

const Privacidade = () => {
  return (
    <div className="min-h-screen py-20">
      <SEOHead
        title="Política de Privacidade & LGPD | ProHack"
        description="Política de privacidade e conformidade LGPD da ProHack. Transparência sobre coleta, uso e proteção de dados pessoais."
        keywords="política privacidade, LGPD, proteção dados, privacidade cybersecurity"
        noindex={false}
        jsonLd={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Privacidade", url: "/privacidade" }])}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Política de Privacidade & LGPD</h1>
          <p className="text-xl text-muted-foreground">
            Transparência total sobre como tratamos seus dados pessoais, 
            em conformidade com a <span className="text-primary font-semibold">Lei Geral de Proteção de Dados (LGPD)</span>.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Última atualização:</strong> 15 de dezembro de 2024
          </p>
        </div>

        {/* Quick Links */}
        <Card className="card-cyber mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Navegação Rápida</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <a href="#dados-coletados" className="text-primary hover:underline">Dados Coletados</a>
              <a href="#finalidade" className="text-primary hover:underline">Finalidade</a>
              <a href="#base-legal" className="text-primary hover:underline">Base Legal</a>
              <a href="#compartilhamento" className="text-primary hover:underline">Compartilhamento</a>
              <a href="#retencao" className="text-primary hover:underline">Retenção</a>
              <a href="#direitos" className="text-primary hover:underline">Seus Direitos</a>
              <a href="#seguranca" className="text-primary hover:underline">Segurança</a>
              <a href="#cookies" className="text-primary hover:underline">Cookies</a>
              <a href="#contato" className="text-primary hover:underline">Contato DPO</a>
            </div>
          </CardContent>
        </Card>

        {/* Dados Coletados */}
        <section id="dados-coletados" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-3 text-primary" size={24} />
                1. Dados Pessoais Coletados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Dados de Identificação</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Nome completo</li>
                  <li>• E-mail corporativo</li>
                  <li>• Telefone/WhatsApp</li>
                  <li>• Empresa e cargo</li>
                  <li>• CPF (apenas para contratos)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Dados de Navegação</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Endereço IP</li>
                  <li>• Dados de cookies técnicos</li>
                  <li>• Informações do navegador</li>
                  <li>• Páginas visitadas e tempo de permanência</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Dados de Comunicação</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Conversas via WhatsApp</li>
                  <li>• E-mails trocados</li>
                  <li>• Gravações de chamadas (com consentimento)</li>
                  <li>• Documentos compartilhados</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Finalidade */}
        <section id="finalidade" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-3 text-secondary" size={24} />
                2. Finalidade do Tratamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Finalidades Comerciais</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Responder a solicitações de contato</li>
                    <li>• Elaborar propostas comerciais</li>
                    <li>• Agendar reuniões e calls</li>
                    <li>• Enviar newsletters (com opt-in)</li>
                    <li>• Suporte pré e pós-venda</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Finalidades Técnicas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Melhorar experiência do usuário</li>
                    <li>• Análise de performance do site</li>
                    <li>• Segurança e prevenção de fraudes</li>
                    <li>• Backup e recuperação de dados</li>
                    <li>• Cumprimento de obrigações legais</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Base Legal */}
        <section id="base-legal" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-3 text-primary" size={24} />
                3. Base Legal (Art. 7º LGPD)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold text-foreground">Finalidade</th>
                      <th className="text-left py-2 font-semibold text-foreground">Base Legal</th>
                      <th className="text-left py-2 font-semibold text-foreground">Fundamento</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2">Contato comercial</td>
                      <td className="py-2">Consentimento</td>
                      <td className="py-2">Art. 7º, I - Checkbox no formulário</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Execução de contratos</td>
                      <td className="py-2">Execução contratual</td>
                      <td className="py-2">Art. 7º, V - Prestação de serviços</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Newsletter</td>
                      <td className="py-2">Consentimento</td>
                      <td className="py-2">Art. 7º, I - Opt-in explícito</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Segurança do site</td>
                      <td className="py-2">Legítimo interesse</td>
                      <td className="py-2">Art. 7º, IX - Proteção de sistemas</td>
                    </tr>
                    <tr>
                      <td className="py-2">Obrigações fiscais</td>
                      <td className="py-2">Obrigação legal</td>
                      <td className="py-2">Art. 7º, II - Legislação tributária</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Compartilhamento */}
        <section id="compartilhamento" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-3 text-accent-warning" size={24} />
                4. Compartilhamento de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>A ProHack NÃO vende, aluga ou compartilha dados pessoais com terceiros para fins comerciais.</strong>
              </p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Compartilhamento Necessário</h4>
                <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Prestadores de serviço:</strong> AWS (hospedagem), Google Workspace (e-mail), apenas dados necessários</li>
                  <li>• <strong>Autoridades públicas:</strong> Quando exigido por lei ou ordem judicial</li>
                  <li>• <strong>Auditores externos:</strong> Para certificações ISO 27001, com acordos de confidencialidade</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Garantia:</strong> Todos os prestadores de serviço assinam Acordos de Processamento de Dados (DPA) 
                  em conformidade com a LGPD e mantêm certificações de segurança adequadas.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Retenção */}
        <section id="retencao" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle>5. Retenção de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold text-foreground">Tipo de Dado</th>
                      <th className="text-left py-2 font-semibold text-foreground">Período de Retenção</th>
                      <th className="text-left py-2 font-semibold text-foreground">Justificativa</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2">Dados de contato (leads)</td>
                      <td className="py-2">2 anos</td>
                      <td className="py-2">Follow-up comercial</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Dados contratuais</td>
                      <td className="py-2">5 anos</td>
                      <td className="py-2">Obrigações fiscais</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Newsletter</td>
                      <td className="py-2">Até descadastro</td>
                      <td className="py-2">Consentimento ativo</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Logs de segurança</td>
                      <td className="py-2">6 meses</td>
                      <td className="py-2">Investigações de incidentes</td>
                    </tr>
                    <tr>
                      <td className="py-2">Cookies técnicos</td>
                      <td className="py-2">12 meses</td>
                      <td className="py-2">Funcionalidade do site</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Direitos do Titular */}
        <section id="direitos" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle>6. Seus Direitos (Art. 18 LGPD)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Você tem os seguintes direitos garantidos pela LGPD:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Confirmação e Acesso</h4>
                      <p className="text-sm text-muted-foreground">Saber se tratamos seus dados e acessá-los</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Correção</h4>
                      <p className="text-sm text-muted-foreground">Corrigir dados incompletos ou desatualizados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Eliminação</h4>
                      <p className="text-sm text-muted-foreground">Exclusão de dados desnecessários ou excessivos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Portabilidade</h4>
                      <p className="text-sm text-muted-foreground">Receber seus dados em formato estruturado</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Revogação do Consentimento</h4>
                      <p className="text-sm text-muted-foreground">Retirar consentimento a qualquer momento</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Oposição</h4>
                      <p className="text-sm text-muted-foreground">Opor-se ao tratamento em casos específicos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Informação</h4>
                      <p className="text-sm text-muted-foreground">Conhecer entidades com quem compartilhamos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Revisão de Decisões</h4>
                      <p className="text-sm text-muted-foreground">Revisar decisões automatizadas</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Como exercer seus direitos:</strong> Entre em contato via e-mail dpo@prohack.com.br 
                  ou WhatsApp +55 11 99665-2416. Resposta garantida em até 15 dias.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Segurança */}
        <section id="seguranca" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-3 text-secondary" size={24} />
                7. Medidas de Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Como consultoria em cybersecurity, aplicamos as mais rigorosas medidas de proteção:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Controles Técnicos</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Criptografia AES-256 em repouso</li>
                    <li>• TLS 1.3 para dados em trânsito</li>
                    <li>• Autenticação multifator (MFA)</li>
                    <li>• Monitoramento 24/7 de acessos</li>
                    <li>• Backups criptografados</li>
                    <li>• Segregação de ambientes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Controles Organizacionais</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Políticas de privacidade internas</li>
                    <li>• Treinamento em LGPD para equipe</li>
                    <li>• Acordos de confidencialidade</li>
                    <li>• Auditoria de acessos</li>
                    <li>• Plano de resposta a incidentes</li>
                    <li>• Certificação ISO 27001</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookies */}
        <section id="cookies" className="mb-12">
          <Card className="card-cyber">
            <CardHeader>
              <CardTitle>8. Política de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold text-foreground">Tipo</th>
                      <th className="text-left py-2 font-semibold text-foreground">Finalidade</th>
                      <th className="text-left py-2 font-semibold text-foreground">Duração</th>
                      <th className="text-left py-2 font-semibold text-foreground">Consentimento</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2">Essenciais</td>
                      <td className="py-2">Funcionamento do site</td>
                      <td className="py-2">Sessão</td>
                      <td className="py-2">Não necessário</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Funcionalidade</td>
                      <td className="py-2">Preferências do usuário</td>
                      <td className="py-2">12 meses</td>
                      <td className="py-2">Implícito</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Analytics</td>
                      <td className="py-2">Métricas de uso (anonimizadas)</td>
                      <td className="py-2">24 meses</td>
                      <td className="py-2">Requerido</td>
                    </tr>
                    <tr>
                      <td className="py-2">Marketing</td>
                      <td className="py-2">Não utilizamos</td>
                      <td className="py-2">-</td>
                      <td className="py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Você pode gerenciar cookies através das configurações do seu navegador ou 
                através do banner de consentimento presente no site.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contato DPO */}
        <section id="contato" className="mb-12">
          <Card className="card-cyber border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-3 text-primary" size={24} />
                9. Encarregado de Dados (DPO)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para questões sobre tratamento de dados pessoais, exercício de direitos ou dúvidas sobre esta política:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground">E-mail DPO</h4>
                      <p className="text-sm text-muted-foreground">dpo@prohack.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">+55 11 99665-2416</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Prazo de Resposta</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Confirmação de recebimento: 24 horas</li>
                    <li>• Resposta completa: até 15 dias</li>
                    <li>• Solicitações complexas: até 30 dias</li>
                    <li>• Emergências: resposta imediata</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alterações */}
        <Card className="card-cyber">
          <CardHeader>
            <CardTitle>10. Alterações nesta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas 
              ou na legislação aplicável. Alterações substanciais serão comunicadas por:
            </p>
            
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Aviso destacado no site por 30 dias</li>
              <li>• E-mail para usuários cadastrados</li>
              <li>• Atualização da data no topo desta página</li>
            </ul>
            
            <div className="bg-primary/10 p-4 rounded-lg mt-4">
              <p className="text-sm text-foreground">
                <strong>Recomendação:</strong> Revise esta política periodicamente para se manter informado 
                sobre como protegemos seus dados pessoais.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacidade;