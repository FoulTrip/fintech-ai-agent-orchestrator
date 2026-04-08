class TradingEngine:
    def __init__(self):
        # En una app real, esto vendría de la base de datos.
        self.balance = 100000.0
        self.positions = []

    def execute_order(self, symbol: str, side: str, amount: float):
        # Simulación de ejecución de orden con precio fijo.
        price = 45000.0
        cost = amount * price

        if side == "BUY":
            if cost > self.balance:
                return {"status": "rejected", "reason": "Insufficient funds"}

            self.balance -= cost
            self.positions.append({"symbol": symbol, "amount": amount, "entry": price})
            return {"status": "filled", "price": price, "remaining_balance": self.balance}

        if side == "SELL":
            self.balance += cost
            return {"status": "filled", "price": price, "remaining_balance": self.balance}

        return {"status": "rejected", "reason": "Invalid side"}

    def get_summary(self):
        return {
            "total_balance": round(self.balance, 2),
            "pnl_daily": 1250.50,
            "active_positions": len(self.positions),
        }
