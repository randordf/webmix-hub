
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ConfiguracoesPage() {
  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Configurações" 
        description="Gerencie as configurações do sistema e da sua conta."
      />
      
      <Tabs defaultValue="perfil" className="mb-6">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="empresa">Empresa</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="sistema">Sistema</TabsTrigger>
        </TabsList>
        
        <TabsContent value="perfil">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>
                Atualize suas informações pessoais e profissionais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Seu nome" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sobrenome">Sobrenome</Label>
                  <Input id="sobrenome" placeholder="Seu sobrenome" defaultValue="WebMix" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" defaultValue="admin@webmix.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cargo">Cargo</Label>
                <Input id="cargo" placeholder="Seu cargo" defaultValue="Administrador" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>
                Gerencie sua senha e configurações de segurança.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha Atual</Label>
                <Input id="senha-atual" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova Senha</Label>
                <Input id="nova-senha" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                <Input id="confirmar-senha" type="password" />
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Autenticação de dois fatores</Label>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança à sua conta.
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Atualizar Senha</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="empresa">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
              <CardDescription>
                Atualize as informações da sua empresa.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="empresa-nome">Nome da Empresa</Label>
                <Input id="empresa-nome" placeholder="Nome da sua empresa" defaultValue="WebMix Hub" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa-site">Website</Label>
                <Input id="empresa-site" placeholder="https://" defaultValue="https://webmix.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa-telefone">Telefone</Label>
                  <Input id="empresa-telefone" placeholder="Telefone" defaultValue="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa-cnpj">CNPJ</Label>
                  <Input id="empresa-cnpj" placeholder="CNPJ" defaultValue="00.000.000/0001-00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa-endereco">Endereço</Label>
                <Input id="empresa-endereco" placeholder="Endereço" defaultValue="Av. Paulista, 1000" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa-cidade">Cidade</Label>
                  <Input id="empresa-cidade" placeholder="Cidade" defaultValue="São Paulo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa-estado">Estado</Label>
                  <Select defaultValue="SP">
                    <SelectTrigger id="empresa-estado">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa-cep">CEP</Label>
                  <Input id="empresa-cep" placeholder="CEP" defaultValue="01310-100" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notificacoes">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>
                Escolha como e quando deseja receber notificações.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email de Novos Projetos</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações quando novos projetos forem criados.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Comentários em Projetos</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações quando houver novos comentários.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Atualizações de Status</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações quando o status de um projeto mudar.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Newsletter Mensal</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba nosso relatório mensal de desempenho.
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="sistema">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Aparência do Sistema</CardTitle>
                <CardDescription>
                  Personalize a aparência do sistema.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tema">Tema</Label>
                  <Select defaultValue="light">
                    <SelectTrigger id="tema">
                      <SelectValue placeholder="Selecione um tema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Claro</SelectItem>
                      <SelectItem value="dark">Escuro</SelectItem>
                      <SelectItem value="system">Sistema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="density">Densidade da Interface</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger id="density">
                      <SelectValue placeholder="Selecione a densidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compact">Compacta</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="comfortable">Confortável</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Aplicar</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Configurações Avançadas</CardTitle>
                <CardDescription>
                  Opções avançadas do sistema.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo de Desenvolvedor</Label>
                    <p className="text-sm text-muted-foreground">
                      Ativa recursos avançados para desenvolvedores.
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo de Cache Agressivo</Label>
                    <p className="text-sm text-muted-foreground">
                      Melhora o desempenho, mas pode mostrar dados desatualizados.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Logs Detalhados</Label>
                    <p className="text-sm text-muted-foreground">
                      Registra informações detalhadas sobre ações do sistema.
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Redefinir para Padrões</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
