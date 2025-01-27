import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Services = () => {

    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    const box4 = useRef();

    useGSAP(()=>{
        gsap.from(box1.current, {
            opacity:0,
            x:-200,
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:box1.current,
                start:"top 70%",
                end:"top 20%",
            }
        })
        gsap.from(box2.current, {
            opacity:0,
            x:200,
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:box2.current,
                start:"top 70%",
                end:"top 20%",
            }
        })   
        gsap.from(box3.current, {
            opacity:0,
            x:-200,
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:box3.current,
                start:"top 80%",
                end:"top 40%",
            }
        })   
        gsap.from(box4.current, {
            opacity:0,
            x:200,
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:box4.current,
                start:"top 80%",
                end:"top 40%",
            }
        })      
    });

  return (
    <div className='relative w-full min-h-screen flex flex-col gap-3 items-center justify-center'>
        <div className='relative flex gap-3 w-[80%] h-[30rem] '>
            <div ref={box1} className='relative w-[55%] h-full border border-gray-400 rounded-[2rem]'>
                <img className='opacity-[70%] hover:opacity-[50%] w-full h-full object-cover rounded-[2rem]' src="/assets/ServiceImages/smm.webp" alt="" />
                <h2 className='text-white pointer-events-none font-semibold font-[font1] absolute top-[60%] left-[28%]  text-6xl'>SMM Panel</h2>
            </div>
            <div ref={box2} className='relative w-[45%] h-full border border-gray-400 rounded-[2rem]'>
                <img className='opacity-[70%] w-full h-full hover:opacity-[50%] object-cover rounded-[2rem]' src="/assets/ServiceImages/hosting.jpeg" alt="" />
                <h2 className='text-white pointer-events-none font-semibold font-[font1] absolute top-[60%] left-[15%]  text-5xl'>Domain & Hosting</h2>
            </div>
            
        </div>
        <div className='relative flex gap-3 w-[80%] h-[30rem] '>
            <div ref={box3} className='relative w-[45%] h-full border border-gray-400 rounded-[2rem]'>
                <img className=' opacity-[70%] w-full h-full hover:opacity-[50%] object-cover rounded-[2rem]' src="/assets/ServiceImages/seo.jpg" alt="" />
                <h2 className='text-white pointer-events-none font-semibold font-[font1] absolute top-[70%] left-[28%]  text-6xl'>Web SEO</h2>
            </div>
            <div ref={box4} className='relative w-[55%] h-full border border-gray-400 rounded-[2rem]'>
                <img className='opacity-[60%] w-full h-full hover:opacity-[40%] object-cover rounded-[2rem]' src="/assets/ServiceImages/webDesign.avif" alt="" />
                <h2 className='text-white pointer-events-none font-semibold font-[font1] absolute top-[70%] left-[20%]  text-6xl'>Web Designing</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Services