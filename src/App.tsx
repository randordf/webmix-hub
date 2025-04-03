import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button>Click me</Button>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us.</p>
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
