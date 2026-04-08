import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/trade/order';

// Mock del motor de trading
jest.mock('@/lib/trading-engine', () => ({
  executeOrder: jest.fn().mockResolvedValue({
    id: 'trade_123',
    status: 'completed',
    pnl: 150.50
  })
}));

describe('API de Trading (Checkout)', () => {
  it('debe procesar una orden de compra exitosamente', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        symbol: 'BTC/USDT',
        side: 'buy',
        amount: 0.5,
        type: 'market'
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.status).toBe('completed');
    expect(data.pnl).toBeDefined();
  });

  it('debe devolver error 400 si faltan parámetros obligatorios', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { symbol: 'BTC/USDT' }, // Faltan campos
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });
});
