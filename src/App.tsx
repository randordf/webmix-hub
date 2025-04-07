
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Páginas Administrativas
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/index";
import ProjetosPage from "./pages/admin/projetos";
import ClientesPage from "./pages/admin/clientes";
import TemplatesPage from "./pages/admin/templates";
import EquipePage from "./pages/admin/equipe";
import AnalyticsPage from "./pages/admin/analytics";
import ConfiguracoesPage from "./pages/admin/configuracoes";
import { Button } from "@/components/ui/button";

// Outros componentes existentes da aplicação
function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">WebMix Hub</h1>
      <p className="text-gray-700 mb-6">Bem-vindo ao WebMix Hub!</p>
      
      <div className="space-y-4">
        <div className="p-6 border rounded-md bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Área Administrativa</h2>
          <p className="text-gray-600 mb-4">Acesse o painel administrativo para gerenciar projetos, clientes e mais.</p>
          <Link to="/admin">
            <Button>Acessar Área Admin</Button>
          </Link>
        </div>
        
        <div className="p-6 border rounded-md bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Sobre Nós</h2>
          <p className="text-gray-600 mb-4">Conheça mais sobre nossa plataforma.</p>
          <Link to="/about">
            <Button variant="outline">Saiba Mais</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
      <p className="text-gray-700 mb-6">Conheça mais sobre nossa plataforma de gerenciamento de projetos web.</p>
      <Link to="/">
        <Button variant="outline">Voltar para Home</Button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas Administrativas com layout comum */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projetos" element={<ProjetosPage />} />
          <Route path="clientes" element={<ClientesPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="equipe" element={<EquipePage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="configuracoes" element={<ConfiguracoesPage />} />
        </Route>
        
        {/* Outras rotas existentes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
