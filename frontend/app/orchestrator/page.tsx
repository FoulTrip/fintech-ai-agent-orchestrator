'use client';

import { useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function OrchestratorPage() {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRun = async () => {
    setLoading(true);
    setError(null);
    setReport(null);
    setRecommendation(null);

    try {
      const response = await fetch(
        `${apiUrl}/api/v1/orchestrator/run?symbol=${encodeURIComponent(symbol)}`,
        {
          method: 'POST'
        }
      );

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
      }

      const data = (await response.json()) as {
        symbol: string;
        report: string;
        recommendation: string;
      };

      setReport(data.report);
      setRecommendation(data.recommendation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado al ejecutar el análisis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Orquestación Multi-agente</h1>
      
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center space-y-6">
        <p className="text-slate-400 max-w-lg mx-auto">
          Inicia un ciclo de análisis completo. El orquestador consultará a los perfiles Técnico, Fundamental y de Sentimiento para generar una recomendación final.
        </p>

        <div className="max-w-xs mx-auto space-y-2 text-left">
          <label className="text-sm text-slate-400">Símbolo</label>
          <input
            type="text"
            value={symbol}
            onChange={(event) => setSymbol(event.target.value.toUpperCase())}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white"
            placeholder="BTCUSDT"
          />
        </div>
        
        <button 
          onClick={handleRun}
          disabled={loading || !symbol.trim()}
          className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
        >
          {loading ? 'Orquestando agentes...' : 'Iniciar Análisis de Mercado'}
        </button>
      </div>

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/40 rounded-xl p-6">
          <p className="text-rose-300">{error}</p>
        </div>
      )}

      {report && (
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-6">
          <h3 className="text-emerald-400 font-bold mb-2">Reporte Consolidado</h3>
          <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{report}</p>
          {recommendation && (
            <p className="mt-4 text-sm text-slate-400">
              Recomendación final: <span className="text-white font-semibold">{recommendation}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
