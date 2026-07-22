"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Bienvenido");

      router.push("/admin");

    } catch {
      toast.error("Correo o contraseña incorrectos");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">

      <form
        onSubmit={login}
        className="w-full max-w-md rounded-3xl bg-zinc-900 p-10"
      >

        <h1 className="mb-8 text-center text-4xl font-black text-white">
          Iniciar sesión
        </h1>

        <input
          placeholder="Correo"
          className="mb-4 w-full rounded-xl bg-zinc-800 p-4 text-white"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="mb-8 w-full rounded-xl bg-zinc-800 p-4 text-white"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full rounded-xl bg-white py-4 font-bold text-black">
          Entrar
        </button>

      </form>

    </main>
  );
}