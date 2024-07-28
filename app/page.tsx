'use client';
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Instagram, LinkedIn, X, ArrowLeft, ArrowRight, ArrowOutward, Email } from "@mui/icons-material";
import { Quantico } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

export default function Home() {

  const [eventScroll, setEventScroll] = useState(0);
  const [eventScrollMax, setEventScrollMax] = useState(0);

  useEffect(() => {
    const events = document.getElementById('scroller') as HTMLElement;
    const left = document.getElementById('scrollLeft') as HTMLElement;
    const right = document.getElementById('scrollRight') as HTMLElement;

    setEventScrollMax(events.scrollWidth - events.clientWidth);

    events?.addEventListener('scroll', () => {
      setEventScroll(events.scrollLeft);
    });
    left?.addEventListener('click', () => {
      events.scrollLeft -= 336;
    });
    right?.addEventListener('click', () => {
      events.scrollLeft += 336;
    });

    return () => {
      events?.removeEventListener('scroll', () => {});
      left?.removeEventListener('click', () => {});
      right?.removeEventListener('click', () => {});
    }
  }, [])

  const typewriter = Typewriter({
    loop: true,
    cursor: true,
    cursorStyle: '_',
    delaySpeed: 3000,
    words: ['mentors', 'guides', 'teachers']
  });

  const mentors = [
    {name: 'John Doe', role: 'Faculty Advisor', image: '/mentors/1.jpg'},
    {name: 'Jane Doe', role: 'Faculty Advisor', image: '/mentors/2.jpg'},
    {name: 'John Doe', role: 'Faculty Advisor', image: '/mentors/3.jpg'},
  ]


  const events = [
    {name: 'Event 1', date: '01/01/2021', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 2', date: '01/01/2022', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 3', date: '01/01/2023', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 4', date: '01/01/2024', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 5', date: '01/02/2024', image: '/events/1.jpg', link: '/events/1'},
    {name: 'Event 6', date: '01/03/2024', image: '/events/1.jpg', link: '/events/1'},
  ]

  const resources = [
    {img: 'resources/1.jpg', link: '/resources/1.pdf'},
    {img: 'resources/2.jpg', link: '/resources/2.pdf'},
    {img: 'resources/3.jpg', link: '/resources/3.pdf'},
    {img: 'resources/4.jpg', link: '/resources/4.pdf'},
  ]

  return (
    <main>

      <Navbar active="home" />

      {/* HERO */}

      <section className="flex flex-col md:flex-row-reverse items-center gap-8 md:justify-between justify-center h-screen p-8 md:px-32 shadow-lg">

        <img src="/header-logo.png" alt="acm-dtc" className="hidden md:block w-96 aspect-square rounded-xl" />

        <div className="md:space-y-12 space-y-8">
          <div className="md:space-y-4 space-y-2">
            <h3 className="text-lg md:text-xl text-primary">Inspiring the Future of Computing at</h3>
            <h1 className={quantico.className+' text-45xl font-semibold tracking-wider uppercase'}>ACM Delhi Technical Campus</h1>
            <p className="max-w-2xl">ACM Delhi Technical Campus is dedicated to fostering creativity and technical prowess. We provide a platform for aspiring technologists to learn, grow, and lead... <a href="/about" className="text-primary">more</a></p>
          </div>

          <div className="space-x-4">
            <a href="#about" className="btn-secondary">Know More</a>
            <a href="/form" className="btn-primary">Join Us</a>
          </div>

          <div className="space-x-2">
            <a href="" className="hover:text-primary transition-all duration-300"><Instagram className="text-4xl" /></a>
            <a href="" className="hover:text-primary transition-all duration-300"><LinkedIn className="text-4xl" /></a>
            <a href="" className="hover:text-primary transition-all duration-300"><X className="text-4xl" /></a>
          </div>
        </div>

      </section>

      {/* ABOUT */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-12" id="about">

        <div className="flex flex-col md:flex-row md:gap-16 gap-8">
          <img src="/about1.svg" alt="about" className="md:w-1/2 aspect-video" />

          <div className="space-y-2 pt-8">
            <h3 className="uppercase text-xl font-medium text-primary">let&apos;s see</h3>
            <h2 className={quantico.className+" uppercase text-4xl font-semibold"}>what exactly acm is?</h2>
            <p className="pt-4 pb-8">ACM (Association for Computing Machinery) is a major organization in the field of computing and information technology. It is a global community that offers a wide range of resources and activities for professionals, educators, and students.</p>
            <a href="/about" className="btn-primary box-border">Know more</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:gap-16 gap-8">
          <img src="/about2.svg" alt="about" className="md:w-1/2 aspect-video" />

          <div className="space-y-2 pt-16">
            <h3 className="uppercase text-xl font-medium text-primary">want to know</h3>
            <h2 className={quantico.className+" uppercase text-4xl font-semibold"}>how acm dtc will help you?</h2>
            <ul className="pt-4 pb-8 space-y-2">
              <li>Work together on innovative projects</li>
              <li>Connect with industry professionals, alumni and peers</li>
              <li>Participate in hackathons and competitions</li>
              <li>Get access to exclusive resources and tools</li>
              <li>Enhance technical skills through workshops and projects</li>
            </ul>
          </div>
        </div>

      </section>

      {/* MENTORS */}

      <section className="bg-quaternary px-8 md:px-32 md:py-20 py-12 space-y-12">

        <h2 className={quantico.className+" uppercase text-4xl font-semibold text-center"}>Meet our <span className="text-primary">{typewriter}</span></h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="md:w-96 rounded-lg overflow-hidden shadow-md">
              <img src={mentor.image} alt={mentor.name} className="aspect-square" />
              <div className="bg-primary p-4">
                <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                <p className="text-quaternary">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="px-8 md:px-32 md:py-20 py-12">

        {/* EVENTS */}

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
            <h3 className={quantico.className+" font-semibold text-3xl uppercase"}>Check out our recent events</h3>
            <a href="/events" className="capitalize text-right underline underline-offset-2 decoration-2 decoration-primary text-primary text-lg font-medium">see more</a>
          </div>

          <div className="relative">
            <ArrowLeft id="scrollLeft" className="absolute -left-4 top-0 bottom-0 m-auto text-4xl text-primary bg-quaternary shadow-md rounded-full cursor-pointer" style={
              eventScroll === 0 ? {display: 'none'} : {}
            } />

            <div className="overflow-x-scroll flex gap-4 py-4" id="scroller">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>

            <ArrowRight id="scrollRight" className="absolute -right-4 top-0 bottom-0 m-auto text-4xl text-primary bg-quaternary shadow-md rounded-full cursor-pointer" style={
              eventScroll >=  eventScrollMax-1 ? {display: 'none'} : {}
            } />
          </div>

        <hr className="md:my-20 my-10 border-black/20" />

        {/* CHAIRPERSON */}

          <h2 className={quantico.className+" text-3xl font-semibold text-center uppercase"}>Meet our acm Chairperson</h2>

          <div className="rounded-xl bg-quaternary overflow-hidden mt-6 mb-8 flex md:flex-row-reverse flex-col md:justify-between">
            <img src="/team/kartick.png" alt="" className="w-96 aspect-square bg-slate-900" />
            <div className="p-8 space-y-4 pt-12">
              <h3 className="text-2xl md:text-3xl font-semibold">Kartick Chauhaan</h3>
              <p className="max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus vel repellat tempora consequatur quod.<br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, fugiat? Quo, magnam! At, fugit pariatur? Consequatur, rem maxime harum, inventore itaque quisquam nulla et odit delectus, necessitatibus perferendis aliquam aliquid.</p>
              <div className="space-x-2">
                <a href="" className="hover:text-primary transition-all duration-300"><LinkedIn className="text-4xl" /></a>
                <a href="" className="hover:text-primary transition-all duration-300"><Email className="text-4xl" /></a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/team" className="btn-secondary capitalize tracking-wide">See team members</a>
          </div>

        <hr className="md:my-20 my-10 border-black/20" />

        {/* RESOURCES */}

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
            <h3 className={quantico.className+" font-semibold text-3xl uppercase"}>resources</h3>
            <a href="/resources" className="capitalize text-right underline underline-offset-2 decoration-2 decoration-primary text-primary text-lg font-medium">see more</a>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
            {resources.map((resource, index) => (
              <a key={index} href={resource.link} className="rounded-lg overflow-hidden z-10 relative group h-96 md:w-72 shadow-sm translate-y-4 hover:translate-y-0 hover:shadow-md transition-all duration-300">
                <img src={resource.img} alt="" className="h-full w-full object-cover" />
                <div className="bg-black/20 flex flex-col gap-2 items-center justify-center group-hover:opacity-100 opacity-0 transition-all duration-300 absolute inset-0 z-20">
                  <div className="bg-black text-white p-4 rounded-full">
                    <ArrowOutward className="text-5xl" />
                  </div>
                  <small className="text-white">Download</small>
                </div>
              </a>
            ))}
          </div>   

        {/* NEWSLETTER */}

        <div className="rounded-xl bg-gray-700 md:p-8 p-6 md:py-24 md:px-16 md:mt-32 mt-12 flex flex-col md:flex-row gap-8 md:justify-between items-center">
          <h4 className={quantico.className+" text-white text-3xl font-semibold uppercase tracking-wide"}>Subscribe to our NEWSLETTER</h4>
          
          <form className="flex flex-col md:flex-row overflow-hidden bg-white md:w-2/5 w-full rounded-lg">
            <input type="email" placeholder="Enter your email" className="p-4 w-full rounded-lg" />
            <input type="submit" className="p-4 bg-primary text-white cursor-pointer hover:bg-primary/90 transition-all duration-300 rounded-l-none text-sm uppercase" value="subscribe" />
          </form>

        </div>

      </section>

      <Footer />

    </main>
  );
}
