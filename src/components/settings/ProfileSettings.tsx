
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function ProfileSettings() {
  return (
    <>
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
    </>
  );
}
