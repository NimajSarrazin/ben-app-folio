import React from 'react'
import TitleSection from './TitleSection'
import CardServices from './cards/CardServices'

export default function SectionServices() {
  return (
    <div className="bg-[#151515]">
      <TitleSection
        title="My services"
        description="Lorem ipsum dolo sit amet"
      />
      <div className='container pr-4 pl-4 flex justify-center items-center"'>
        <CardServices />
      </div>
    </div>
  );
}
