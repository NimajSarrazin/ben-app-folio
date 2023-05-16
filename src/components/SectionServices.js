import React from 'react'
import TitleSection from './TitleSection'
import CardServices from './cards/CardServices'

export default function SectionServices() {
  return (
    <div className="bg-[#151515]" id="services">
      <TitleSection
        title="Mes services"
        description="Conception de sites web attrayants et fonctionnels pour votre présence en ligne"
      />
      <div className="container">
        <CardServices />
      </div>
    </div>
  );
}
