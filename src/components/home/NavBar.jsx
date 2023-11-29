"use client"
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {LuMenu} from "react-icons/lu";
import {AiOutlineClose} from "react-icons/ai";

const NavBar = ({bg}) => {
    const [menu ,setMenu]= useState(true)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className={`${bg} sticky top-0 left-0 w-full z-20`}>
            <div className="container">
                <div className='flex-1 flex justify-between items-center  '>
                    <Link className={menu ? "md:block": "hidden md:block"}  href='/'>
                        <Image src="/assets/logo.png" alt="logo" width={176} height={50}/>
                    </Link>
                   <nav className='flex-[2] relative'>
                       <ul className={menu ? "hidden md:flex justify-start md:justify-end items-center flex-col md:flex-row  md:gap-x-[5px] gap-y-3 md:gap-y-0 lg:gap-x-[15px] mt-5 md:mt-0":"md:flex justify-start md:justify-end items-center flex-col md:flex-row md:gap-x-[5px] gap-y-3 md:gap-y-0 lg:gap-x-[15px] mt-5 md:mt-0"}>
                           <li className='my-3'>
                               <Link className="navLink" href='/'>Home</Link>
                           </li>
                           <li className='my-3'>
                               <Link className="navLink" href='/team'>team</Link>
                           </li>
                           <li className='my-3'>
                               <Link className="navLink" href='/services'>services</Link>
                           </li>
                           <li className='my-3'>
                               <Link className="navLink" href='/projects'>projects</Link>
                           </li>
                           <li className='my-3'>
                               <Link className="navLink" href='/testimonials'>testimonials</Link>
                           </li>
                           <li className='my3 md:mr-3'>
                               <Link href='/login'>
                                   <button className="btn-white " >Login</button>
                               </Link>
                           </li>
                           <li className='my-3'>
                               <Link href='/register'>
                                   <button className="btn-green">register</button>
                               </Link>
                           </li>
                       </ul>
                       <button onClick={handleMenu} className={menu ? "md:hidden absolute -top-3 right-2 indent-10" :"md:hidden absolute top-3 right-2 indent-10" }>
                           {
                               menu ? <LuMenu className="text-black hover:text-green3" size={30}/> :<AiOutlineClose className="text-black hover:text-green3" size={30} />
                           }

                       </button>
                   </nav>

                </div>

            </div>
        </div>
    );
};

export default NavBar;