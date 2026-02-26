import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

const PaymentSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md space-y-6">
        <CheckCircle className="mx-auto text-green-500" size={64} />
        <h1 className="font-heading text-3xl font-bold tracking-wide">Pagamento Confirmado!</h1>
        <p className="text-muted-foreground">
          Seu pedido foi processado com sucesso. Você receberá um e-mail com os detalhes da compra.
        </p>
        <Link
          to="/"
          className="inline-block py-3 px-8 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
        >
          Voltar à Loja
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
