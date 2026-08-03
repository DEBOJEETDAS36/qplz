"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Phone, LogOut, Inbox } from "lucide-react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  program?: string;
  message: string;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data.contacts || []))
      .catch((err) => console.error("Failed to load contacts:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <section className="px-5 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Contact <span className="text-glow-blue">Submissions</span>
            </h1>
            <p className="text-sm opacity-70 mt-1">
              {contacts.length} total submission{contacts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full
                       border border-black/10 dark:border-white/10
                       hover:border-red-500/40 hover:text-red-500 transition-all duration-300"
          >
            <LogOut size={14} />
            Log out
          </button>
        </div>

        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 rounded-2xl bg-black/5 dark:bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20">
            <Inbox size={36} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm opacity-60">No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((c) => (
              <div
                key={c._id}
                className="p-5 rounded-2xl border border-black/10 dark:border-white/10
                           bg-white dark:bg-white/[0.02]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">{c.name}</h3>
                    {c.program && (
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-glow-blue/10 text-glow-blue">
                        Workshop: {c.program}
                      </span>
                    )}
                  </div>
                  <span className="text-xs opacity-50">
                    {new Date(c.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs opacity-70 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Mail size={12} /> {c.email}
                  </span>
                  {c.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone size={12} /> {c.phone}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed opacity-90">{c.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}