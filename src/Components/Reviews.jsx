import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {

    const reviewRef1 = useRef();
    const reviewRef2 = useRef();

    useGSAP(()=>{
        gsap.from(reviewRef1.current,{
            opacity:0,
            y:100,
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:reviewRef1.current,
                start:"top 80%",
                end:"top 30%",
            }
        })
        gsap.from(reviewRef2.current,{
            opacity:0,
            y:100,
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:reviewRef2.current,
                start:"top 80%",
                end:"top 30%",
            }
        })
    })

  return (
    <div className='w-full min-h-screen flex gap-8 items-center justify-center'>
        <div ref={reviewRef1} className='w-[30%] h-auto  flex flex-col gap-8 justify-center items-center'>

            <div className='w-[90%] bg-white min-h-[15rem] rounded-3xl p-5'>
                <h2 className='text-[#3482ff] font-bold text-3xl font-[font1] mb-3'>Himanshu <span className='text-xl '>⭐⭐⭐⭐⭐</span> </h2>
                <p className='text-gray-800 font-semibold text-md'>I used Indolike Web design Service for developing my portfolio website, and I couldn’t be happier. The design is sleek, professional, and responsive. Their team understood my vision, delivered on time, and provided excellent support throughout the process.</p>
            </div>
            <div className='w-[90%] bg-white min-h-[15rem] rounded-3xl p-5'>
                <h2 className='text-[#3482ff] font-bold text-3xl font-[font1] mb-3'>Divya <span className='text-xl '>⭐⭐⭐⭐</span> </h2>
                <p className='text-gray-800 font-semibold text-md'>I’ve been using Indolike for SMM services, and the experience has been fantastic. Their platform is easy to use, offers quick delivery, and provides genuine results. Excellent customer support, making it a reliable choice!</p>
            </div>
        </div>

        <div ref={reviewRef2} className='w-[30%] h-auto  flex flex-col gap-8 justify-center items-center'>

            <div className='w-[90%] bg-white min-h-[15rem] rounded-3xl p-5'>
                <h2 className='text-[#3482ff] font-bold text-3xl font-[font1] mb-3'>Mansu <span className='text-xl '>⭐⭐⭐⭐⭐</span> </h2>
                <p className='text-gray-800 font-semibold text-md'>I tryed Indolike’s SEO services, and the results have been outstanding. My website’s ranking has improved significantly, driving more organic traffic. Their team is professional, responsive, and delivers effective strategies. Highly recommend!</p>
            </div>
            <div className='w-[90%] bg-white min-h-[15rem] rounded-3xl p-5'>
                <h2 className='text-[#3482ff] font-bold text-3xl font-[font1] mb-3'>Abhishek <span className='text-xl '>⭐⭐⭐</span> </h2>
                <p className='text-gray-800 font-semibold text-md'>My internship at Indolike was an incredible learning experience. I gained hands-on skills in web development, worked on real projects, and received valuable mentorship. The team is supportive, making it an enriching environment for growth.</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews