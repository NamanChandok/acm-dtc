import React from 'react'
import { LinkedIn, Email } from "@mui/icons-material";

type Props = {
    name: string,
    role: string,
    image: string,
    linkedin: string,
    mail: string,
    year: string
}

export default function TeamCard({name, role, image, linkedin, mail, year}: Props) {
  return (
    <div className="group w-72 h-94 perspective-1000">
      <div className="h-94 w-72 preserve-3d relative group-hover:rotate-y-flip transition-all duration-700 shadow-md">
        <div className="backface-hidden absolute rounded-lg bg-gray-100 w-72 overflow-hidden">
          <img src={image} className="w-72 aspect-square object-cover object-top" />
          <div className="bg-black p-3 space-y-1">
            <p className="text-white">{role}</p>
            <h1 className="text-xl font-semibold text-white">{name}</h1>
          </div>
        </div>
        <div className="backface-hidden absolute h-94 w-72 rounded-lg overflow-hidden rotate-y-flip p-4 bg-gray-100">
          <div className="border-2 h-full rounded-md p-4 border-gray-600 pt-6">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500 pb-2">{role}</p>
            <p>{year}</p>
            <div className="space-x-2 mt-2">
                <a href={linkedin} target='_blank' className="hover:text-primary duration-300">
                <LinkedIn className="text-3xl" />
                </a>
                <a href={mail} target='_blank' className="hover:text-primary duration-300">
                <Email className="text-3xl" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}