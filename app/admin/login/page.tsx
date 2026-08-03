"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Login failed");
        return;
      }

      router.push("/admin/contacts");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="w-full max-w-sm p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-black/5 dark:bg-glow-blue/10 text-glow-blue">
          <Lock size={18} />
        </div>
        <h1 className="text-xl font-semibold mb-1">Admin Login</h1>
        <p className="text-sm opacity-70 mb-6">Enter the admin password to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl text-sm
                       bg-black/[0.03] dark:bg-white/[0.03]
                       border border-black/10 dark:border-white/10
                       focus:outline-none focus:border-glow-blue/60
                       dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                       transition-all duration-300"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-full text-sm font-medium
                       bg-black text-white dark:bg-glow-blue dark:text-black
                       hover:opacity-90 transition-all duration-300
                       disabled:opacity-50"
          >
            {loading ? "Checking..." : "Log In"}
          </button>
        </form>
      </div>
    </section>
  );
}