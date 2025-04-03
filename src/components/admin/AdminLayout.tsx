
import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        {children || <Outlet />}
      </div>
    </div>
  );
}
