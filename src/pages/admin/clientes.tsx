
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function ClientesPage() {
  const clientes = [
    { id: 1, nome: "Empresa ABC", contato: "João Silva", email: "joao@empresaabc.com", telefone: "(11) 98765-4321", status: "Ativo" },
    { id: 2, nome: "Loja XYZ", contato: "Maria Souza", email: "maria@lojaxyz.com", telefone: "(11) 91234-5678", status: "Ativo" },
    { id: 3, nome: "Startup Tech", contato: "Pedro Costa", email: "pedro@startuptech.com", telefone: "(21) 99876-5432", status: "Inativo" },
    { id: 4, nome: "Corporação Global", contato: "Ana Santos", email: "ana@corpglobal.com", telefone: "(31) 97654-3210", status: "Ativo" },
    { id: 5, nome: "Indústria Nacional", contato: "Carlos Oliveira", email: "carlos@indnacional.com", telefone: "(41) 98765-1234", status: "Ativo" },
  ];

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Clientes" 
        description="Gerencie todos os clientes da sua empresa."
      />
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar clientes..." className="pl-10" />
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <TableCell className="font-medium">{cliente.nome}</TableCell>
                <TableCell>{cliente.contato}</TableCell>
                <TableCell>{cliente.email}</TableCell>
                <TableCell>{cliente.telefone}</TableCell>
                <TableCell>
                  <Badge variant={cliente.status === "Ativo" ? "default" : "secondary"}>
                    {cliente.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Remover</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
