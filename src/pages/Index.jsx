import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Payment Confirmation - Stripe";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-4">
      <header className="mb-8">
        <img src="/placeholder.svg" alt="Stripe Logo" className="mx-auto object-cover w-32 h-8" />
      </header>
      <main className="text-center">
        <h1 className="text-2xl font-bold mb-4">Congratulations Lovable Labs Incorporated!</h1>
        <p className="mb-4">You've just received your first payment through Stripe.</p>
        <p>
          Your first payout for this payment of <span className="font-bold">$10.00</span> (minus any fees) should land in your bank account on <span className="font-bold">12/28/23</span>.
        </p>
      </main>
    </div>
  );
};

export default Index;