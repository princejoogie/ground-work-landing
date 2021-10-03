import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

//! Slideshow docs: https://react-slideshow-image.netlify.app/

const Testimonial = () => {
  return (
    <section className='text-center py-20 bg-[#a7d1d4]'>
      <h2 className='text-3xl font-bold'>What People Say</h2>
      <Slide easing='ease' duration={2000} arrows={false} indicators>
        <div className='w-3/5 mx-auto each-slide'>
          <p className='relative my-16 text-4xl font-light lg:text-6xl'>
            1. I&apos;m a testimonial. Click to edit me and add text that says
            something nice about you and your services.
          </p>
          <p>
            <span className='font-bold'>Joogie,</span> <span>PH</span>
          </p>
        </div>
        <div className='w-3/5 mx-auto each-slide'>
          <p className='relative my-16 text-4xl font-light lg:text-6xl'>
            2. I&apos;m a testimonial. Click to edit me and add text that says
            something nice about you and your services.
          </p>
          <p>
            <span className='font-bold'>Joshxfi,</span> <span>PH</span>
          </p>
        </div>
        <div className='w-3/5 mx-auto each-slide'>
          <p className='relative my-16 text-4xl font-light lg:text-6xl'>
            3. I&apos;m a testimonial. Click to edit me and add text that says
            something nice about you and your services.
          </p>
          <p>
            <span className='font-bold'>Zomer,</span> <span>PH</span>
          </p>
        </div>
      </Slide>
    </section>
  );
};

export default Testimonial;
