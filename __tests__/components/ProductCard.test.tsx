import { render, screen, fireEvent } from '@testing-library/react';
import AgentCard from '@/components/AgentCard';

describe('Componente AgentCard (ProductCard)', () => {
  const mockAgent = {
    id: '1',
    name: 'Alpha Bot',
    description: 'Estrategia de alta frecuencia',
    status: 'active'
  };

  it('debe renderizar la información del agente', () => {
    render(<AgentCard agent={mockAgent} onSelect={jest.fn()} />);
    
    expect(screen.getByText('Alpha Bot')).toBeInTheDocument();
    expect(screen.getByText(/alta frecuencia/i)).toBeInTheDocument();
  });

  it('debe llamar a onSelect al hacer clic en el botón de configuración', () => {
    const onSelectSpy = jest.fn();
    render(<AgentCard agent={mockAgent} onSelect={onSelectSpy} />);
    
    const button = screen.getByRole('button', { name: /configurar/i });
    fireEvent.click(button);
    
    expect(onSelectSpy).toHaveBeenCalledWith('1');
  });
});
