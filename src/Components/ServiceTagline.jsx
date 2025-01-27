import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceTagline = () => {

    useGSAP(()=>{
        gsap.from("#box1",{
            opacity:0,
            y:100,
            ease:"none",
            scrollTrigger:{
                trigger:"#box1",
                start:"top 90%",
                end:"top 40%",
                scrub:2,
            }
        })
    })

  return (
    <div className='text-white w-full h-[30rem] flex justify-center items-center'>
        <div id='box1' className='w-auto  h-auto flex flex-col items-center justify-center'>
            <h3 className='font-semibold text-[#f89a52] text-5xl mt-3 font-[font1]'>Special From Us!</h3>
            <h2 className='font-semibold text-7xl font-[font1] mt-3'>Look At IndoLike</h2>
            <h2 className='font-semibold text-7xl font-[font1] mt-3'><span className='text-[#3482ff]'>Top Selling</span> Services</h2>
        </div>
    </div>
  )
}

export default ServiceTagline