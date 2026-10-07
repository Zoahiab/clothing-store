"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="min-w-0 flex-1 border border-amber-700/40 bg-white px-3 py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-amber-700"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="bg-amber-700 px-4 text-white transition hover:bg-amber-600"
        >
          <ArrowRight size={18} />
        </button>
      </form>
      {done && (
        <p className="mt-2 text-xs">
          Thank you for subscribing! (Demo only, emails are not saved.)
        </p>
      )}
    </div>
  );
}