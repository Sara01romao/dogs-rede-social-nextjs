import Image from "next/image";
import style from  './footer.module.css'

export default async function Footer(){
   
    return(
        <footer className={style.footer}>
            <Image 
              src={'/assets/dogs-footer.svg'}
              alt="Dogs"
              width={28}
              height={22}
            />

            <p>Dogs. Alguns direitos reservados</p>
        </footer>
    )
}