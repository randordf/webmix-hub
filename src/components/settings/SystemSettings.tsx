
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Appearance form schema
const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  density: z.enum(["compact", "normal", "comfortable"]),
});

// Advanced settings schema
const advancedSettingsFormSchema = z.object({
  developerMode: z.boolean().default(false),
  aggressiveCache: z.boolean().default(true),
  detailedLogs: z.boolean().default(false),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;
type AdvancedSettingsFormValues = z.infer<typeof advancedSettingsFormSchema>;

export function SystemSettings() {
  // Appearance form
  const appearanceForm = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: "light",
      density: "normal",
    },
  });

  // Advanced settings form
  const advancedSettingsForm = useForm<AdvancedSettingsFormValues>({
    resolver: zodResolver(advancedSettingsFormSchema),
    defaultValues: {
      developerMode: false,
      aggressiveCache: true,
      detailedLogs: false,
    },
  });

  const onAppearanceSubmit = (data: AppearanceFormValues) => {
    toast.success("Configurações de aparência aplicadas!");
    console.log("Appearance form data:", data);
  };

  const onAdvancedSettingsReset = () => {
    advancedSettingsForm.reset({
      developerMode: false,
      aggressiveCache: true,
      detailedLogs: false,
    });
    toast.success("Configurações avançadas redefinidas para padrões!");
  };

  const onAdvancedSettingsSubmit = (data: AdvancedSettingsFormValues) => {
    toast.success("Configurações avançadas salvas!");
    console.log("Advanced settings form data:", data);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Aparência do Sistema</CardTitle>
          <CardDescription>
            Personalize a aparência do sistema.
          </CardDescription>
        </CardHeader>
        <form onSubmit={appearanceForm.handleSubmit(onAppearanceSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Tema</Label>
              <Select 
                defaultValue={appearanceForm.getValues("theme")}
                onValueChange={(value: "light" | "dark" | "system") => {
                  appearanceForm.setValue("theme", value, { shouldValidate: true, shouldDirty: true });
                }}
              >
                <SelectTrigger id="theme">
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
              <Select 
                defaultValue={appearanceForm.getValues("density")}
                onValueChange={(value: "compact" | "normal" | "comfortable") => {
                  appearanceForm.setValue("density", value, { shouldValidate: true, shouldDirty: true });
                }}
              >
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
            <Button 
              type="submit" 
              disabled={!appearanceForm.formState.isDirty}
            >
              Aplicar
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Configurações Avançadas</CardTitle>
          <CardDescription>
            Opções avançadas do sistema.
          </CardDescription>
        </CardHeader>
        <form onSubmit={advancedSettingsForm.handleSubmit(onAdvancedSettingsSubmit)}>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Modo de Desenvolvedor</Label>
                <p className="text-sm text-muted-foreground">
                  Ativa recursos avançados para desenvolvedores.
                </p>
              </div>
              <Switch 
                checked={advancedSettingsForm.watch("developerMode")}
                onCheckedChange={(checked) => {
                  advancedSettingsForm.setValue("developerMode", checked, { shouldDirty: true });
                }}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Modo de Cache Agressivo</Label>
                <p className="text-sm text-muted-foreground">
                  Melhora o desempenho, mas pode mostrar dados desatualizados.
                </p>
              </div>
              <Switch 
                checked={advancedSettingsForm.watch("aggressiveCache")}
                onCheckedChange={(checked) => {
                  advancedSettingsForm.setValue("aggressiveCache", checked, { shouldDirty: true });
                }}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Logs Detalhados</Label>
                <p className="text-sm text-muted-foreground">
                  Registra informações detalhadas sobre ações do sistema.
                </p>
              </div>
              <Switch 
                checked={advancedSettingsForm.watch("detailedLogs")}
                onCheckedChange={(checked) => {
                  advancedSettingsForm.setValue("detailedLogs", checked, { shouldDirty: true });
                }}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onAdvancedSettingsReset}
            >
              Redefinir para Padrões
            </Button>
            <Button 
              type="submit" 
              disabled={!advancedSettingsForm.formState.isDirty}
            >
              Salvar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
