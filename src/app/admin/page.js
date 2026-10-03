"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const statuses = ["New", "Confirmed", "Shipped", "Delivered", "Cancelled"];
const box = "w-full rounded-md border-2 border-neutral-300 px-4 py-3 text-black";

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) loadOrders();
  }, [session]);

  async function loadOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError("Could not load orders.");
    else {
      setOrders(data);
      setError("");
    }
  }

  async function login(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setError(error ? "Wrong email or password." : "");
  }

  async function changeStatus(id, status) {
    await supabase.from("orders").update({ status }).eq("id", id);
    loadOrders();
  }

  if (checking) {
    return <div className="min-h-screen bg-white p-10 text-black">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-white px-4 py-20 text-black">
        <form onSubmit={login} className="mx-auto max-w-sm space-y-4">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <input className={box} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={box} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="w-full rounded-full bg-black px-6 py-3 font-semibold text-white">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Orders ({orders.length})</h1>
          <div className="flex gap-3">
            <button onClick={loadOrders} className="rounded-full border-2 border-black px-4 py-2 text-sm">Refresh</button>
            <button onClick={() => supabase.auth.signOut()} className="rounded-full bg-black px-4 py-2 text-sm text-white">Logout</button>
          </div>
        </div>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        {orders.length === 0 && !error && <p className="text-neutral-500">No orders yet.</p>}

        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o.id} className="rounded-lg border border-neutral-300 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-bold">#{o.order_number}</p>
                <p className="text-sm text-neutral-500">{new Date(o.created_at).toLocaleString()}</p>
                <select value={o.status} onChange={(e) => changeStatus(o.id, e.target.value)} className="rounded-md border-2 border-neutral-300 px-3 py-1 text-sm">
                  {statuses.map((s) => (<option key={s}>{s}</option>))}
                </select>
              </div>
              <p className="mt-3 font-medium">{o.name} | {o.phone}</p>
              <p className="text-sm text-neutral-600">{o.address}, {o.city}</p>
              {o.note && <p className="text-sm text-neutral-600">Note: {o.note}</p>}
              <ul className="mt-3 text-sm">
                {o.items.map((i, n) => (
                  <li key={n}>{i.name} | Size {i.size} | Qty {i.quantity} | Rs. {(i.price * i.quantity).toLocaleString()}</li>
                ))}
              </ul>
              <p className="mt-3 font-bold">Total: Rs. {o.total.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}