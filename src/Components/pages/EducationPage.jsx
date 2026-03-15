import React, { memo } from 'react'
import Page8EDUcomponent from '../Page8EDUcomponent'
import FresherDes from '../FresherDes'

const EducationPage = () => {
  return (<>
    <div className='page8 flex justify-between items-start sm:flex-nowrap flex-wrap px-[5vw] pt-5 relative gap-y-5'>
      <div className='w-full sm:w-auto'>
          <h1 className='w-[400px] mobile:w-[300px] micro:w-[250px] sm:w-[31vw] text-black text-[55px] leading-[60px] sm:text-[7vw] sm:leading-[6vw] mobile:text-[45px] mobile:leading-[45px] micro:text-[38px] micro:leading-[38px] mt-10 mobile:font-semibold micro:font-semibold'>Professional Experience</h1>
      </div>
      <div className='sm:pt-14 md:pr-14 w-full md:w-[50%] sm:w-[60%]'>
        <h1 className='text-[35px] font-semibold mb-5'>Experience</h1>
        <Page8EDUcomponent time="Dec 2025 - Present" degree="Full Stack Developer" degName="Ticketly.pk" des="Managing and scaling the frontend ecosystem for multiple product portals. Architected modular portal system reducing component redundancy by 70%. Coordinated between React frontends and Python backends." />
        <Page8EDUcomponent time="Jan 2025 - Nov 2025" degree="Frontend Developer" degName="PakLawAssist" des='Developed AI-powered legal service interfaces. Contributed to Python-driven backend optimizations using FastAPI. Explored deployment automation, implementing Github Actions, Jenkins pipeline, and Kubernetes.' />
        <Page8EDUcomponent time="2025" degree="Freelance Frontend Developer" degName="Freelance" des='Successfully delivered 5 end-to-end frontend and backend solutions for international and local clients.' />
      </div>
    </div>
    <div className='w-[350px] mobile:w-[300px] micro:w-[95%] sm:absolute sm:bottom-8 sm:left-10 sm:pt-0 sm:pl-0 sm:pb-0 pl-7 mobile:pl-4 micro:pl-4 pb-14'>
      <FresherDes />
    </div>
  </>)
}

export default memo(EducationPage)