import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);

const WhyIndolike = () => {
    const box = useRef();
    const row1 = useRef();
    const row2 = useRef();
    const row3 = useRef();

    useGSAP(()=>{
        gsap.to(row1.current, {
            transform:"translateX(-5%)",
            ease:"none",
            scrollTrigger:{
                trigger:row1.current,
                start:"top 80%",
                scrub:2,
            }
        })
        gsap.to(row2.current, {
            transform:"translateX(5%)",
            ease:"none",
            scrollTrigger:{
                trigger:row2.current,
                start:"top 80%",
                scrub:2,
            }
        })
        gsap.to(row3.current, {
            transform:"translateX(-10%)",
            ease:"none",
            scrollTrigger:{
                trigger:row3.current,
                start:"top 80%",
                scrub:2,
            }
        })
        gsap.from(box.current, {
            transform:"translateY(10%)",
            opacity:0,
            ease:"power1.in",
            scrollTrigger:{
                trigger:box.current,
                start:"top 80%",
                end:"top 50%",
                scrub:2,
            }
        })
    })

  return (
    <div className='w-full h-auto  relative overflow-x-hidden mb-5'>
        <div ref={box} className='absolute top-[18%] left-10 w-[30%] z-20'>
            <h4 className='text-[#1699fa] text-sm mb-3 pl-5'>Marketplace</h4>
            <h2 className='text-white font-[font1] text-5xl font-semibold '>IndoLike is Best</h2>
            <h2 className='text-white font-[font1] text-5xl font-semibold'>SMM And SAAS</h2>
            <h2 className='text-white font-[font1] text-5xl font-semibold'>Agency Since 2k23</h2>
            <p className='text-gray-300 mt-3 font-[font1] text-xl'>Indolike is the best SMM and SaaS agency since 2023, offering top-notch social media marketing and software solutions to boost your business’s online presence and growth with proven results.</p>
        </div>

        <div ref={row1} className='relative flex gap-2  pl-[30%] top-5  w-[150%]'>
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/1.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/2.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/3.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/13.avif" alt="" />    
        </div>

        <div ref={row2} className='relative flex gap-2  pl-[20%] top-5 mt-2  w-[150%]'>
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/6.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/5.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/4.avif" alt="" /> 
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/7.avif" alt="" /> 
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/14.avif" alt="" />  
        </div>

        <div ref={row3} className='relative flex gap-2 top-5 mt-2 mb-5 w-[150%]'>
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/8.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/9.avif" alt="" />
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/10.avif" alt="" />   
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/11.avif" alt="" /> 
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/12.avif" alt="" /> 
            <img className='w-[25rem] h-[20rem] rounded-xl object-cover' src="/assets/ScrollSlider/15.avif" alt="" /> 
        </div>

        <div className='absolute top-5 left-[20%] w-[70rem] h-[20rem]  bg-gradient-to-r from-black to-transparent  z-10'></div>
        {/* <div class="absolute top-0 left-0 w-[40%] h-[60%] rounded-full bg-blue-50 bg-gradient-radial from-black to-transparent z-10 "></div> */}

    </div>
  )
}

export default WhyIndolike