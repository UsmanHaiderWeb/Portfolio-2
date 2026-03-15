import React, { memo } from 'react'
import Page7SkillComponent from '../Page7SkillComponent'
import FresherDes from '../FresherDes'

const SkillsPage = () => {
  return (
    <div className='w-full flex justify-between items-start sm:flex-nowrap flex-wrap sm:pl-[6.5vw] sm:pr-[10vw] px-[5vw] pt-6 pb-20 relative'>
      <div className='sm:w-auto w-full'>
        <h1 className='text-black font-["rej"] sm:text-[7vw] sm:leading-[6vw] text-[50px] leading-[60px] mobile:text-[45px] mobile:leading-[55px] micro:text-[38px] micro:leading-[48px] w-[300px] mt-10'>Skills I Have</h1>
        <div className='flex justify-center items-center gap-x-3 mt-5'>
          <div className='w-8 h-[2px] bg-zinc-900'></div>
          <p className='text-black w-[350px]'>I can build ambitious, awesome and driving web experiences that will provide a tremendous experience to your viewers.</p>
        </div>
      </div>
      <div className='sm:w-[450px]'>
        <Page7SkillComponent heading="Frontend Development" skills="React, Next.js, Astro.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Scroll Trigger, Three.js (Basics)" num="1" />
        <Page7SkillComponent heading="Backend Development" skills="Python (FastAPI, Django), Node.js (Express.js), REST/GraphQL APIs, Prisma, Mongoose" num="2" />
        <Page7SkillComponent heading="DevOps & Cloud" skills="Docker, AWS (EC2), CI/CD (GitHub Actions, Jenkins), Nginx, Redis, Kubernetes (KIND Cluster), Ingress-Nginx, HELM" num="3" />
        <Page7SkillComponent heading="Databases" skills="PostgreSQL (SQL), MongoDB, Cloudinary, Image Kit" num="4" />
      </div>
      <div className='w-[350px] mobile:w-[300px] micro:w-[95%] sm:absolute sm:bottom-8 sm:left-10 sm:pt-0 pt-10'>
        <FresherDes />
      </div>
    </div>
  )
}

export default memo(SkillsPage);