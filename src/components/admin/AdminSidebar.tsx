
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Home,
  Layers,
  Settings,
  Users,
  Package
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  isActive?: boolean;
  badge?: number;
}

const SidebarItem = ({ icon: Icon, title, href, isActive, badge }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-webmix-900",
        isActive ? "bg-webmix-900 text-webmix-200" : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1">{title}</span>
      {badge !== undefined && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-webmix-800 text-xs font-medium">
          {badge}
        </span>
      )}
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-sidebar">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/admin" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ee7e21ee-4232-4ad4-9db3-e61211740d07.png" 
            alt="WebMix Logo" 
            className="h-10"
          />
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <SidebarSection title="Geral">
          <SidebarItem 
            icon={Home} 
            title="Dashboard" 
            href="/admin"
            isActive={currentPath === "/admin"} 
          />
          <SidebarItem 
            icon={FileText} 
            title="Projetos" 
            href="/admin/projetos"
            isActive={currentPath.includes("/admin/projetos")}
            badge={3}
          />
          <SidebarItem 
            icon={Users} 
            title="Clientes" 
            href="/admin/clientes"
            isActive={currentPath.includes("/admin/clientes")} 
          />
        </SidebarSection>
        <SidebarSection title="Conteúdo">
          <SidebarItem 
            icon={Layers} 
            title="Templates" 
            href="/admin/templates"
            isActive={currentPath.includes("/admin/templates")} 
          />
        </SidebarSection>
        <SidebarSection title="Gerenciamento">
          <SidebarItem 
            icon={Users} 
            title="Equipe" 
            href="/admin/equipe"
            isActive={currentPath.includes("/admin/equipe")} 
          />
          <SidebarItem 
            icon={BarChart3} 
            title="Analytics" 
            href="/admin/analytics"
            isActive={currentPath.includes("/admin/analytics")} 
          />
          <SidebarItem 
            icon={Settings} 
            title="Configurações" 
            href="/admin/configuracoes"
            isActive={currentPath.includes("/admin/configuracoes")} 
          />
        </SidebarSection>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="rounded-lg bg-webmix-900/50 p-4">
          <h5 className="mb-2 font-medium">Acesso Premium</h5>
          <p className="mb-4 text-xs text-muted-foreground">
            Atualize para acessar recursos avançados e remover limitações.
          </p>
          <button className="w-full rounded bg-webmix-500 px-3 py-1 text-xs font-medium text-white hover:bg-webmix-600">
            Atualizar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
