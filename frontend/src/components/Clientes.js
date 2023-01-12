import React from "react";

import { opiniones } from "../constants";

export default function Clientes() {
  return (
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-containter relative z-[1]">
      {opiniones.map((opinion) => (
        
        <div
            key={opinion.id}
            id={opinion.id}
            className="px-5 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card flex-justify-between"
            >
            <p className="font-popping font-normal text-[18px] leading-[32px] text-white my-10">{opinion.content}</p>
          
          <div className="flex flex-row">
                <img
                src={opinion.img}
                alt={opinion.id}
                className="w-[52px] h-[52] mt-5"
                />

                <div className=" flex flex-col mt-5 ml-5">
                <h4 className="text-white font-semibold text-[16px] ">
                    {opinion.name}
                </h4>
                <h4 className=" font-normal text-dimWhite text-[14px]">
                    {opinion.title}
                </h4>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
}
