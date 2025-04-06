
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Company form schema
const companyFormSchema = z.object({
  name: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres"),
  website: z.string().url("URL inválida").or(z.literal("")),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 caracteres"),
  cnpj: z.string().min(14, "CNPJ inválido"),
  address: z.string().min(5, "Endereço deve ter pelo menos 5 caracteres"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  state: z.string().min(2, "Estado é obrigatório"),
  zipCode: z.string().min(8, "CEP inválido"),
});

type CompanyFormValues = z.infer<typeof companyFormSchema>;

export function CompanySettings() {
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      name: "WebMix Hub",
      website: "https://webmix.com",
      phone: "(11) 99999-9999",
      cnpj: "00.000.000/0001-00",
      address: "Av. Paulista, 1000",
      city: "São Paulo",
      state: "SP",
      zipCode: "01310-100",
    },
  });

  const onSubmit = (data: CompanyFormValues) => {
    toast.success("Informações da empresa atualizadas com sucesso!");
    console.log("Company form data:", data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações da Empresa</CardTitle>
        <CardDescription>
          Atualize as informações da sua empresa.
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Empresa</Label>
            <Input 
              id="name" 
              {...form.register("name")} 
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input 
              id="website" 
              placeholder="https://" 
              {...form.register("website")} 
            />
            {form.formState.errors.website && (
              <p className="text-sm text-red-500">{form.formState.errors.website.message}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input 
                id="phone" 
                {...form.register("phone")} 
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input 
                id="cnpj" 
                {...form.register("cnpj")} 
              />
              {form.formState.errors.cnpj && (
                <p className="text-sm text-red-500">{form.formState.errors.cnpj.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Input 
              id="address" 
              {...form.register("address")} 
            />
            {form.formState.errors.address && (
              <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Cidade</Label>
              <Input 
                id="city" 
                {...form.register("city")} 
              />
              {form.formState.errors.city && (
                <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">Estado</Label>
              <Select 
                defaultValue={form.getValues("state")}
                onValueChange={(value) => form.setValue("state", value, { shouldValidate: true })}
              >
                <SelectTrigger id="state">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                  <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.state && (
                <p className="text-sm text-red-500">{form.formState.errors.state.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">CEP</Label>
              <Input 
                id="zipCode" 
                {...form.register("zipCode")} 
              />
              {form.formState.errors.zipCode && (
                <p className="text-sm text-red-500">{form.formState.errors.zipCode.message}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            disabled={!form.formState.isDirty}
          >
            Salvar Alterações
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
