import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/images/logo1.png';

const steps = [
  {
    Text: () => (
      <h4>
        Create a <strong>Groundwork.PH</strong> account.
      </h4>
    ),
    color: 'bg-yellow-100',
  },
  {
    Text: () => (
      <h4>
        <strong>Search</strong> for the needed resources for your business.
      </h4>
    ),

    color: 'bg-purple-100',
  },
  {
    Text: () => (
      <h4>
        <strong>Select and begin</strong> your transactions with suppliers
        around the country!
      </h4>
    ),
    color: 'bg-blue-100',
  },
];

const Testimonial = () => {
  return (
    <section className='w-full h-auto'>
      <div className='flex flex-col items-center w-full text-center lg:flex-row lg:text-left'>
        <div className='relative w-1/2 h-32 lg:h-60'>
          <Image
            src={logo}
            alt='Logo'
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
      <div className=' my-28'>
        <h2 className='mb-5 home-headings'>YOU ONLY NEED TO</h2>
        {/* <div className='flex flex-col w-full my-4 overflow-hidden font-semibold text-center rounded-xl md:rounded-full md:h-40 md:flex-row text-md lg:text-xl'>
          {steps.map(({ text, color }, i) => (
            <div
              key={i}
              className={`flex items-center justify-center w-full px-5 h-28 md:h-40 lg:px-16 md:w-1/3 ${color}`}
            >
              <h4>{text}</h4>
            </div>
          ))}
        </div> */}
        <div className='grid grid-cols-3 overflow-hidden rounded-md'>
          {steps.map(({ Text, color }, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between items-start   py-8 px-6 border-solid border-blue-200 border-2`}
            >
              <div>
                <h3 className='mb-1 text-xl font-bold'>{i + 1}</h3>
                <Text />
              </div>

              <Link href=''>
                <a>ASDASD</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
