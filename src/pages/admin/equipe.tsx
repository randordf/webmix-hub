
import React from "react";
import { AdminPageHeader } from "@/components/ui/admin-page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EquipePage() {
  const membros = [
    { id: 1, nome: "Carlos Oliveira", cargo: "CEO / Fundador", email: "carlos@webmix.com", avatar: "", projetos: 8, status: "online" },
    { id: 2, nome: "Ana Silva", cargo: "Desenvolvedora Frontend", email: "ana@webmix.com", avatar: "", projetos: 5, status: "online" },
    { id: 3, nome: "Lucas Santos", cargo: "Designer UI/UX", email: "lucas@webmix.com", avatar: "", projetos: 6, status: "offline" },
    { id: 4, nome: "Mariana Costa", cargo: "Desenvolvedora Backend", email: "mariana@webmix.com", avatar: "", projetos: 4, status: "online" },
    { id: 5, nome: "Rafael Almeida", cargo: "Gerente de Projetos", email: "rafael@webmix.com", avatar: "", projetos: 10, status: "offline" },
  ];

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }

  return (
    <div className="container mx-auto p-6">
      <AdminPageHeader 
        title="Equipe" 
        description="Gerencie os membros da sua equipe e suas permissões."
      />
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar membros..." className="pl-10" />
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Membro
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <h3 className="font-semibold">Membros da Equipe</h3>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Membro</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Projetos</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {membros.map((membro) => (
                <TableRow key={membro.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={membro.avatar} />
                        <AvatarFallback>{getInitials(membro.nome)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{membro.nome}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{membro.cargo}</TableCell>
                  <TableCell>{membro.email}</TableCell>
                  <TableCell>{membro.projetos}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${membro.status === "online" ? "bg-green-500" : "bg-gray-300"}`}></span>
                      <span className="capitalize">{membro.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Perfil</Button>
                      <Button variant="ghost" size="sm">Editar</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
