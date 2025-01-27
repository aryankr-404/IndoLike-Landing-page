import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Tagline from './Components/Tagline'
import WhyIndolike from './Components/WhyIndolike'
import Services from './Components/Services'
import ServiceTagline from './Components/ServiceTagline'
import CustomerReviewTagline from './Components/CustomerReviewTagline'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='w-full min-h-screen bg-black relative overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Tagline />
      <WhyIndolike />
      <ServiceTagline />
      <Services />
      <CustomerReviewTagline />
      <Reviews />
      <Footer />
    </main>
  )
}

export default App