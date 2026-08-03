"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

function OrderConfirmedContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <section className="px-5 py-24 text-center">
      <CheckCircle2 size={44} className="text-glow-blue mx-auto mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Order placed!</h1>
      <p className="text-sm opacity-70 mb-1">
        We've received your order and will process it shortly.
      </p>
      {orderId && (
        <p className="text-xs opacity-50 mb-8">Order ID: {orderId}</p>
      )}
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                   bg-black text-white dark:bg-glow-blue dark:text-black
                   hover:opacity-90 transition-all duration-300"
      >
        Continue Shopping
      </Link>
    </section>
  );
}

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={null}>
      <OrderConfirmedContent />
    </Suspense>
  );
}