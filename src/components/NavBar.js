import React from 'react'
import { logo } from '../assets'
import { navLinks } from '../constants'
import style from '../style'



export default function NavBar(){
    navLinks.map((nav)=>(
        console.log(nav.id)
    ))
    return(
        <nav className='w-full flex items-center justify-between navbar bg-black '>
            <img  alt ="logo" src={logo} className="w-[124px] h-[32px]"/>
            <div className=''>
                <ul className=' items-center list-none sm:flex hidden justify-end flex-1'>
                    {navLinks.map((nav,index)=>(
                        <li key={nav.id} className="font-poppins font-normal cursor-pointer px-[3px] text-[16px] text-white ">
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
    
}