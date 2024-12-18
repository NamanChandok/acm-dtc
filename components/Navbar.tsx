'use client';
import React from 'react'
import { Close, Menu } from '@mui/icons-material'
import { useState } from 'react'

type Props = {
    active: string
}

export default function Navbar({active}: Props) {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (<>
    <nav className={`fixed inset-x-0 top-0 z-50 p-3 md:px-12 hidden md:flex items-center justify-between ${active == 'home' ? 'bg-quaternary' : 'bg-white shadow-md'}`}>
        <a href="/"><img src='/logo.png' alt='acm-dtc' className='w-48' /></a>
        <div className='flex flex-col md:flex-row gap-6'>
            <a href='/' className={`hover:font-semibold transition-all duration-300 ${active === 'home' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Home</a>
            <a href='/about' className={`hover:font-semibold transition-all duration-300 ${active === 'about' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>About</a>
            <a href='/gallery' className={`hover:font-semibold transition-all duration-300 ${active === 'gallery' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Gallery</a>
            <a href='events' className={`hover:font-semibold transition-all duration-300 ${active === 'events' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Events</a>
            <a href='/team' className={`hover:font-semibold transition-all duration-300 ${active === 'team' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Team</a>
            <a href='/resources' className={`hover:font-semibold transition-all duration-300 ${active === 'resources' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Resources</a>
        </div>
        <div className='h-max w-48 text-right'>
            <a href="https://linktr.ee/acm_dtc" target="_blank" className='border-2 font-medium border-primary py-2 px-8 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300'>Join Us</a>
        </div>
    </nav>
    <button onClick={()=>{setMobileNavOpen(!mobileNavOpen)}} className={'rounded-full p-3 md:hidden bg-white fixed top-4 right-4 z-50 transition-all duration-300 '+(mobileNavOpen?'':'shadow-md')}>
      {mobileNavOpen ? <Close className='text-3xl' /> : <Menu className='text-3xl' />}
    </button>
    <nav className='z-40 fixed top-0 right-0 bottom-0 pt-20 bg-white shadow-md flex flex-col gap-6 w-48 rounded-sm items-end p-8 text-xl transition-all duration-300' style={
      mobileNavOpen ? {transform: 'translateX(0)'} : {transform: 'translateX(100%)'}
    } >
      <a href='/' className={`hover:font-semibold transition-all duration-300 ${active === 'home' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Home</a>
      <a href='/about' className={`hover:font-semibold transition-all duration-300 ${active === 'about' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>About</a>
      <a href='/gallery' className={`hover:font-semibold transition-all duration-300 ${active === 'gallery' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Gallery</a>
      <a href='/events' className={`hover:font-semibold transition-all duration-300 ${active === 'events' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Events</a>
      <a href='/team' className={`hover:font-semibold transition-all duration-300 ${active === 'team' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Team</a>
      <a href='/resources' className={`hover:font-semibold transition-all duration-300 ${active === 'resources' ? 'font-semibold underline decoration-2 underline-offset-2' : ''}`}>Resources</a>
      <a href="https://linktr.ee/acm_dtc" className='border-2 font-medium border-primary p-2 mt-3 w-max rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300'>Join Us</a>
    </nav>
    </>
  )
}