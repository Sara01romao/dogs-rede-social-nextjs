import React from "react";
import styles from './input.module.css'
import { error } from "console";

type InputProps = React.ComponentProps<'input'>&{
    label:string;
    error?:string;
}


export default function Input({label, error, ...props}: InputProps){

   return(
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={props.name}>{label}</label>
            <input className={styles.input} type="text" id={props.name} {...props} />

            {error && <p className={styles.error}>{error}</p>}
        </div>

   ) 
}