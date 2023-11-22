'use client'

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const {data: session} = useSession()
  const router = useRouter()

  useEffect(() => {
    if(!session?.expires){
      router.push('/login')
    }
  },[session])

  return (
    <main className="">
      <h2 className='text-3xl text-red-900 font-bold'>Hello</h2>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  )
}
