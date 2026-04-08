'use client';
import React, { useState } from 'react';

export default function AgentsPage() {
  const [name, setName] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Constructor de Agentes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
          <h2 className="text-xl font-semibold">Nuevo Agente</h2>
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Nombre del Agente</label>
            <input 
              type="text" 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white"
              placeholder="Ej: Scalper Pro"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Instrucciones de Sistema</label>
            <textarea 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white h-32"
              placeholder="Define cómo debe comportarse la IA..."
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg font-bold transition-colors">
            Crear Agente
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tus Agentes</h2>
          {[1,2].map(i => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <p className="font-bold">Analista Técnico {i}</p>
                <p className="text-xs text-slate-500">Estado: Inactivo</p>
              </div>
              <button className="text-xs bg-slate-800 px-3 py-1 rounded-md hover:bg-slate-700">Configurar</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
