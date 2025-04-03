
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function AnalyticsPage() {
  const visitasData = [
    { name: "Jan", visitas: 4000, conversoes: 2400 },
    { name: "Fev", visitas: 3000, conversoes: 1398 },
    { name: "Mar", visitas: 2000, conversoes: 9800 },
    { name: "Abr", visitas: 2780, conversoes: 3908 },
    { name: "Mai", visitas: 1890, conversoes: 4800 },
    { name: "Jun", visitas: 2390, conversoes: 3800 },
    { name: "Jul", visitas: 3490, conversoes: 4300 },
  ];

  const projetosData = [
    { name: "Em andamento", value: 4, color: "#2563EB" },
    { name: "Concluídos", value: 8, color: "#16A34A" },
    { name: "Planejados", value: 2, color: "#D97706" },
    { name: "Em pausa", value: 1, color: "#DC2626" },
  ];

  const clientesData = [
    { name: "Norte", ativos: 12, novos: 4 },
    { name: "Nordeste", ativos: 19, novos: 7 },
    { name: "Centro-Oeste", ativos: 8, novos: 2 },
    { name: "Sudeste", ativos: 32, novos: 11 },
    { name: "Sul", ativos: 15, novos: 5 },
  ];

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Analytics" 
        description="Acompanhe métricas e desempenho de projetos e clientes."
      />

      <Tabs defaultValue="visao-geral" className="mb-6">
        <TabsList className="grid grid-cols-3 w-[400px] mb-6">
          <TabsTrigger value="visao-geral">
            <LineChart className="h-4 w-4 mr-2" />
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="projetos">
            <PieChart className="h-4 w-4 mr-2" />
            Projetos
          </TabsTrigger>
          <TabsTrigger value="clientes">
            <BarChart className="h-4 w-4 mr-2" />
            Clientes
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="visao-geral">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Projetos Ativos</CardDescription>
                <CardTitle className="text-3xl">15</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Clientes</CardDescription>
                <CardTitle className="text-3xl">86</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Taxa de Conversão</CardDescription>
                <CardTitle className="text-3xl">24.8%</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Receita Mensal</CardDescription>
                <CardTitle className="text-3xl">R$ 42.5K</CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitas vs Conversões</CardTitle>
                <CardDescription>Últimos 7 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={visitasData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="visitas" stroke="#2563EB" fill="#3B82F6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="conversoes" stroke="#16A34A" fill="#22C55E" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="projetos">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Status dos Projetos</CardTitle>
                  <CardDescription>Distribuição atual</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={projetosData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projetosData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance por Projeto</CardTitle>
                  <CardDescription>Tempo e Orçamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    {/* Gráficos adicionais ou tabelas de projetos poderiam ir aqui */}
                    <div className="h-full flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-muted-foreground text-center">
                        Gráfico detalhado de performance de projetos <br/>
                        (Personalizado de acordo com as métricas desejadas)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clientes">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição de Clientes por Região</CardTitle>
              <CardDescription>Clientes ativos e novos por região</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RechartsBarChart
                  data={clientesData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ativos" fill="#3B82F6" name="Clientes Ativos" />
                  <Bar dataKey="novos" fill="#22C55E" name="Novos Clientes" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
