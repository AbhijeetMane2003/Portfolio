import React from 'react'
import { IoBriefcaseSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";

export default function EducationAndExperience() {
  return (
    <>
      {/* <div className='absolute h-60 w-60 border-[6px] bg-transparent border-white -left-28 -mt-36  rounded-br-[2.5rem] rotate-12 border-dotted max-md:-left-32 max-sm:hidden max-xl:-left-40'></div> */}
      <div className='flex justify-between flex-col h-full items-center w-screen m-auto mt-[8vh]'>
            {/* <div className='w-[30rem] opacity-[0.2] m-auto mt-5 h-4 py-8 mb-4 max-sm:w-72 max-md:w-72 max-vsm:hidden'>
            </div> */}
            <hr className='z-[1] w-[40%] m-auto opacity-[0.10] mb-14'/>
            <h2 className='2xl:text-2xl font-semibold text-center max-3xl:text-3xl max-vsm:text-3xl'>EXPERIENCE & EDUCATION</h2>

            <div className='flex mt-28 max-md:mt-16 max-3xl:mt-24 max-md:flex-col max-xl:flex-col max-xl:m-auto max-xl:mt-20'>
              <div className='h-auto w-[50%] max-xl:w-auto max-md:w-auto'>
                <div className='flex h-52 max-3xl:h-[17rem] max-sm:mb-20 max-vsm:h-auto max-vsm:mb-10'>
                    <div className='w-20'>
                        <div className='rounded-full w-11 h-10 bg-white overflow-hidden m-auto text-center'>
                        <IoBriefcaseSharp className='flex my-2 mx-auto fill-black text-2xl bg-transparent'/>
                        
                        </div>
                          <hr className='rotate-90  w-32 relative -left-6 top-16 opacity-[0.5]'/>
                    </div>

                    <div>
                      <div className='mb-3'>
                        <span className='bg-gray-700 px-2 rounded-full font-medium text-xs opacity-[0.9]'>Duration - 5+ Month's</span>
                      </div>
                      <div className='mb-3'>
                        <p className='2xl:text-xl'><span className='font-bold'>Game Asset Internship </span>- GENERALIST</p>
                      </div>

                      <ul className='font-medium mb-3' style={{ listStyleType: 'circle' }}>
                        <li>Created 3D models and assisted with texturing, lighting, and rendering. </li>
                        <li>Collaborated with teams to meet project deadlines and requirements. </li>
                        <li>Received praise for attention to detail and meeting deadlines.</li>
                      </ul>

                    
                      <a href="https://medleysworld.com/" target='_blank' className='bg-white text-black px-2 font-medium'>website</a>
                    </div>

                </div>

                <div className='flex h-60  max-md:mt-3 max-md:mb-10 max-sm:mb-20 max-vsm:h-auto'>
                    <div className='w-20'>
                        <div className='rounded-full w-11 h-10 bg-white overflow-hidden m-auto text-center'>
                          <IoBriefcaseSharp className='flex my-2 mx-auto fill-black text-2xl bg-transparent'/>
                        </div>
                        <hr className='rotate-90 w-40 relative -left-10 top-20 opacity-[0.5]'/>
                    </div>

                    <div>
                    <div className='mb-3'>
                      <span className='bg-gray-700 px-2 rounded-full font-medium text-xs opacity-[0.9]'>Duration - 2+ Year's</span>
                    </div>
                    <div className='mb-3'>
                      <p className='2xl:text-xl'><span className='font-bold'>Group Projects Exprience </span>- LIGHTING ARTIST</p>
                    </div>

                      <ul className='font-medium mb-3' style={{ listStyleType: 'circle' }}>
                        <li>Led and contributed to diverse Maya group projects effectively.</li>
                        <li>Expertise in lighting techniques for captivating 3D scenes.</li>
                        <li>Overcame technical challenges, optimized workflow, ensured project success.</li>
                      </ul>

                    </div>

                </div>

              </div>

              <div className='w-[50%] max-xl:w-auto max-md:w-auto'>

                <div className='flex h-32 max-vsm:h-auto'>
                      <div className='w-20'>
                        <div className='rounded-full w-11 h-10 bg-white overflow-hidden m-auto text-center'>
                          <HiAcademicCap className='flex my-2 mx-auto fill-black text-2xl bg-transparent'/>
                        </div>
                          <hr className='rotate-90  w-20 relative top-10 opacity-[0.5]'/>
                      </div>

                    <div>
                      <div className='mb-3'>
                        <span className='bg-gray-700 px-2 rounded-full font-medium text-xs opacity-[0.9]'>2024</span>
                      </div>
                        <p className='2xl:text-xl mb-1'><span className='font-bold'>BACHELOR DEGREE</span>- <a href="https://ycmou.digitaluniversity.ac/" target='_blank' className='underline px-2'>YASHWANTRAO CHAVAN MAHARASHTRA OPEN UNIVERSITY</a></p>
                        <p className='font-medium'>B.Sc Media Graphics And Animation</p>
                    </div>
                </div>

                <div className='flex h-32 max-vsm:h-auto my-4 max-sm:mt-24 max-sm:mb-16 max-vsm:my-10'>
                      <div className='w-20'>
                        <div className='rounded-full w-11 h-10 bg-white overflow-hidden m-auto text-center'>
                          <HiAcademicCap className='flex my-2 mx-auto fill-black text-2xl bg-transparent'/>
                        </div>
                          <hr className='rotate-90  w-20 relative top-10 opacity-[0.5]'/>
                      </div>

                    <div>
                      <div className='mb-3'>
                        <span className='bg-gray-700 px-2 rounded-full font-medium text-xs opacity-[0.9]'>2021</span>
                      </div>
                        <p className='2xl:text-xl mb-1'><span className='font-bold'>HIGHER SECONDARY CERTIFICATE</span>- <a href="https://bcud.unipune.ac.in/utilities/college_search/CAAP020190_ENG/Pune_University_College" target='_blank' className='underline px-2'>JIJAMATA MAHAVIDYALAYA, SARATI</a></p>
                        <p className='font-medium'>12th Science</p>
                    </div>
                </div>

                <div className='flex h-32 max-vsm:h-auto'>
                      <div className='w-20'>
                        <div className='rounded-full w-11 h-10 bg-white overflow-hidden m-auto text-center'>
                          <HiAcademicCap  className='flex my-2 mx-auto fill-black text-2xl bg-transparent'/>
                        </div>
                          <hr className='rotate-90  w-20 relative top-10 opacity-[0.5]'/>
                      </div>

                    <div>
                    <div className='mb-3'>
                        <span className='bg-gray-700 px-2 rounded-full font-medium text-xs opacity-[0.9]'>2019</span>
                    </div>
                        <p className='2xl:text-xl mb-1'><span className='font-bold'>SCHOOL CERTIFICATE</span>- <a href="https://bcud.unipune.ac.in/utilities/college_search/CAAP020190_ENG/Pune_University_College" target='_blank' className='underline px-2'>JIJAMATA VIDYALAYA, SARATI</a></p>
                        <p className='font-medium'>1-10th</p>
                    </div>
                </div>

              </div>
            </div>
      </div>
    </>
  )
}
