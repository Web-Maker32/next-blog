import React from 'react';

export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`border p-4 rounded-lg bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}