import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const CustomerReviewTagline = () => {

    useGSAP(()=>{
        gsap.from("#box3",{
            opacity:0,
            y:100,
            ease:"none",
            scrollTrigger:{
                trigger:"#box3",
                start:"top 90%",
                end:"top 50%",
                scrub:2,
            }
        })
    })

  return (
    <div className='text-white w-full h-[20rem] flex justify-center items-center'>
        <div id='box3' className='w-auto  h-auto flex flex-col items-center justify-center'>
            <h3 className='font-semibold text-[#f89a52] text-xl mt-3 font-[font1]'>CUSTOMER REVIEWS</h3>
            <h2 className='font-semibold text-6xl font-[font1] mt-3'>Some Words</h2>
            <h2 className='font-semibold text-6xl font-[font1] mt-3'>From Our <span className='text-[#3482ff]'>Customers</span></h2>
        </div>
    </div>
  )
}

export default CustomerReviewTagline