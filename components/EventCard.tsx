import React from 'react'
import { ArrowOutward } from '@mui/icons-material'

type Props = {
    name: string,
    date: string,
    image: string,
    link: string
}

export default function EventCard({name, date, image, link}: Props) {
  return (
    <div className='rounded-lg w-80 flex-shrink-0 shadow-md overflow-hidden'>
        <img src={image} alt={name} className='aspect-square w-full bg-[#eee]' />
        <div className='bg-primary p-4 flex justify-between items-center'>
            <div>
              <small className='text-[#eee] text-sm'>{date}</small>
              <h3 className='text-white text-xl font-semibold'>{name}</h3>
            </div>
            <a href={link}>
              <ArrowOutward className="bg-black text-white h-14 w-14 p-4 rounded-full hover:p-3 transition-all duration-300" />
            </a>
        </div>
    </div>
  )
}