
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

// Notification form schema
const notificationFormSchema = z.object({
  newProjects: z.boolean().default(true),
  projectComments: z.boolean().default(true),
  statusUpdates: z.boolean().default(true),
  monthlyNewsletter: z.boolean().default(false),
});

type NotificationFormValues = z.infer<typeof notificationFormSchema>;

export function NotificationSettings() {
  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      newProjects: true,
      projectComments: true,
      statusUpdates: true,
      monthlyNewsletter: false,
    },
  });

  const onSubmit = (data: NotificationFormValues) => {
    toast.success("Preferências de notificação salvas com sucesso!");
    console.log("Notification form data:", data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferências de Notificação</CardTitle>
        <CardDescription>
          Escolha como e quando deseja receber notificações.
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email de Novos Projetos</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações quando novos projetos forem criados.
                </p>
              </div>
              <Switch 
                checked={form.watch("newProjects")}
                onCheckedChange={(checked) => {
                  form.setValue("newProjects", checked, { shouldDirty: true });
                }}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Comentários em Projetos</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações quando houver novos comentários.
                </p>
              </div>
              <Switch 
                checked={form.watch("projectComments")}
                onCheckedChange={(checked) => {
                  form.setValue("projectComments", checked, { shouldDirty: true });
                }}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Atualizações de Status</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações quando o status de um projeto mudar.
                </p>
              </div>
              <Switch 
                checked={form.watch("statusUpdates")}
                onCheckedChange={(checked) => {
                  form.setValue("statusUpdates", checked, { shouldDirty: true });
                }}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Newsletter Mensal</Label>
                <p className="text-sm text-muted-foreground">
                  Receba nosso relatório mensal de desempenho.
                </p>
              </div>
              <Switch 
                checked={form.watch("monthlyNewsletter")}
                onCheckedChange={(checked) => {
                  form.setValue("monthlyNewsletter", checked, { shouldDirty: true });
                }}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            disabled={!form.formState.isDirty}
          >
            Salvar Preferências
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
