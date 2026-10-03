"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-md border-2 border-neutral-700 bg-black px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-amber-500";

export default function CheckoutForm({ onPlaced }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !city.trim() || !address.trim()) {
      setError("Please fill in your name, phone, city and address.");
      return;
    }

    if (!/^3\d{9}$/.test(phone.trim())) {
      setError("Phone number must be 10 digits and start with 3, like 3001234567.");
      return;
    }

    setError("");
    setLoading(true);

    const problem = await onPlaced({
      name: name.trim(),
      phone: "+92" + phone.trim(),
      city: city.trim(),
      address: address.trim(),
      note: note.trim(),
    });

    if (problem) {
      setError(problem);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className={inputClass}
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-2">
        <div className="flex items-center rounded-md border-2 border-neutral-700 bg-black px-4 py-3 text-white">
          +92
        </div>
        <input
          className={inputClass}
          placeholder="Phone Number (3001234567)"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          inputMode="numeric"
          maxLength={10}
        />
      </div>

      <input
        className={inputClass}
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <textarea
        className={inputClass}
        placeholder="Full Address"
        rows={3}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <textarea
        className={inputClass}
        placeholder="Note (optional)"
        rows={2}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
      >
        {loading ? "Placing order..." : "Place Order (Cash on Delivery)"}
      </button>
    </form>
  );
}