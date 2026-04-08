import { render, screen } from '@testing-library/react';
import PortfolioSummary from '@/components/PortfolioSummary';

describe('Componente PortfolioSummary (Cart)', () => {
  const mockTrades = [
    { id: '1', symbol: 'ETH', pnl: 200 },
    { id: '2', symbol: 'BTC', pnl: -50 }
  ];

  it('debe calcular y mostrar el P&L total correctamente', () => {
    render(<PortfolioSummary trades={mockTrades} balance={1000} />);
    
    // Total P&L: 200 - 50 = 150
    const pnlDisplay = screen.getByText(/\$150/i);
    expect(pnlDisplay).toBeInTheDocument();
  });

  it('debe mostrar mensaje de "Sin operaciones" cuando la lista está vacía', () => {
    render(<PortfolioSummary trades={[]} balance={1000} />);
    expect(screen.getByText(/Sin operaciones activas/i)).toBeInTheDocument();
  });
});
