import React from 'react';
import { AlertCircle, Lightbulb, Sparkles, AlertTriangle, Info } from 'lucide-react';

interface InfoCalloutProps {
  type: 'tip' | 'warning' | 'highlight' | 'info';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoCallout: React.FC<InfoCalloutProps> = ({
  type,
  title,
  children,
  className = ''
}) => {
  const configs = {
    tip: {
      bgColor: 'bg-amber-50/90',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-950',
      titleColor: 'text-amber-900',
      icon: Lightbulb,
      iconColor: 'text-amber-600',
      defaultTitle: 'Dica Prática'
    },
    warning: {
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-950',
      titleColor: 'text-rose-900',
      icon: AlertTriangle,
      iconColor: 'text-rose-600',
      defaultTitle: 'Atenção e Cuidado'
    },
    highlight: {
      bgColor: 'bg-blue-50/80',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-950',
      titleColor: 'text-blue-900',
      icon: Sparkles,
      iconColor: 'text-blue-600',
      defaultTitle: 'Conceito Fundamental'
    },
    info: {
      bgColor: 'bg-slate-100',
      borderColor: 'border-slate-200',
      textColor: 'text-slate-800',
      titleColor: 'text-slate-900',
      icon: Info,
      iconColor: 'text-slate-600',
      defaultTitle: 'Informação Importante'
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <aside
      className={`p-4 sm:p-5 rounded-xl border ${config.bgColor} ${config.borderColor} ${className}`}
      aria-label={title || config.defaultTitle}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">
          <Icon className={`w-5 h-5 ${config.iconColor}`} aria-hidden="true" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className={`text-sm font-bold ${config.titleColor}`}>
            {title || config.defaultTitle}
          </h4>
          <div className={`text-sm leading-relaxed ${config.textColor}`}>
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
};
