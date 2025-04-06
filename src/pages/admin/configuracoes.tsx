
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { CompanySettings } from "@/components/settings/CompanySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { SystemSettings } from "@/components/settings/SystemSettings";

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
          <ProfileSettings />
        </TabsContent>
        
        <TabsContent value="empresa">
          <CompanySettings />
        </TabsContent>
        
        <TabsContent value="notificacoes">
          <NotificationSettings />
        </TabsContent>
        
        <TabsContent value="sistema">
          <SystemSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
