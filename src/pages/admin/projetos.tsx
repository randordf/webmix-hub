
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProjetosPage() {
  const projetos = [
    { id: 1, nome: "Site Corporativo", cliente: "Empresa ABC", status: "Em andamento", data: "10/04/2025" },
    { id: 2, nome: "E-commerce", cliente: "Loja XYZ", status: "Concluído", data: "02/04/2025" },
    { id: 3, nome: "Aplicativo Mobile", cliente: "Startup Tech", status: "Planejamento", data: "15/04/2025" },
    { id: 4, nome: "Portal Intranet", cliente: "Corporação Global", status: "Em andamento", data: "08/04/2025" },
  ];

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Projetos" 
        description="Gerencie todos os projetos da sua empresa em um só lugar."
      />
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar projetos..." className="pl-10" />
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto) => (
          <Card key={projeto.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle>{projeto.nome}</CardTitle>
                <Badge variant={
                  projeto.status === "Concluído" ? "default" : 
                  projeto.status === "Em andamento" ? "secondary" : "outline"
                }>
                  {projeto.status}
                </Badge>
              </div>
              <CardDescription>{projeto.cliente}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Última atualização: </span>
                  <span>{projeto.data}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 p-3">
              <div className="flex justify-end w-full gap-2">
                <Button variant="outline" size="sm">Ver detalhes</Button>
                <Button size="sm">Editar</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
