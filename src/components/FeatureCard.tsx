
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border flex flex-col items-center text-center animate-fade-in",
        className
      )}
      style={style}
    >
      <div className="mb-4 text-tech-dark text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
