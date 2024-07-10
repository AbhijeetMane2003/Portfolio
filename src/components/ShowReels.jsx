import React from 'react'

export default function ShowReels() {
  return (
    <div className='flex justify-between flex-col h-full items-center w-screen m-auto mt-[23vh]'>
      <hr className='z-[1] w-[40%] m-auto opacity-[0.10] mb-14'/>
      <h2 className='2xl:text-2xl font-semibold text-center max-3xl:text-3xl max-vsm:text-3xl mb-2'>SHOW REELS</h2>
      <div className='mt-2 w-full flex justify-center' style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe 
          src="https://player.vimeo.com/video/979727061?h=3c2fd5a50f" 
          frameBorder="0" 
          allow="autoplay; fullscreen" 
          allowFullScreen 
          className='absolute top-0 w-[70%] h-[70%] max-md:w-[90%] max-md:h-[90%]'
        ></iframe>
      </div>
    </div>
  )
}
