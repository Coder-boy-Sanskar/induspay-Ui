import React from 'react'
import Header from '../../components/header/Header'
const Hero = () => {
  return (
    <section className='contain hero-container'>
      <Header/>
      <div className=' hero'>
      <div className='hero-content'>
      <div style={{fontSize:"13px",color:"#F64B4B",fontWeight:"700"}}>Let&apos;s shift your business</div>
      <div style={{fontSize:"60px",color:"#161C2D",fontWeight:"700",lineHeight:'65px',letterSpacing:"-2px",marginTop:"25px"}}>
      Shift your business<br/> fast with Shade Pro.
      </div>
       <div className='hero-simp-text'>
       With lots of unique blocks, you can easily build a page<br/> without coding. Build your next consultancy website within<br/> few minutes.
       </div>

       
      </div>
      <img
    src="/ladyHero.png"
    alt="Description of the image"  
    width="463" 
    height="572" 
    title="Optional title text"
    loading="lazy"  
    className="your-css-class" 
/>
</div>
      
    </section>
  )
}

export default Hero
