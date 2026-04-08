import prisma from '@/lib/prisma';

jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    agent: {
      findUnique: jest.fn()
    }
  }
}));

describe('Capa de Datos - Prisma', () => {
  it('debe llamar a findUnique con los parámetros correctos', async () => {
    const spy = jest.spyOn(prisma.agent, 'findUnique');
    
    await prisma.agent.findUnique({ where: { id: 'test-id' } });
    
    expect(spy).toHaveBeenCalledWith({
      where: { id: 'test-id' }
    });
  });
});
