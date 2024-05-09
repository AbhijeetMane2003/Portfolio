import React from 'react'
import MyWorkGallery from '../components/MyWorkGallery'

export default function MyWork() {
  return (
    <div className='h-full mb-48 items-center w-screen m-auto mt-[8vh]'>
      <hr className='z-[1] w-[40%] m-auto opacity-[0.10] mb-14'/>
      <h2 className='2xl:text-2xl font-semibold text-center max-3xl:text-3xl max-vsm:text-3xl'>My Work</h2>
      <MyWorkGallery />
    </div>
  )
}
