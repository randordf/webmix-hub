
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, BarChart2, Clock, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  // Dados de exemplo para o dashboard
  const projetosRecentes = [
    { id: 1, nome: "Site Corporativo", cliente: "Empresa ABC", status: "Em andamento", data: "10/04/2025" },
    { id: 2, nome: "E-commerce", cliente: "Loja XYZ", status: "Concluído", data: "02/04/2025" },
    { id: 3, nome: "Portal Intranet", cliente: "Corporação Global", status: "Em andamento", data: "08/04/2025" },
  ];

  const proximasReuniao = [
    { id: 1, titulo: "Kickoff Projeto B2B", data: "04/04/2025", hora: "14:00", cliente: "Tech Solutions" },
    { id: 2, titulo: "Revisão de Wireframes", data: "05/04/2025", hora: "10:30", cliente: "Empresa ABC" },
  ];

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Dashboard" 
        description="Bem-vindo ao painel administrativo do WebMix Hub."
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2 desde o último mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12 desde o último mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +4% desde o último mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Horas Trabalhadas</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320h</div>
            <p className="text-xs text-muted-foreground mt-1">
              +24h desde a semana passada
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <div>
              <CardTitle>Projetos Recentes</CardTitle>
              <CardDescription>Últimas atualizações de projetos</CardDescription>
            </div>
            <Link to="/admin/projetos">
              <Button variant="ghost" size="sm" className="gap-1">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projetosRecentes.map((projeto) => (
                <div key={projeto.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{projeto.nome}</p>
                    <p className="text-sm text-muted-foreground">{projeto.cliente}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{projeto.status}</p>
                    <p className="text-sm text-muted-foreground">{projeto.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <div>
              <CardTitle>Próximas Reuniões</CardTitle>
              <CardDescription>Agenda da semana</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              <CalendarDays className="h-4 w-4" />
              Calendário
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {proximasReuniao.map((reuniao) => (
                <div key={reuniao.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
                  <div className="rounded-lg border bg-muted px-3 py-2 text-center">
                    <span className="text-xs">{reuniao.data.split('/')[0]}/{reuniao.data.split('/')[1]}</span>
                    <p className="text-lg font-medium">{reuniao.hora}</p>
                  </div>
                  <div>
                    <p className="font-medium">{reuniao.titulo}</p>
                    <p className="text-sm text-muted-foreground">Cliente: {reuniao.cliente}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
