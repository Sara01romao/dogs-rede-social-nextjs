import LoginCriarForm from "@/components/login/login-criar-form"
import { Metadata } from "next"

export const metadata: Metadata ={
    title: 'Criar Conta',
    description: 'Crie sua conta no site Dogs',
}


export default async function CriarPage() {

    return (
        <div className="animaLeft">
            <h1 className="title">Cadastre-se</h1>
            <LoginCriarForm/>

        </div>
    )
    
}