
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CompanySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações da Empresa</CardTitle>
        <CardDescription>
          Atualize as informações da sua empresa.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="empresa-nome">Nome da Empresa</Label>
          <Input id="empresa-nome" placeholder="Nome da sua empresa" defaultValue="WebMix Hub" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa-site">Website</Label>
          <Input id="empresa-site" placeholder="https://" defaultValue="https://webmix.com" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="empresa-telefone">Telefone</Label>
            <Input id="empresa-telefone" placeholder="Telefone" defaultValue="(11) 99999-9999" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa-cnpj">CNPJ</Label>
            <Input id="empresa-cnpj" placeholder="CNPJ" defaultValue="00.000.000/0001-00" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa-endereco">Endereço</Label>
          <Input id="empresa-endereco" placeholder="Endereço" defaultValue="Av. Paulista, 1000" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="empresa-cidade">Cidade</Label>
            <Input id="empresa-cidade" placeholder="Cidade" defaultValue="São Paulo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa-estado">Estado</Label>
            <Select defaultValue="SP">
              <SelectTrigger id="empresa-estado">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SP">São Paulo</SelectItem>
                <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                <SelectItem value="MG">Minas Gerais</SelectItem>
                <SelectItem value="RS">Rio Grande do Sul</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa-cep">CEP</Label>
            <Input id="empresa-cep" placeholder="CEP" defaultValue="01310-100" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Salvar Alterações</Button>
      </CardFooter>
    </Card>
  );
}
