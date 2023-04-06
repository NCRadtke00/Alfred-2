'use client';
import { PlusIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase"

function NewRequest() {
  const router = useRouter();
  const {data:session} = useSession();
  
  const createNewRequest = async() => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "request"),{
        userId: session?.user?.email!,
        createAt: serverTimestamp(),
      }
    ) 
    router.push('/request/@{doc.id}')
  }
  return (
    <div onClick={createNewRequest} className="border-grey-500 border chatRow">
        <PlusIcon className="h-8 w-8"/>
        <p>New Request</p> 
    </div>
  )
}

export default NewRequest