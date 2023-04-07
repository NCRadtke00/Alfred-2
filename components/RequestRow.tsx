import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {db} from "../firebase";
import { collection, query, orderBy, deleteDoc, doc} from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

type Props = {
    id:string
}

function RequestRow({id}:Props){
    const pathname = usePathname();
    const router = useRouter();
    const {data:sessions} = useSession();
    const [active, setActive] = useState(false)
    const [message] = useCollection(
        collection(db, "users", session?.user?.email!, "requests", id, "messages")
    );
    useEffect(() => {
        if(!pathname) return;
        setActive(pathname.includes(id))
    }, [pathname]);
    const RemoveRequest = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "requests", id));
        router.replace("/");
    }
    return (
        <Link href={`/request/${id}`}> <ChatBubbleBottomCenterIcon/><p></p><TrashIcon/></Link>
    )
}