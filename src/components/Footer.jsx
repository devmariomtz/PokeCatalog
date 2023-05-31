import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary w-full '>
            <div className='flex justify-center'>
                <a href="https://github.com/Martinez-Mario">
                    <img src="src/assets/github.png" alt=""
                         className='w-[4em] invert m-[1em] hover:rotate-[360deg] scale-[1.1] transition-all delay-10 cursor-pointer'/>
                </a>
                <a href="https://twitter.com/MartinezMario__">
                    <img src="src/assets/twitter.png" alt=""
                         className='w-[4em] invert m-[1em] hover:rotate-[360deg] scale-[1.1] transition-all delay-10 cursor-pointer'/>
                </a>
                <a href="https://www.linkedin.com/in/mario-martinez/">
                    <img src="src/assets/linkedin.png" alt=""
                         className='w-[4em] invert m-[1em] hover:rotate-[360deg] scale-[1.1] transition-all delay-10 cursor-pointer'/>
                </a>
            </div>
        </div>
    )
}

export default Footer