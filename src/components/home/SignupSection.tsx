import React from 'react';
import { LinkButton } from '../buttons';

const SignupSection = () => {
  return (
    // z-index in tailwind is not working to me, idk why
    <section style={{ zIndex: 1 }} className='relative h-96 md:h-auto'>
      <div
        style={{ zIndex: -1 }}
        className='absolute top-0 left-0 w-full h-full overflow-hidden'
      >
        <video className='object-cover w-full h-full' autoPlay muted loop>
          <source
            src='/assets/videos/home/home-bg-video.mp4'
            type='video/mp4'
          />{' '}
          supported!
        </video>
      </div>
      <div className='flex flex-col items-center justify-center px-10 py-20 md:py-24 lg:py-32 z-99'>
        <h2 className='mb-10 text-6xl font-extrabold tracking-tighter text-center text-white md:text-7xl lg:text-9xl'>
          BUILD YOUR EMPIRE
        </h2>
        <LinkButton
          href=''
          text='Sign up'
          className='py-4 text-white border-white md:px-10 md: hover:bg-white hover:text-black'
        />
      </div>
    </section>
  );
};

export default SignupSection;
