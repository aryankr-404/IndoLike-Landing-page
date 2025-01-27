import React from 'react'

const Navbar = () => {
  return (
    <div className='z-50 fixed top-0 w-full h-[64px] bg-black bg-opacity-[0.8] backdrop-blur-[10px] flex justify-between items-center px-10'>
        <div className='flex gap-4 items-center'>
          <img className='h-[2rem]' src="./logo.png" alt="" />
            <h3 className='font-["font1"] text-white text-xl font-extrabold'>iNDOLiKE</h3>
        </div>
        <div className='flex gap-8'>
            <a className='text-gray-300 hover:text-white text-sm' href="#">Home</a>
            <a className='text-gray-300 hover:text-white text-sm' href="https://indolike.com/about/">About</a>
            <a className='text-gray-300 hover:text-white text-sm' href="">Support</a>
            <a className='text-gray-300 hover:text-white text-sm' href="https://indolike.com/services/">Services</a>
            <a className='text-gray-300 hover:text-white text-sm' href="https://indolike.com/smm-panel/">SMM panel</a>
            <a className='text-gray-300 hover:text-white text-sm' href="https://indolike.com/contact/">Contact</a>
    
        </div>
        <div className='flex gap-4'>
            <button className='text-gray-300 hover:text-white font-semibold cursor-pointer text-lg'>Log in</button>
            <button className='font-semibold cursor-pointer text-lg px-4 py-1 bg-white text-black rounded-3xl'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar