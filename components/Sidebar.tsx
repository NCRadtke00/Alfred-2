'use client';
import NewRequest from "./NewRequest"
import {useSession, signOut} from 'next-auth/react'

function Sidebar() {
    const {data:session} = useSession();

    return (
    <div className="flex flex-col h-screen p-2">
        <div className="flex-1">
            <div className=" flex items-center justify-center p-2">
                {session && (
                    <img onClick={() => signOut()} src={session.user?.image!} alt="" className="h-20 w-20 rounded-3xl mx-auto mb-2 cursor-pointer hover:opacity-70"/>
                )}       
            </div>

            <div>
                <NewRequest /> 
            </div>
            <div>
                list of past
            </div>
            <div>
                tools
            </div>
        </div>
    </div>
  )
}

export default Sidebar