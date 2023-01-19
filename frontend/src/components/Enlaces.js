import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

export default function Enlaces() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col items `}>
      <div className={`${styles.flexStart} md:flew-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex- flex-col justify-start mr-10 ">
          <img
            src={logo}
            alt="Gyro"
            className="w-[260px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            {" "}
            Una nueva forma de gestionar tu empresa
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flew-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <ul>
                <h4 className="mt-10 font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerLink.title}
                </h4>

                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`list-none mt-4 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
