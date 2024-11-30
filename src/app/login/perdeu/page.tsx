import LoginPerdeuForm from "@/components/login/login-perdeu-form"
import { Metadata } from "next"


export const metadata: Metadata ={
    title: 'Perdeu a Senha | Dogs',
    description: 'Recupere a sua senha',
}

export const dynamic = 'force-dynamic';

export default async function PedeuPage() {

    return (
       <div className="animeLeft">
         <h1 className="title"> Perdeu a Senha?</h1>
         <LoginPerdeuForm/>

       </div>
    )
    
}