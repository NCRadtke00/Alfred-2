'use client';
import Image from "next/image"
import {signIn} from "next-auth/react"
function Login() {
  return (
    <div className="bg-[#251832] h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-6xl text-bold p-3"> Welcome to <i>Alfred</i></h2>
        <Image src="https://cdn-icons-png.flaticon.com/512/843/843314.png" width={300} height={300} alt="logo"/>
        <button onClick={()=> signIn("google")} className="text-white font-bold p-2 text-4xl animate-pulse"> Login</button>
    </div>
  )
}

export default Login