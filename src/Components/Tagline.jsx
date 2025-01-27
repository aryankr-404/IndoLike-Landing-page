import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tagline = () => {

    useGSAP(()=>{
        gsap.from("#box",{
            opacity:0,
            y:100,
            ease:"none",
            scrollTrigger:{
                trigger:"#box",
                start:"top 90%",
                end:"top 50%",
                scrub:2,
            }
        })
    })
    
    

  return (
    <div className='text-white w-full h-[30rem] flex justify-center items-center mb-[5rem]'>
        <div id='box' className='w-auto  h-auto flex flex-col items-center justify-center'>
            <h3 className='font-semibold text-[#f89a52] text-5xl mt-3 font-[font1]'>iNDOLiKE SERVICES</h3>
            <h2 className='font-semibold text-7xl font-[font1] mt-3'>IndoLike Provides</h2>
            <h2 className='font-semibold text-7xl font-[font1] mt-3'>Best <span className='text-[#3482ff]'>Services</span> In Market</h2>
            <h5 className=' text-md font-[font1] text-gray-400 mt-3'>Explore Indolike Comprehensive SMM and SaaS Services to Drive Growth and Enhance Online Presence</h5>
        </div>
    </div>
  )
}

export default Tagline