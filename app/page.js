"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>No estás logueado</h1>
        <button onClick={() => signIn("discord")}>
          Login con Discord
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Hola {session.user.name}</h1>
      <p>ID: {session.user.id}</p>

      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}