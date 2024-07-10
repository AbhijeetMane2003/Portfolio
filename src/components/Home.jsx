import React from 'react'
import ReactPlayer from 'react-player'
import MainVideo from '../assets/Main_Video.mp4'


export default function Home() {

  return (
    <> 
      <ReactPlayer url={MainVideo} className='absolute top-0 min-w-[100%] max-md:w-[100vw] max-sm:max-w-[100vw] min-h-[100%] cursor-default'  controls={false} loop={true} muted={true} playing={true} playsInline={true}/>

      <div className='flex justify-between flex-col items-center relative w-[80%] m-auto h-screen scroll-container bg-transparent'>
        <div className='w-full h-auto font-normal text-5xl 2xl:text-6xl max-2xl:text-4xl my-auto max-sm:text-4xl 2xl:leading-[1.15] bg-transparent z-0 cursor-default mb-[5vh]'>
            <h3 className='bg-transparent font-normal 2xl:text-2xl max-3xl:text-xl animate__animated animate__fadeIn  animate__slower'>HEY THERE !</h3>
            <h2 className='bg-transparent font-bold max-3xl:text-3xl animate__animated animate__fadeIn  animate__slower max-2xl:my-1'>I'M ABHIJEET MANE</h2>
            <p className='bg-transparent 2xl:text-4xl max-3xl:text-2xl mr-56 animate__animated animate__fadeIn  animate__slower max-md:text-xl max-sm:text-xl max-sm:w-[70vw] max-md:mr-[1vw]'>work as a Game Asset and 3D Artist with expertise in
  modeling and lighting. Skilled in Maya, Blender, UnrealEngine 5 and many more...</p>
            
            <div className='text-right text-6xl 2xl:text-7xl max-sm:mt-5 max-sm:relative max-sm:bottom-10 py-14 bg-transparent animate__animated animate__fadeIn animate__slower animate__repeat-3'>
              <a href="#about" className='bg-transparent' style={{ display: 'inline-block', paddingRight: '10%', paddingLeft: '10%' }}>
                <h2 className='bg-transparent'>&darr;</h2>
              </a> 
          </div>
        </div>
      </div>
    </>
)
}
