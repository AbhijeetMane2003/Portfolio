import React from 'react'
import cv from '/Abhijeet_Mane_CV.pdf'
import profile from '../assets/profile.png'

export default function MyProjects() {
  return (
    <>
    {/* <div className='absolute h-60 w-60 border-[6px] bg-transparent border-white -left-28 rounded-br-[2.5rem] rotate-45 border-dotted max-md:-left-44 max-sm:hidden max-xl:-left-40 max-xl:rotate-12'></div> */}
    <div className='flex justify-between flex-col mx-auto w-screen mt-[15vh]' id='AboutMe'>
        <div className='h-auto z-0 text-center overflow-hidden '>
            <h2 className='flex items-center justify-center font-bold'><span className='text-8xl opacity-[0.1] tracking-widest max-vsm:text-6xl'>RESUME</span> <span className='absolute bg-transparent text-5xl max-vsm:text-3xl'>ABOUT ME</span></h2>
        </div>
          
        <div className='flex font-semibold justify-center max-xl:flex-col my-16'>        
                <div className='leading-[2.5] z-0 bg-transparent max-xl:m-auto max-xl:text-center'>
                        <h2 className='font-medium text-3xl mb-5 max-2xl:w-[20vw] max-3xl:w-[20vw] max-3xl:text-2xl max-xl:mt-5 max-md:text-nowrap max-md:text-center max-md:ml-2 max-xl:w-auto'>PERSONAL INFO</h2>
                        <p> <span className='opacity-[0.9] bg-transparent'>First Name :</span> <span>Abhi</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Last Name :</span> <span>Mane</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Age :</span> <span>20 Years</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Nationality  :</span> <span>Indian</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Freelance   :</span> <span>Available</span></p>
                        <a href="/" className='bg-transparent text-white border-2 border-solid hover:bg-white hover:text-black ease-in-out duration-[0.5s]  hover:border-solid rounded-full px-10 relative top-4 font-semibold py-2 max-3xl:px-7 max-xl:hidden' download={cv}>DOWNLOAD CV</a>
                </div>
                <div className='leading-[2] mr-28 my-14 max-2xl:mr-20 max-3xl:mr-14 max-xl:m-auto max-xl:mt-5 max-xl:text-center'>
                        <p> <span className='opacity-[0.9]'>Address  :</span> <span>Pune, India</span></p>
                        <p> <span className='opacity-[0.9]'>Phone  :</span> <span>+91 9766094178</span></p>
                        <p> <span className='opacity-[0.9]'>Age :</span> <span>20 Years</span></p>
                        <p> <span className='opacity-[0.9]'>Email   :</span> <br className='max-xl:hidden'/> <span>abhi007mane@gmail.com</span></p>
                        <p> <span className='opacity-[0.9]'>Languages    :</span> <span>English, Hindi, Marathi </span></p>
                        <a href="/" className='bg-transparent text-white border-2 border-solid hover:bg-white hover:text-black ease-in-out duration-[0.5s]  hover:border-solid rounded-full px-10 relative top-4 font-semibold py-2 max-3xl:px-7 max-xl:block hidden max-xl:top-7' download={cv}>DOWNLOAD CV</a>
                </div>    

                <div className='grid grid-cols-3 gap-4 relative max-xl:mt-20 max-xl:m-auto max-xl:gap-x-4 max-sm:grid-cols-1 max-sm:gap-5 max-sm:mx-auto  max-sm:-left-1  max-md:grid-cols-2 max-vsm:grid-cols-1 max-vsm:mx-auto max-vsm:gap-5'>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl'>2+</h1> 
                        </div>

                        <div className='text-left my-5 font-normal flex'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm'>
                                <p>YEARS OF GROUP PROJECTS <br /> EXPERIENCE</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl'>5+</h1> 
                        </div>

                        <div className='text-left my-5 font-normal flex'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm'>
                                <p>MONTH'S OF INDUSTRY <br /> EXPERIENCE</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl'>50+</h1> 
                        </div>

                        <div className='text-left my-5 font-normal flex'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm'>
                                <p>ASSETS <br />  AND PROJECTS</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl'>10+</h1> 
                        </div>
                        <div className='text-left my-5 font-normal flex'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm'>
                                <p>SKILL'S <br /> AND HOBBIE'S</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl'>5+</h1> 
                        </div>
                        <div className='text-left my-5 font-normal flex'>
                            <div className='w-9 py-3 mr-2'>
                               <hr />     
                            </div>
                            <div className='max-3xl:text-sm'>
                                <p>COMPLETED <br /> COURSE AND TRAINING</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl'>3+</h1> 
                        </div>
                        <div className='text-left my-5 font-normal flex'>
                            <div className='w-9 py-3 mr-2'>
                                <hr /> 
                            </div>
                            <div className='max-3xl:text-sm'>
                                <p>AWARDS <br /> WON</p>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
    {/* <div className='absolute h-60 w-60 border-[6px] bg-transparent border-white right-0 -mt-36 rounded-tl-[20rem] max-md:hidden border-dotted max-md:-mt-80 max-md:-right-36 max-md:rotate-[70deg]'></div> */}
    </>
  )
}
