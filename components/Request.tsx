'use client'
import {collection, orderBy, query} from "firebase/firestore"
import {useSession} from "next-auth/react"
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase"
import Message from "./Message"

type Props = {
    requestId: string;
}

function Request({requestId}:Props) {
    const {data:session} = useSession();
    const [messages] = useCollection(
        session && query(collection(db,"users",session?.user?.email!, "requests", requestId, "messages"),
        orderBy("createdAt", "asc"))
    )
  return (
    <div className="flex-1 overflow-y-auto">
        {messages?.empty && (
            <> 
                <p className="mt-10 text-center text-white"> Enter your request!</p>

            </>
        )}
         {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  )
}

export default Request