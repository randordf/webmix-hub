
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  return (
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
  );
}
