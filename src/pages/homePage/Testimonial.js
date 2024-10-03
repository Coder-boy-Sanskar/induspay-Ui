import React from 'react'

const Testimonial = () => {
  return (
    <section className='contain testimonial-container'>
    <div className='heading'>
        <span>Testimonial</span>
        <div>“Simply the best. Better than all the rest. I&apos;d<br/> recommend this product to beginners and<br/> advanced users.”</div>
    </div>
    <div className='testimonial-dp-txt'>
    <img
          src="/home/whyus/dp.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="dp-img"
        />
        <span>Ian Klein</span>
        <div>Digital Marketer</div>
    </div>
      
    </section>
  )
}

export default Testimonial
