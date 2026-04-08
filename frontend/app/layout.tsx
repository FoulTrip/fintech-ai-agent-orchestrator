import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fintech AI Orchestrator',
  description: 'Plataforma de orquestación de agentes de IA para trading'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-white min-h-screen">
        <nav className="border-b border-slate-800 p-4 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            FINTECH AI
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="/agents" className="hover:text-white transition-colors">
              Agentes
            </a>
            <a href="/orchestrator" className="hover:text-white transition-colors">
              Orquestador
            </a>
            <a href="/portfolio" className="hover:text-white transition-colors">
              Portafolio
            </a>
          </div>
        </nav>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
