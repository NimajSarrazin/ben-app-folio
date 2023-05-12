import React from 'react'
import TitleSection from './TitleSection'
import Form from './cards/contact/Form'

export default function SectionContact() {
  return (
    <div className='bg-[#151515] pb-10' id='contact'>
      <TitleSection title='Get in touch' description='Feel Free to drop me a line - Contact us'/>
      <Form/>
    </div>
  )
}
