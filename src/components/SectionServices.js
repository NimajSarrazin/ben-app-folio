import React from 'react'
import TitleSection from './TitleSection'
import CardServices from './cards/CardServices'

export default function SectionServices() {
  return (
    <div className="bg-[#151515]" id='service'>
      <TitleSection
        title="My services"
        description="Lorem ipsum dolo sit amet"
      />
      <div className='container'>
        <CardServices />
      </div>
    </div>
  );
}
