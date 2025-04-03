
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, LayoutTemplate } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TemplatesPage() {
  const templates = [
    { id: 1, nome: "Site Corporativo", categoria: "Website", usos: 12 },
    { id: 2, nome: "E-commerce Básico", categoria: "E-commerce", usos: 8 },
    { id: 3, nome: "Blog Profissional", categoria: "Blog", usos: 15 },
    { id: 4, nome: "Landing Page Produto", categoria: "Landing Page", usos: 6 },
    { id: 5, nome: "Dashboard Administrativo", categoria: "Dashboard", usos: 4 },
    { id: 6, nome: "Portfólio Criativo", categoria: "Portfólio", usos: 9 },
  ];

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Templates" 
        description="Gerencie e crie templates para acelerar o desenvolvimento de projetos."
      />
      
      <Tabs defaultValue="todos" className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
            <TabsTrigger value="landing">Landing Pages</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2 items-center">
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar templates..." className="pl-10" />
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Novo Template
            </Button>
          </div>
        </div>

        <TabsContent value="todos">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.nome}</CardTitle>
                    <Badge>{template.categoria}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                    <LayoutTemplate className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    Utilizado em {template.usos} projetos
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" size="sm">Visualizar</Button>
                  <Button size="sm">Usar Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="websites">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.filter(t => t.categoria === "Website").map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{template.nome}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                    <LayoutTemplate className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    Utilizado em {template.usos} projetos
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" size="sm">Visualizar</Button>
                  <Button size="sm">Usar Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Outros TabsContent semelhantes para as outras categorias */}
      </Tabs>
    </div>
  );
}
