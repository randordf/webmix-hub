
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

// Profile form schema
const profileFormSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  position: z.string().min(2, "Cargo deve ter pelo menos 2 caracteres"),
});

// Security form schema
const securityFormSchema = z.object({
  currentPassword: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  newPassword: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string(),
  twoFactorEnabled: z.boolean().default(false),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type SecurityFormValues = z.infer<typeof securityFormSchema>;

export function ProfileSettings() {
  // Profile form
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "Admin",
      lastName: "WebMix",
      email: "admin@webmix.com",
      position: "Administrador",
    },
  });

  // Security form
  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      twoFactorEnabled: false,
    },
  });

  // Handle profile form submission
  const onProfileSubmit = (data: ProfileFormValues) => {
    toast.success("Perfil atualizado com sucesso!");
    console.log("Profile form data:", data);
  };

  // Handle security form submission
  const onSecuritySubmit = (data: SecurityFormValues) => {
    toast.success("Configurações de segurança atualizadas com sucesso!");
    console.log("Security form data:", data);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Informações do Perfil</CardTitle>
          <CardDescription>
            Atualize suas informações pessoais e profissionais.
          </CardDescription>
        </CardHeader>
        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input 
                  id="firstName" 
                  {...profileForm.register("firstName")} 
                />
                {profileForm.formState.errors.firstName && (
                  <p className="text-sm text-red-500">{profileForm.formState.errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input 
                  id="lastName" 
                  {...profileForm.register("lastName")} 
                />
                {profileForm.formState.errors.lastName && (
                  <p className="text-sm text-red-500">{profileForm.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                {...profileForm.register("email")} 
              />
              {profileForm.formState.errors.email && (
                <p className="text-sm text-red-500">{profileForm.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Cargo</Label>
              <Input 
                id="position" 
                {...profileForm.register("position")} 
              />
              {profileForm.formState.errors.position && (
                <p className="text-sm text-red-500">{profileForm.formState.errors.position.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              disabled={!profileForm.formState.isDirty}
            >
              Salvar Alterações
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Segurança</CardTitle>
          <CardDescription>
            Gerencie sua senha e configurações de segurança.
          </CardDescription>
        </CardHeader>
        <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Senha Atual</Label>
              <Input 
                id="currentPassword" 
                type="password" 
                {...securityForm.register("currentPassword")} 
              />
              {securityForm.formState.errors.currentPassword && (
                <p className="text-sm text-red-500">{securityForm.formState.errors.currentPassword.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nova Senha</Label>
              <Input 
                id="newPassword" 
                type="password" 
                {...securityForm.register("newPassword")} 
              />
              {securityForm.formState.errors.newPassword && (
                <p className="text-sm text-red-500">{securityForm.formState.errors.newPassword.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                {...securityForm.register("confirmPassword")} 
              />
              {securityForm.formState.errors.confirmPassword && (
                <p className="text-sm text-red-500">{securityForm.formState.errors.confirmPassword.message}</p>
              )}
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticação de dois fatores</Label>
                <p className="text-sm text-muted-foreground">
                  Adicione uma camada extra de segurança à sua conta.
                </p>
              </div>
              <Switch 
                checked={securityForm.watch("twoFactorEnabled")}
                onCheckedChange={(checked) => {
                  securityForm.setValue("twoFactorEnabled", checked);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              disabled={!securityForm.formState.isDirty}
            >
              Atualizar Senha
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
