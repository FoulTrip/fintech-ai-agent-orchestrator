import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/agents';

// Mock de Prisma
jest.mock('@/lib/prisma', () => ({
  agent: {
    findMany: jest.fn().mockResolvedValue([
      { id: '1', name: 'Analista Técnico', type: 'technical' },
      { id: '2', name: 'Analista Fundamental', type: 'fundamental' }
    ]),
    create: jest.fn().mockResolvedValue({ id: '3', name: 'Nuevo Agente' })
  }
}));

describe('API de Agentes (Products)', () => {
  it('debe retornar la lista de agentes disponibles', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toHaveLength(2);
    expect(data[0].name).toBe('Analista Técnico');
  });

  it('debe crear un nuevo agente correctamente', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { name: 'Agente Sentimiento', type: 'sentiment' }
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(201);
  });
});
