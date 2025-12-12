import React from 'react';
import { Brain } from 'lucide-react';

export const Logo: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
  const isLarge = size === 'lg';
  
  return (
    <div className="flex items-center gap-2 select-none">
      <div className={`${isLarge ? 'p-3' : 'p-2'} bg-google-blue rounded-xl shadow-md text-white`}>
        <Brain size={isLarge ? 32 : 20} strokeWidth={2} />
      </div>
      <span className={`font-display font-medium tracking-tight text-google-text ${isLarge ? 'text-3xl' : 'text-xl'}`}>
        Cognito
      </span>
    </div>
  );
};