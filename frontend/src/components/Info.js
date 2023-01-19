import React from "react";
import styles from "../style";
import { imagen_1 } from "../assets";

export default function Info() {
  return (
    <section
      className={` bg-black flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="text-white ss:text[72px] font-semibold font-poppins text-[52px] ss:leading-[100px] leading-[75px]">
          Una nueva forma <br className="sm:block hidden" />
          de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-yellow-400">
            gestionar <br className="sm:block hidden" />
          </span>
          tu empresa
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Gryo es una app diseñada para el sector de RR.HH de tu empresa,ya
          que le permitira gestionar y llevar un mejor control de los empleados
          de una forma mas FACIL, ORDENADA y EFICIENTE.
        </p>
      </div>

      <img src={imagen_1} alt="imagen_p" className="w-[600px] relative z-[5]" />
    </section>
  );
}
