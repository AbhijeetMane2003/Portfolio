import React from 'react'

import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

export default function Header() {
  return (
    <header className='absolute w-[100%] flex font-extralight text-sm 2xl:text-xl h-[5.5rem] justify-center max-2xl:text-xl max-md:text-base max-xl:text-lg'>
        <nav className='flex justify-between items-center w-[70%] m-auto h-20 z-[1] bg-transparent'>
            <div className='max-sm:w-full bg-transparent'>
                <p className='hover:text-gray-400 duration-300 hover:ease-in-out max-sm:text-[1.70rem] cursor-default bg-transparent'>Abhijeet</p>
            </div>
            <div className='max-sm:w-full bg-transparent'>
                <ul className='inline-flex gap-5 max-sm:float-end max-sm:gap-2 bg-transparent'>
                    <li className='hover:text-gray-400 duration-300 hover:ease-in-out max-sm:hidden cursor-default bg-transparent'><a href="https://www.instagram.com/innovate_cg/" className='bg-transparent cursor-default' target='_blank'>instagram</a> </li>
                    <li className='hover:text-gray-400 duration-300 hover:ease-in-out max-sm:hidden cursor-default bg-transparent'><a href="https://www.linkedin.com/in/abhijeet-mane-041900227/" className='bg-transparent cursor-default' target='_blank'>linkedin</a></li>

                    <li className='max-sm:block sm:hidden max-sm:my-[5px] cursor-default bg-transparent'><a href="https://www.instagram.com/innovate_cg/" className='bg-transparent cursor-default' target='_blank'><IoLogoInstagram className='w-8 fill-white text-2xl bg-transparent'/></a></li>
                    <li className='max-sm:block sm:hidden max-sm:my-[5px] cursor-default bg-transparent'><a href="https://www.linkedin.com/in/abhijeet-mane-041900227/" className='bg-transparent cursor-default' target='_blank'><FaLinkedin className='w-8 fill-white text-2xl bg-transparent'/></a></li>
                </ul>
            </div>
            <div className='max-sm:hidden bg-transparent'>
                <p className='hover:text-gray-400 hover:ease-in-out duration-300 cursor-default bg-transparent'>innovate.cg@yahoo.com</p>
            </div>
        </nav>
    </header>
  )
}
