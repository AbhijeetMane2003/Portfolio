import React from 'react'
import ProfileImg from "../assets/profile.png"

const PortfolioPdf = 'https://abhijeetmane2003.github.io/Portfolio/Abhijeet_Mane_CV.pdf'

export default function MyProjects() {

    const downloadCV = (url) =>{
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download',fileName)
        aTag.setAttribute('target', '_blank');
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    }

  return (
    <>

    <div className='flex flex-col mt-10 mb-[10vh]' id='about'>
        <div className='h-auto z-0 text-center overflow-hidden '>
            <h2 className='flex items-center justify-center font-bold mt-10'><span className='text-8xl opacity-[0.1] tracking-widest max-vsm:text-6xl'>RESUME</span> <span className='absolute bg-transparent text-5xl max-vsm:text-3xl'>ABOUT ME</span></h2>
        </div>
          
        <div className='flex font-semibold justify-center max-md:flex-col items-center my-16'>     
                <img src={ProfileImg} className='w-48 h-48 border-2 border-white rounded-full mr-20 max-md:mr-0' loading='lazy'/>   
                <div className='leading-[2] z-0 bg-transparent max-md:text-center'>
                        <h2 className='font-medium text-3xl mb-5 max-2xl:w-[20vw] max-3xl:w-[20vw] max-3xl:text-2xl max-xl:mt-5 max-md:text-nowrap max-md:text-center max-md:ml-2 max-xl:w-auto'>PERSONAL INFO</h2>
                        <p> <span className='opacity-[0.9] bg-transparent'>First Name :</span> <span>Abhijeet</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Last Name :</span> <span>Mane</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Age :</span> <span>20 Years</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Nationality  :</span> <span>Indian</span></p>
                        <p> <span className='opacity-[0.9] bg-transparent'>Freelance   :</span> <span>Available</span></p>
                </div>
                <div className='leading-[2] mt-5 max-md:text-center max-md:mt-0'>
                        <p> <span className='opacity-[0.9]'>Address  :</span> <span>Pune, India</span></p>
                        <p> <span className='opacity-[0.9]'>Email   :</span> <br className='max-xl:hidden'/> <span>abhijeetbmane9696@gmail.com</span></p>
                        <p> <span className='opacity-[0.9]'>Languages    :</span> <span>English, Hindi, Marathi </span></p>
                </div>  
        </div>
                <a className='bg-transparent text-white border-2 border-solid hover:bg-white hover:text-black ease-in-out duration-[0.5s]  hover:border-solid rounded-full  relative -left-5 -top-12 font-semibold py-2 max-3xl:px-7  text-center mx-auto w-56 max-md:w-60 max-xl:-top-14 max-md:-top-12 max-md:left-0' onClick={()=>{downloadCV(PortfolioPdf)}}>DOWNLOAD CV</a>  

                <div className='grid grid-cols-3 gap-3 relative max-xl:mt-20 max-xl:m-auto max-xl:gap-x-4 max-sm:grid-cols-2 max-sm:gap-5 max-sm:mx-auto  max-sm:-left-1  max-md:grid-cols-2 max-vsm:grid-cols-2 max-vsm:mx-auto max-vsm:gap-2 mx-auto top-10 max-md:top-0'>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2 max-vsm:w-40'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl max-vsm:text-2xl'>2+</h1> 
                        </div>

                        <div className='text-left my-5 font-normal flex max-vsm:bg-transparent'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm max-vsm:text-xs'>
                                <p>YEARS OF GROUP PROJECTS <br /> EXPERIENCE</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2 max-vsm:w-40'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl max-vsm:text-2xl'>5+</h1> 
                        </div>

                        <div className='text-left my-5 font-normal flex max-vsm:bg-transparent'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm max-vsm:text-xs'>
                                <p>MONTH'S OF INDUSTRY <br /> EXPERIENCE</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2 max-vsm:w-40'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl max-vsm:text-2xl'>50+</h1> 
                        </div>

                        <div className='text-left my-5 font-normal flex max-vsm:bg-transparent'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm max-vsm:text-xs'>
                                <p>ASSETS <br />  AND PROJECTS</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2 max-vsm:w-40'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl max-vsm:text-2xl'>10+</h1> 
                        </div>
                        <div className='text-left my-5 font-normal flex max-vsm:bg-transparent'>
                            <div className='w-9 py-3 mr-2'>
                            <hr /> 
                            </div>
                            <div className='max-3xl:text-sm max-vsm:text-xs'>
                                <p>SKILL'S <br /> AND HOBBIE'S</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2 max-vsm:w-40'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl max-vsm:text-2xl'>5+</h1> 
                        </div>
                        <div className='text-left my-5 font-normal flex max-vsm:bg-transparent'>
                            <div className='w-9 py-3 mr-2'>
                               <hr />     
                            </div>
                            <div className='max-3xl:text-sm max-vsm:text-xs'>
                                <p>COMPLETED <br /> COURSE AND TRAINING</p>
                            </div>
                        </div>
                </div>

                <div className='border-[1px] border-gray-800 w-48 max-3xl:w-44 max-3xl:h-36 pl-5 py-2 max-vsm:w-40'>
                        <div className='text-4xl'>
                            <h1 className='font-extrabold max-3xl:text-3xl max-vsm:text-2xl'>3+</h1> 
                        </div>
                        <div className='text-left my-5 font-normal flex max-vsm:bg-transparent'>
                            <div className='w-9 py-3 mr-2'>
                                <hr /> 
                            </div>
                            <div className='max-3xl:text-sm max-vsm:text-xs'>
                                <p>AWARDS <br /> WON</p>
                            </div>
                        </div>
                </div>

            </div>
    </div>
    </>
  )
}
