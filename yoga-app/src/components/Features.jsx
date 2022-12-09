import React from 'react'



const Features = () => {
  return (
    <section className='bg-section min-h-[340px] flex items-center pb-[38px]'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-8'>
          <div className='flex-1' data-aos='fade-right'>
            <div className='w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full'></div>
            <h2 className='h2 mb-3 lg:mb-0'>
              The Better Way to <br /> Start Yoga
            </h2>
          </div>
          <div className='flex-1' data-aos='fade-left'>
            <p className='max-w-[360px] mb-[18px] lg:mb-[38px] text-xl'>
              Practice anywhere, anytime. Explore a new way to exercise and
              learn more about yourself. We are providing the best.
            </p>
            <button className='btn btn-sm btn-orange'>Get started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features