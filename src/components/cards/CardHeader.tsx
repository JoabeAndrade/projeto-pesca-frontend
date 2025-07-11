import React from "react";

type CardHeaderProps = {
  title: string,
  icon: React.ReactNode,
};

export default function CardHeader({ title, icon }: CardHeaderProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="text-xl mr-2">{icon}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
