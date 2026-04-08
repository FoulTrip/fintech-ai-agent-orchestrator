import { TradingChart } from '../components/TradingChart';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Dashboard General</h1>
        <p className="text-slate-400">Resumen de rendimiento de tus agentes de IA.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-slate-500 text-sm">Balance Total</p>
          <h2 className="text-2xl font-bold text-emerald-400">$124,500.00</h2>
          <span className="text-xs text-emerald-500">+12.5% este mes</span>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-slate-500 text-sm">Agentes Activos</p>
          <h2 className="text-2xl font-bold">8</h2>
          <span className="text-xs text-slate-500">3 en ejecución</span>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-slate-500 text-sm">Operaciones (24h)</p>
          <h2 className="text-2xl font-bold">42</h2>
          <span className="text-xs text-blue-500">95% Tasa de éxito</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-80 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <TradingChart />
        </div>
        <div className="h-80 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
             {[1,2,3].map(i => (
               <div key={i} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                 <div>
                    <p className="font-medium">Agente Técnico Alpha</p>
                    <p className="text-xs text-slate-500">Compra BTC/USDT</p>
                 </div>
                 <span className="text-emerald-400">+$450.20</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
