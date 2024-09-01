'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { ArrowOutward } from "@mui/icons-material";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

import { useEffect, useState } from "react";

export default function Gallery() {

  interface Gallery {
    name: string,
    date: string,
    images: string[]
  }

  const [folders, setFolders] = useState<Gallery[]>([]);
  
  useEffect(() => {
    fetch("/api/getGallery")
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setFolders(sorted);
      });
  }, []);

  return (
    <main>

      <Navbar active="gallery" />

      {/* HERO */}

      <Hero page="Gallery" />

      {/* GALLERY */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-12">

        {folders.map((event, index) => {
          return (<div className="space-y-4" key={index}>
            <h3 className={quantico.className+" font-semibold uppercase text-2xl md:text-3xl flex gap-3 items-center divide-x-2 divide-black"}> <span>{event.name}</span> <span className="pl-3 font-medium text-xl md:text-2xl">{event.date}</span></h3>
            <div className="flex gap-6 overflow-x-scroll pb-4 flex-col md:flex-row" style={{scrollbarWidth: 'thin', scrollbarColor: '#0000005a transparent'}}>
              {event.images.map((image, index) => {
                return (<a key={index} href={"/gallery/"+event.name+"/"+image} target="_blank" className="bg-black md:w-80 flex-shrink-0 relative group rounded-sm overflow-hidden transition-all duration-300">
                  <img src={"/gallery/"+event.name+"/"+image} className="w-full aspect-video object-cover group-hover:opacity-80 transition-all duration-300" />
                  <div className="bg-black text-white p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:opacity-100 opacity-0 transition-all duration-300">
                    <ArrowOutward className="text-3xl" />
                  </div>
                </a>)
              })}
            </div>
          </div>)
        })}

      </section>

      <Footer />

    </main>
  );
}
