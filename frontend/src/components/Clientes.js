import React from "react";
import styles from "../style";
import { opiniones } from "../constants";

export default function Clientes(){

    return (
        <section className="bg-black">
            <div className={`flex-1 ${styles.flexStart}  xl:px-0 sm:px-16 px-6 justify-start`}>
            <ul>
                {opiniones.map((opinion)=>(
                    <li id={opinion.id}>
                        <p>{opinion.content}</p>
                        <span>{opinion.name}</span>
                        <span>{opinion.title}</span>
                        <img src={opinion.img} alt={opinion.id}/>

                    </li>
                ))}
            </ul>

            </div>

        </section>
    )
}