# Guía de Despliegue

Este documento describe los pasos para desplegar la plataforma en entornos de producción.

## Requisitos Previos

- Docker y Docker Compose.
- Cuenta en MongoDB Atlas (o instancia de MongoDB).
- API Keys de OpenAI/Anthropic (opcional para modo real).

## Variables de Entorno

Crea un archivo `.env` en la raíz con:
```env
DATABASE_URL="mongodb+srv://..."
OPENAI_API_KEY="sk-..."
ENVIRONMENT="production"
```

## Despliegue con Docker

```bash
docker-compose up -d --build
```

## Despliegue en Cloud

1. **Frontend:** Conectar el repositorio a **Vercel**. Configurar las variables de entorno en el panel de Vercel.
2. **Backend:** Desplegar el contenedor de FastAPI en **AWS App Runner** o **Render**.
3. **Base de Datos:** Utilizar un cluster de **MongoDB Atlas**.
