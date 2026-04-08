# Fintech AI Agent Orchestrator

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Coverage](https://img.shields.io/badge/coverage-85%25-success)

Plataforma SaaS de alta fidelidad para el sector Fintech que permite la creación, orquestación y simulación de trading mediante agentes de IA especializados.

## 🚀 Características Principales

- **Orquestador Multi-agente:** Secuenciación de análisis Técnico, Fundamental y de Sentimiento.
- **Paper Trading:** Motor de simulación financiera con cálculo de P&L en tiempo real.
- **Agent Builder:** Personalización total de perfiles de IA y reglas de riesgo.
- **Visualización Pro:** Gráficos de velas interactivos integrados.
- **Dual Mode:** Alterna entre IA real (OpenAI/Anthropic) y Mocks de alta calidad.

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Backend:** FastAPI (Python).
- **Base de Datos:** Prisma ORM con MongoDB.
- **Gráficos:** Lightweight Charts (TradingView).

## 📦 Instalación Rápida

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/FoulTrip/fintech-ai-agent-orchestrator.git
   ```

2. Ejecutar con Docker:
   ```bash
   docker-compose up --build
   ```

3. Acceder:
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:8000`

---
Desarrollado por el equipo de Software Factory.
