# Documentación de la API

Esta API está construida con FastAPI y proporciona los servicios necesarios para la orquestación de agentes y la simulación de trading.

**Base URL:** `http://localhost:8000/api/v1`

## Endpoints de Agentes

### Crear Agente
`POST /agents`

Crea un nuevo perfil de agente de IA.

**Request Body:**
```json
{
  "name": "Analista Técnico Pro",
  "role": "TECHNICAL",
  "system_prompt": "Eres un experto en indicadores técnicos...",
  "risk_parameters": {
    "max_drawdown": 0.05,
    "capital": 10000
  }
}
```

## Endpoints de Orquestación

### Ejecutar Análisis Multi-agente
`POST /orchestrator/run`

Inicia la secuencia de análisis (Técnico -> Fundamental -> Sentimiento).

**Response:**
```json
{
  "session_id": "uuid-123",
  "consolidated_report": "Resumen del análisis...",
  "agent_responses": [...]
}
```

## Endpoints de Trading

### Ejecutar Orden
`POST /trade/order`

Registra una operación en el entorno de Paper Trading.

**Request Body:**
```json
{
  "symbol": "BTC/USDT",
  "side": "BUY",
  "amount": 0.5,
  "price": 34500.00
}
```

## Endpoints de Datos

### Resumen de Portafolio
`GET /portfolio/summary`

### Datos de Mercado
`GET /market/data?symbol=BTC/USDT&interval=1h`
