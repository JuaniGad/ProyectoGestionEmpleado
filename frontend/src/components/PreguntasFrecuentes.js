import React from "react";
import { PreguntasFreq } from "../constants";

export default function PreguntasFrecuentes(){
    return(
        <section className="font-poppins flex flex-wrap sm:justify-start justify-center w-full relative z-[1] text-white">
            <div>
                <p className="font-poppins font-bold text-[24px]">Preguntas frecuentes:</p>
                {PreguntasFreq.map((preg)=>(
                    <div  className=" max-w-[740px] p-5 mt-3 mb-0" key={preg.key}>
                    <h2 className=" font-bold text-[18px]">{preg.p}</h2>
                    <p className="text-[16px]">{preg.r}</p>
                    </div>
                ))}
            </div>
            

        </section>
    )
}