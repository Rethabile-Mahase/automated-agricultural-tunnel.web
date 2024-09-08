'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === 'Leshego' && password === 'Talane')
      router.push('/data-display')
    // if (!username || !password) return;
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // })
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} method="POST" className="border flex flex-col w-[300px] h-[300px] rounded-lg shadow-lg px-4 justify-center">
        <input onChange={(e) => { setUsername(e.target.value) }} value={username} className="border h-[40px] rounded-md px-2" placeholder="username" />
        <input onChange={(e) => { setPassword(e.target.value) }} value={password} className="border my-4 h-[40px] rounded-md px-2" placeholder="password" />
        <button type="submit" className="bg-blue-400 h-[40px] rounded-md text-white hover:bg-blue-300">Login</button>
      </form>
    </main>
  );
}
