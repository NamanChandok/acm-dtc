import React from 'react'
import { ArrowOutward } from '@mui/icons-material'

type Props = {
    id: string,
    name: string,
    date: string,
    cover: string,
}

export default function EventCard({id, name, date, cover}: Props) {
  return (
    <div className='rounded-lg w-80 flex-shrink-0 shadow-md overflow-hidden'>
        <img src={cover} alt={name} className='aspect-square w-full bg-[#eee] object-cover' />
        <div className='bg-primary p-4 flex justify-between items-center'>
            <div className='w-3/4'>
              <small className='text-[#eee] text-sm'>{date}</small>
              <h3 className='text-white text-xl truncate font-semibold'>{name}</h3>
            </div>
            <a href={`/events/${id}`} className='w-1/4 text-end'>
              <ArrowOutward className="bg-black text-white h-14 w-14 p-4 rounded-full hover:p-3 transition-all duration-300" />
            </a>
        </div>
    </div>
  )
}