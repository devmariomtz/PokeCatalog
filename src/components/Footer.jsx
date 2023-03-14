import React from 'react'

const Footer = () => {
  return (
    <div  className='bg-primary w-full '>
      <div className='flex justify-center'>
        <img src="src/assets/github.png" alt="" className='w-[4em] invert m-[1em] hover:rotate-[360deg] scale-[1.1] transition-all delay-10 cursor-pointer'/>
        <img src="src/assets/twitter.png" alt="" className='w-[4em] invert m-[1em] hover:rotate-[360deg] scale-[1.1] transition-all delay-10 cursor-pointer'/>
        <img src="src/assets/linkedin.png" alt="" className='w-[4em] invert m-[1em] hover:rotate-[360deg] scale-[1.1] transition-all delay-10 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Footer