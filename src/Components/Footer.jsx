import React from 'react'

const Footer = () => {
  return (
    <div className='w-full xl:h-[20rem] h-[15rem] mt-20 bg-gradient-to-br from-gray-600 to-gray-900 relative bottom-0 flex justify-between items-center p-[5rem]'>
        <div className='flex flex-col gap-2 h-auto w-[20%] items-center justify-center'>
            <img className='w-[170px] h-[63px] ' src="/assets/logoAnimated.webp" alt="" />
            <p className='text-xs text-blue-300'>Best agency For Your SMM And web Services</p>
            <p className='text-xs text-white text-center'>Best Web Designing Agency And India's Top Rated Smm Panel</p>
        </div>

        <div className='flex flex-col gap-2 h-auto w-[20%] items-center justify-center'>
            <h3 className='text-orange-500 text-xl font-semibold mb-3'>Pages</h3>
            <p className='text-white text-sm'>Home</p>
            <p className='text-white text-sm'>Services</p>
            <p className='text-white text-sm'>Contact</p>
            <p className='text-white text-sm'>About</p>
        </div>

        <div className='flex flex-col gap-2 h-auto w-[20%] items-center justify-center'>
            <h3 className='text-orange-500 text-xl font-semibold mb-3'>Services</h3>
            <p className='text-white text-sm'>Smm Panel</p>
            <p className='text-white text-sm'>Internship</p>
            <p className='text-white text-sm'>Website Design</p>
            <p className='text-white text-sm'>All Services</p>
        </div>

        <div className='flex flex-col gap-2 h-auto w-[20%] items-center justify-center'>
            <a className='text-blue-400' href="">www.indolike.com</a>
            <p className='text-white text-sm font-[font1]'>support@indolike.com</p>
        </div>
    </div>
  )
}

export default Footer