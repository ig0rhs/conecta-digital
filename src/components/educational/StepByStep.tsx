import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StepByStepProps {
  title?: string;
  steps: string[];
  className?: string;
}

export const StepByStep: React.FC<StepByStepProps> = ({
  title,
  steps,
  className = ''
}) => {
  return (
    <div className={`p-5 rounded-xl bg-slate-50 border border-slate-200 ${className}`}>
      {title && (
        <h4 className="text-sm font-bold text-slate-900 mb-3.5 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
          <span>{title}</span>
        </h4>
      )}
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
              {index + 1}
            </span>
            <span className="leading-relaxed flex-1">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
