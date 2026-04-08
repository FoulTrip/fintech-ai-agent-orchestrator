# Fintech AI Agent Orchestrator

Plataforma SaaS para orquestación de agentes de IA aplicada a análisis de mercado y paper trading.

## Levantar con Docker (un solo comando)

1. Opcional: copia variables de entorno:
   ```bash
   cp .env.example .env
   ```
2. Ejecuta:
   ```bash
   docker compose up --build
   ```

## URLs

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`
- Health backend: `http://localhost:8000/`

## Estructura relevante

- `frontend/`: Next.js 14 (App Router)
- `backend/`: FastAPI
- `docker-compose.yml`: arranque local de todo el stack
