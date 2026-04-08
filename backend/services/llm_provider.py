import os


class LLMProvider:
    """
    Capa de abstracción para LLMs. Soporta modo mock para desarrollo local.
    """

    def __init__(self):
        self.use_mock = os.getenv("USE_MOCK_IA", "true").lower() == "true"

    async def get_completion(self, prompt: str, system_instruction: str) -> str:
        if self.use_mock:
            return self._get_mock_response(system_instruction)

        # Aquí iría la integración real con OpenAI/Anthropic.
        return f"Respuesta real de IA para: {prompt}"

    def _get_mock_response(self, system_instruction: str) -> str:
        instruction = system_instruction.lower()

        if "técnico" in instruction or "tecnico" in instruction or "technical" in instruction:
            return (
                "Análisis Técnico: RSI en 35 con señal de sobreventa. "
                "Posible rebote hacia resistencia de corto plazo."
            )
        if "fundamental" in instruction:
            return (
                "Análisis Fundamental: Los datos macro muestran desaceleración de inflación "
                "y mejores expectativas para activos de riesgo."
            )
        if "sentimiento" in instruction or "sentiment" in instruction:
            return (
                "Sentimiento: Predomina un sesgo optimista en redes y noticias, "
                "aunque con picos de volatilidad intradía."
            )

        return "Análisis general: mercado lateral con volatilidad moderada."
