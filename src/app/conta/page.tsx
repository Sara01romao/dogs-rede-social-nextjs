'use client'
import { useUser } from "@/context/user-context"

export default async function ContaPage() {
   const {user} = useUser();
    return (
        <main>
            <h1>Conta: {user?.nome}</h1>
        </main>
    )
    
}