'use client';
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
import useSwr from "swr";
type Props = {
    requestId: string
}

function RequestInput({requestId}: Props) {
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();
  
    const { data: model } = useSWR("model", {
      fallbackData: "text-davinci-003",
    });
  
    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!prompt) return;
  
      const input = prompt.trim();
      setPrompt("");
  
      const message: Message = {
        text: input,
        createdAt: serverTimestamp(),
        user: {
          _id: session?.user?.email!,
          name: session?.user?.name!,
          avatar:
            session?.user?.image! ||
            `https://ui-avatars.com/api/?name=${session?.user?.name}`,
        },
      };

    await addDoc(
        collection(
            db,
            "users",
            session?.user?.email!,
            "requests",
            requestId,
            "messages"
        ),
        message
    );
    const notification = toast.loading("I need just a few minutes to service you best..");
    await fetch("/api/askQuestion", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: input, 
            requestId,
            model,
            session,
        }),
        }).then(()=> {
            console.log(input);
            toast.success("Alfred has provided a response to your request.", {
                id:notification,
            });
        });
    };
   return (
    <div>
        <form>
            <input />
            <button></button>
        </form>
        <div>
            {/* select openAi model */}
        </div>
    </div>
  )
}

export default RequestInput