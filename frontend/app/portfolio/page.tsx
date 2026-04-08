'use client';

import { useEffect, useState } from 'react';

type PortfolioSummary = {
  total_balance: number;
  pnl_daily: number;
  active_positions: number;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function PortfolioPage() {
  const [summary, setSummary] = useState<PortfolioSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/v1/portfolio/summary`);

        if (!response.ok) {
          throw new Error('No se pudo cargar el portafolio');
        }

        const data = (await response.json()) as PortfolioSummary;
        setSummary(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error inesperado');
      } finally {
        setLoading(false);
      }
    };

    loadSummary();
  }, []);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Portafolio</h1>
        <p className="text-slate-400">Estado actual del motor de paper trading.</p>
      </header>

      {loading && <p className="text-slate-400">Cargando resumen...</p>}
      {error && <p className="text-rose-400">{error}</p>}

      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-slate-500 text-sm">Balance Total</p>
            <h2 className="text-2xl font-bold text-emerald-400">
              ${summary.total_balance.toLocaleString()}
            </h2>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-slate-500 text-sm">P&L Diario</p>
            <h2 className="text-2xl font-bold text-blue-400">
              ${summary.pnl_daily.toLocaleString()}
            </h2>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-slate-500 text-sm">Posiciones Activas</p>
            <h2 className="text-2xl font-bold">{summary.active_positions}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
