from .llm_provider import LLMProvider


class AgentOrchestrator:
    def __init__(self):
        self.llm = LLMProvider()

    async def run_full_analysis(self, symbol: str):
        # Secuenciación de tareas entre perfiles
        tech_analysis = await self.llm.get_completion(
            f"Analiza {symbol}", "Eres un Analista Técnico experto."
        )
        fund_analysis = await self.llm.get_completion(
            f"Analiza {symbol}", "Eres un Analista Fundamental experto."
        )
        sent_analysis = await self.llm.get_completion(
            f"Analiza {symbol}", "Eres un Analista de Sentimiento experto."
        )

        consolidated = (
            f"REPORTE CONSOLIDADO PARA {symbol}\n\n"
            f"1. {tech_analysis}\n"
            f"2. {fund_analysis}\n"
            f"3. {sent_analysis}"
        )

        technical_signal = tech_analysis.lower()
        recommendation = (
            "BUY"
            if "sobreventa" in technical_signal or "alcista" in technical_signal
            else "HOLD"
        )

        return {
            "symbol": symbol,
            "report": consolidated,
            "recommendation": recommendation,
        }
