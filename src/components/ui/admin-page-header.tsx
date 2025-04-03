
import React from "react";

interface AdminPageHeaderProps {
  title: string;
  description: string;
}

export function AdminPageHeader({ title, description }: AdminPageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}
