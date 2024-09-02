import React from 'react'
import { Instagram, LinkedIn, X } from '@mui/icons-material'
import { Quantico } from "next/font/google";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

type Props = {}

export default function Footer({}: Props) {
  return (
    <section className='px-8 py-12 md:px-16 lg:px-32 md:py-20 bg-slate-900 flex flex-col md:flex-row md:justify-between gap-10 md:gap-32'>
        
        <div className='space-y-6 w-72'>
            <img src="/footer-logo.svg" alt="acm dtc" className='w-60 rounded-md' />
            <p className='text-quaternary text-sm text-justify'>ACM boosts up the potential and talent, supporting the overall development needs of our students to facilitate a structured path from education to employment by providing a safe and supported space where creative talent  and imagination can flourish in a caring environment.</p>
        </div>

        <div className='md:w-2/3 flex flex-col justify-between gap-10'>
            <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>
                <div className='flex flex-col gap-6'>
                    <h4 className={quantico.className+' uppercase text-xl md:mb-4 text-white font-semibold tracking-wider'}>Explore</h4>
                    <a href="/" className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>Home</a>
                    <a href="/about" className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>About</a>
                    <a href="/team" className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>Team</a>
                </div>

                <div className='flex flex-col gap-6'>
                    <h4 className={quantico.className+' uppercase text-xl md:mb-4 text-white font-semibold tracking-wider'}>Quick Links</h4>
                    <a href="/gallery" className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>Gallery</a>
                    <a href="/events" className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>Events</a>
                    <a href="/resources" className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>Resources</a>
                </div>

                <div className='flex flex-col gap-6 w-60'>
                    <h4 className={quantico.className+' uppercase text-xl md:mb-4 text-white font-semibold tracking-wider'}>Contact Info</h4>
                    <p className='text-quaternary tracking-wide'>Delhi Technical Campus, <br />Knowledge Park-II,<br /> Greater Noida</p>
                    <a href="mailto:acmschapter@delhitechnicalcampus.ac.in" target='_blank' className='text-quaternary tracking-wide hover:text-white transition-all duration-300'>Email: acmschapter@<br />delhitechnicalcampus.ac.in</a>
                    
                    <div className="space-x-2">
                        <a href="https://www.instagram.com/acm_dtc/" target="_blank" className="text-white hover:text-quaternary transition-all duration-300"><Instagram className="text-3xl" /></a>
                        <a href="https://www.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu/" target="_blank" className="text-white hover:text-quaternary transition-all duration-300"><LinkedIn className="text-3xl" /></a>
                        <a href="https://x.com/ACM_DTC" target="_blank" className="text-white hover:text-quaternary transition-all duration-300"><X className="text-3xl" /></a>
                    </div>
                </div>
            </div>
            <p className='text-quaternary md:text-right'>Designed & Developed by ACM DTC Team.</p>
        </div>

    </section>
  )
}