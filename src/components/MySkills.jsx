import React from 'react'

export default function MySkills() {
  return (
    <div className='flex justify-between flex-col items-center w-screen mt-[20vh]'>
        {/* <div className='w-[30rem] opacity-[0.2] h-4 py-4 mt-9 z-[1] max-sm:absolute max-sm:mt-10 max-sm:w-72 max-md:w-72 max-vsm:hidden'>
        </div> */}
        {/* <div className='relative -top-[20vh] max-3xl:-top-[40vh] max-md:-top-56 max-sm:-top-36 max-2xl:-top-60'> */}
            <hr className='z-[1] w-[40%] m-auto opacity-[0.10] mb-14'/>
            <h2 className='mb-20 2xl:text-2xl font-semibold text-center max-3xl:text-3xl max-vsm:text-3xl'>MY SKILLS</h2>
            <div className='grid grid-cols-4 gap-4 max-md:gap-x-10 max-md:grid-cols-2 max-sm:mx-auto max-vsm:gap-x-5'>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":80}} role="progressbar">80%</div>
                    <p className='my-4'>AUTODESK MAYA</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":60}} role="progressbar">60%</div>
                    <p className='my-4'>UNREAL ENGINE 5</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":70}} role="progressbar">70%</div>
                    <p className='my-4'>BLEANDER</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text- max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":85}} role="progressbar">85%</div>
                    <p className='my-4'>SUBSTANCE PAINTER</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":60}} role="progressbar">60%</div>
                    <p className='my-4'>ZEBRUSH</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":80}} role="progressbar">80%</div>
                    <p className='my-4'>ARNOLD</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":90}} role="progressbar">90%</div>
                    <p className='my-4'>ADOBE CREATIVE SUIT</p>
                </div>

                <div className='my-16 max-3xl:-mt-5 text-center mx-auto max-md:text-nowrap max-vsm:text-wrap max-vsm:mx-0'>
                    <div className="radial-progress bg-transparent  text-white border-[15px] border-black  font-bold text-xl" style={{"--value":90}} role="progressbar">90%</div>
                    <p className='my-4'>AI APPLICATIONS</p>
                </div>



            </div>
        {/* </div> */}
        
    </div>
  )
}
