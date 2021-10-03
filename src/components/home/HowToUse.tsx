import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo1.png';

const Testimonial = () => {
  return (
    <section className='w-full h-auto'>
      <div className='flex flex-col items-center w-full text-center lg:flex-row lg:text-left'>
        <div className='relative w-1/2 h-32 lg:h-60'>
          <Image
            src={logo}
            alt='Logo'
            // width={400}
            // height={400}
            layout='fill'
            objectFit='contain'
            objectPosition='center'
          />
        </div>
        <div className='flex flex-col justify-center w-full md:ml-4 md:w-1/2 h-60'>
          <h2 className='mb-3 text-3xl font-bold text-center lg:text-left lg:text-5xl'>
            WHY USE GROUNDWORK.PH?
          </h2>
          <h4 className='text-xl font-semibold text-secondary'>
            Because we are dedicated to build trustworthy connections for you!
          </h4>
        </div>
      </div>
      <div className='my-28'>
        <h2 className='home-headings'>YOU ONLY NEED TO</h2>
        <div className='flex flex-col w-full my-4 overflow-hidden font-semibold text-center rounded-xl md:rounded-full md:h-40 md:flex-row text-md lg:text-xl'>
          <div className='flex items-center justify-center w-full h-40 px-16 bg-yellow-100 md:p-0 md:w-1/3 '>
            <h4>Create a Groundwork.PH account.</h4>
          </div>
          <div className='flex items-center justify-center w-full h-40 px-16 bg-purple-100 md:w-1/3 md:p-0'>
            <h4>Search for the needed resources for your business.</h4>
          </div>
          <div className='flex items-center w-full h-40 px-16 bg-blue-100 md:w-1/3 md:p-0'>
            <h4>
              Select and begin your transactions with Suppliers around the
              country!
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
