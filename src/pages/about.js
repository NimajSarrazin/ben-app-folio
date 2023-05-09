import TitleSection from '@/components/TitleSection'
import React from 'react'

export default function About() {
  return (
    <div className="bg-[#111] py-20">
      <TitleSection
        title="About Me"
        description="Professional Profile - There is All About Me"
      />
      <div className='container relative w-full pr-4 pl-4'>
        <img src="/img/about.jpg" alt="" className='w-full max-w-full align-middle border-none lg:w-1/3' />
        <div className='mt-10 relative'>
            <h3 className='text-2xl text-white'>
                I'm Benjamin Sarrazin
           
            </h3>
            <div className='w-10 h-1 bg-[#ff5d56] absolute left-0 bottom-0'></div>

        </div>
      </div>
    </div>
  );
}
