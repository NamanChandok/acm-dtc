'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { CalendarMonth, EventAvailable } from "@mui/icons-material";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

import { useEffect, useState } from "react";

export default function Events() {


  const events = [
    {name: 'Event 1', date: '01/01/2023', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 2', date: '01/01/2022', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 3', date: '01/01/2021', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 4', date: '01/01/2024', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 4', date: '01/01/2025', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 4', date: '01/03/2025', image: '/events/1.jpg', link: '/events/1'},
  ]


  return (
    <main>

      <Navbar active="events" />

      {/* HERO */}

      <Hero page="Events" />

      {/* EVENTS */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-6">

      {events.filter(event => new Date(event.date).getTime() > new Date().getTime()).length == 0 ? '' :
      <h3 className={quantico.className+" font-semibold text-3xl uppercase flex items-center gap-4"}><CalendarMonth fontSize="large" /> Upcoming events</h3>}

      <div className="grid gap-4">
        {events.filter(event => new Date(event.date).getTime() > new Date().getTime())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((event, index) => {
          return (<div key={index} className="bg-[#eee] rounded-md overflow-hidden h-40 flex">
            <img src={event.image} alt={event.name} className="w-1/3 object-cover object-center" />
            <div className="space-y-4 p-4 relative w-2/3">
              <small>{event.date}</small>
              <h4 className="font-semibold text-2xl">{event.name}</h4>
              <a className="text-secondary p-1 border-secondary border-2 rounded-md absolute bottom-4 right-4" href={event.link}>Register</a>
            </div>
          </div>)
        })}
      </div>

      <h3 className={quantico.className+" font-semibold text-3xl uppercase flex items-center gap-4"}><EventAvailable fontSize="large" /> Past events</h3>

      <div className="grid md:grid-cols-3 gap-4">
      {events.filter(event => new Date(event.date).getTime() < new Date().getTime())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((event, index) => {
        return (<div key={index} className="bg-[#eee] rounded-md overflow-hidden flex flex-col">
          <img src={event.image} alt={event.name} className="h-40 object-cover object-center" />
          <div className="space-y-2 p-4 relative">
            <small>{event.date}</small>
            <h4 className="font-semibold text-2xl pb-2">{event.name}</h4>
            <a className="text-secondary " href={event.link}>View Details</a>
          </div>
        </div>)
      })}
      </div>

      </section>

      <Footer />

    </main>
  );
}
