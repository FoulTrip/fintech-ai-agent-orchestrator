'use client';

import { useEffect, useRef } from 'react';
import { ColorType, createChart } from 'lightweight-charts';

export const TradingChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#94a3b8',
      },
      grid: {
        vertLines: { color: '#1e293b' },
        horzLines: { color: '#1e293b' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#10b981',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#10b981',
      wickDownColor: '#ef4444',
    });

    // Mock data
    candleSeries.setData([
      { time: { year: 2024, month: 1, day: 1 }, open: 42000, high: 43000, low: 41500, close: 42500 },
      { time: { year: 2024, month: 1, day: 2 }, open: 42500, high: 44000, low: 42000, close: 43800 },
      { time: { year: 2024, month: 1, day: 3 }, open: 43800, high: 43900, low: 42800, close: 43100 },
      { time: { year: 2024, month: 1, day: 4 }, open: 43100, high: 45000, low: 43000, close: 44800 }
    ]);

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} className="w-full" />;
};
