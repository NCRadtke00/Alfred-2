'use client';
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
type Prps = {
    requestId: string
}

function RequestInput() {
  return (
    <div>RequestInput</div>
  )
}

export default RequestInput