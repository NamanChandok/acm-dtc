import React from 'react'
import { Quantico } from 'next/font/google'
import { ChevronRight } from '@mui/icons-material'

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']})

type Props = {
    page: string,
    image: string
}

export default function Hero({page, image}: Props) {
  return (
    <div className='md:mt-20 px-8 py-12 md:px-32 md:py-24 relative text-white space-y-4 bg-cover bg-center' style={{
        backgroundImage: `url(${image})`
    }}>
        <div className='inset-0 absolute bg-slate-900/30'></div>
        <h1 className={quantico.className+' font-semibold text-3xl relative z-30'}>{page}</h1>
        <h2 className='font-medium relative z-30 text-xl'><a href="/" className='text-quaternary hover:text-white transition-all duration-300'>Home</a> <ChevronRight /> {page}</h2>
    </div>
  )
}