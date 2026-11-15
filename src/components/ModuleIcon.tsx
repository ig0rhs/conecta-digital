import React from 'react';
import { Monitor, Globe, Mail, ShieldCheck, Smartphone, HelpCircle } from 'lucide-react';

interface ModuleIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const ModuleIcon: React.FC<ModuleIconProps> = ({ name, className = 'w-6 h-6', size = 24 }) => {
  switch (name) {
    case 'Monitor':
      return <Monitor size={size} className={className} aria-hidden="true" />;
    case 'Globe':
      return <Globe size={size} className={className} aria-hidden="true" />;
    case 'Mail':
      return <Mail size={size} className={className} aria-hidden="true" />;
    case 'ShieldCheck':
      return <ShieldCheck size={size} className={className} aria-hidden="true" />;
    case 'Smartphone':
      return <Smartphone size={size} className={className} aria-hidden="true" />;
    default:
      return <HelpCircle size={size} className={className} aria-hidden="true" />;
  }
};
