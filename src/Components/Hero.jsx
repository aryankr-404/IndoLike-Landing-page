import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    
    const scrollContainerRef = useRef(null);
    const heroTextRef = useRef(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
    
        // Duplicate the content for seamless scrolling
        const content = container.innerHTML;
        container.innerHTML += content;  // Duplicate the entire content

        // Get the width of the container (after duplication)
        const containerWidth = container.scrollWidth / 2; // Since we duplicated, divide the width by 2

          gsap.to(container, {
            x: -containerWidth, // Move to the left by the width of the container
            duration: 70, // Adjust speed here (higher number = slower)
            repeat: -1, // Infinite loop
            ease: 'none', // No easing, to maintain constant speed
            delay: 0, // Optional delay before the animation starts
          });
        }
    }, []);

    useGSAP(()=>{
      gsap.from(heroTextRef.current, {
        transform: 'translateX(-10%)',
        ease:"power1.in",
        opacity:0,
      })
    })

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div ref={heroTextRef} className='relative top-[25%] h-auto w-[60%] pl-[4rem] pt-[2rem] flex flex-col z-10'>
            <h2 className='text-white font-semibold xl:text-8xl text-6xl  font-[font1]'>Leading SMM &</h2>
            <h2 className='text-white font-semibold xl:text-8xl text-6xl  font-[font1]'>SAAS agency</h2>
            <h4 className=' text-xl text-gray-400 font-[font1] mt-4'>Best SMM and SaaS Agency for Boosting Social </h4>
            <h4 className=' text-xl text-gray-400 font-[font1]'>Media Growth and Online Business Success</h4>
            <a href="https://indolike.com/smm-panel/"><button className='font-semibold cursor-pointer text-lg px-4 py-1 bg-white text-black rounded-3xl mt-4'>Our SMM</button></a>
        </div>
        <div className='absolute top-0 right-0 h-screen w-[70%] z-0'>
            <video className='w-full h-full object-cover' autoPlay loop muted >
                <source src="/assets/hero-video.webm" type="video/webm" />
            </video>
        </div>
        <div className="absolute top-0 right-0 h-screen w-[70%] bg-gradient-to-r from-black to-transparent z-0" />

        <div className="w-full h-[5rem] absolute bottom-0 z-10 ">
            <div 
                ref={scrollContainerRef} // Attach the ref to the scroll container
                className="flex gap-[10rem] items-center px-10 py-4 w-full h-full"
            >
                <img className="h-[1.5rem]" src="/assets/Slider-img/airbnb.webp" alt="Airbnb" />
                <img className="h-[1.5rem]" src="/assets/Slider-img/amazon.webp" alt="Amazon" />
                <img className="h-[1.5rem]" src="/assets/Slider-img/google.webp" alt="Google" />
                <img className="h-[1.5rem]" src="/assets/Slider-img/Paypal.webp" alt="Paypal" />
                <img className="h-[1.5rem]" src="/assets/Slider-img/slack.webp" alt="Slack" />
                
            </div>
        </div>
    </div>
  )
}

export default Hero