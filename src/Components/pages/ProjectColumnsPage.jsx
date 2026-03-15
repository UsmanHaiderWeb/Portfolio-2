import React, { memo, useRef } from 'react'
import SingleMajorProject from '../SingleMajorProject'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const ProjectColumnsPage = ({nextPage}) => {
  const bgChanger = useRef();

  useGSAP(() => {
    gsap.to(bgChanger.current, {
      scrollTrigger: {
        trigger: bgChanger.current,
        scroller: 'body',
        start: 'bottom 60%',
        end: 'bottom 10%',
        onUpdate: (prop) => {
          prop.progress == 0 ? bgChanger.current.style.backgroundColor = "transparent" : bgChanger.current.style.backgroundColor = "#e2e2e2"
          prop.progress == 0 ? nextPage.current.style.backgroundColor = "#09090B" : nextPage.current.style.backgroundColor = "#e2e2e2"
          prop.progress == 1 && ScrollTrigger.refresh();
        }
      }
    })
  }, [])

  return (
    <div className='bg-gradient-to-b from-[#18181B] to-[#09090B] relative z-[14]'>
      <div ref={bgChanger} className='min-h-[500px]'>
        <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8'>
          <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center font-["rej"]'>Strategic Projects</h1>
            <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>These projects highlight my ability to build cloud-native systems and orchestrate premium UX.</p>
        </div>
        <div className='md:columns-3 columns-2 mini:columns-1 mobile:columns-1 micro:columns-1 lg:w-[1000px] md:w-[calc(87vw+40px)] sm:w-[calc(80vw+40px)] lgtab:w-[calc(88vw+40px)] tablet:w-[calc(88vw+40px)] mini:w-[80vw] mobile:w-[85vw] micro:w-[85vw] mini:pt-5 mobile:pt-5 micro:pt-5 mx-auto'>
          <SingleMajorProject img="/ycdirectory.webp" des="Building a multi-tenant system utilizing a PERN stack (moving toward Cloud-Native)." head='School Management System' />
          <SingleMajorProject img="/insta.webp" des="Building a College Library Management System utilizing a PERN stack automating the traditions Library system." head='Library Management System' />
          <SingleMajorProject img="/pinterest.webp" des="Developed an AI-powered creative platform, an interactive node-based workflow system." head='AI Hedge Scratch' />
          <SingleMajorProject img="/brainwave.webp" des="Optimized high-asset pages to maintain fluid 60fps interactions." head='Brainwave (Premium UX)' link='https://brainwave-ochre-tau.vercel.app/' />
          <SingleMajorProject img="/zentry.webp" des="Engineered award-winning UI patterns focusing on staggered transitions." head='Zentry (Premium UX)' link='https://zentry-rosy.vercel.app/' />
        </div>
      </div>
    </div>
  )
}

export default memo(ProjectColumnsPage);