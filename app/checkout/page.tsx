"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "@/context/CartContext";
import AnimatedSection from "@/components/ui/AnimatedSection";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  line1: z.string().min(3, "Address is required"),
  line2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Enter a valid pincode"),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm bg-black/[0.03] dark:bg-white/[0.03] " +
  "border border-black/10 dark:border-white/10 focus:outline-none focus:border-glow-blue/60 " +
  "dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)] transition-all duration-300";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({ resolver: zodResolver(checkoutSchema) });

  const onSubmit = async (data: CheckoutForm) => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name: data.name, email: data.email, phone: data.phone },
          shippingAddress: {
            line1: data.line1,
            line2: data.line2 || "",
            city: data.city,
            state: data.state,
            pincode: data.pincode,
          },
          items: items.map((i) => ({
            productId: i.productId,
            name: i.name,
            price: i.price,
            qty: i.qty,
          })),
          totalAmount: totalPrice,
        }),
      });

      if (!res.ok) throw new Error("Order creation failed");
      const { order } = await res.json();

      // Payment gateway integration goes here next step —
      // for now, just confirm order creation and clear cart.
      clearCart();
      router.push(`/order-confirmed?orderId=${order._id}`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong placing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <section className="px-5 py-24 text-center">
        <p className="text-sm opacity-70">Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Checkout
        </h1>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Order summary */}
          <AnimatedSection className="md:col-span-2 order-2 md:order-1">
            <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/2">
              <h2 className="text-sm font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-sm">
                    <span className="opacity-70">
                      {item.name} × {item.qty}
                    </span>
                    <span>₹{(item.price * item.qty).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-black/10 dark:border-white/10 pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-glow-blue">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1} className="md:col-span-3 order-1 md:order-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/2"
            >
              <h2 className="text-sm font-semibold mb-1">Contact Details</h2>
              <div>
                <input {...register("name")} placeholder="Full name" className={inputClass} />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input {...register("email")} placeholder="Email" className={inputClass} />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input {...register("phone")} placeholder="Phone number" className={inputClass} />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <h2 className="text-sm font-semibold mb-1 pt-2">Shipping Address</h2>
              <div>
                <input {...register("line1")} placeholder="Address line 1" className={inputClass} />
                {errors.line1 && <p className="text-xs text-red-500 mt-1">{errors.line1.message}</p>}
              </div>
              <div>
                <input {...register("line2")} placeholder="Address line 2 (optional)" className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <input {...register("city")} placeholder="City" className={inputClass} />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <input {...register("state")} placeholder="State" className={inputClass} />
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
                </div>
                <div>
                  <input {...register("pincode")} placeholder="Pincode" className={inputClass} />
                  {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 px-6 py-3 rounded-full text-sm font-medium
                           bg-black text-white dark:bg-glow-blue dark:text-black
                           hover:opacity-90 transition-all duration-300
                           dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.4)]
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Placing order..." : `Place Order — ₹${totalPrice.toLocaleString("en-IN")}`}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}