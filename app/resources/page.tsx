'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { ArrowOutward } from "@mui/icons-material";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

import { useEffect, useState } from "react";

export default function Gallery() {

  // interface Gallery {
  //   name: string,
  //   date: string,
  //   images: string[]
  // }

  // const [folders, setFolders] = useState<Gallery[]>([]);
  
  // useEffect(() => {
  //   fetch("/api/getGallery")
  //     .then(res => res.json())
  //     .then(data => setFolders(data));
  // }, []);

  const resources = [
    {img: 'resources/1.jpg', link: '/resources/1.pdf'},
    {img: 'resources/2.jpg', link: '/resources/2.pdf'},
    {img: 'resources/3.jpg', link: '/resources/3.pdf'},
    {img: 'resources/4.jpg', link: '/resources/4.pdf'},
  ]

  return (
    <main>

      <Navbar active="resources" />

      {/* HERO */}

      <Hero page="Resources" image="" />

      {/* RESOURCES */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-12">

      <div className="grid md:grid-cols-4 gap-4">
      {resources.map((resource, index) => (
        <a key={index} href={resource.link} className="rounded-lg overflow-hidden z-10 relative group h-96 md:w-72 shadow-sm hover:shadow-md transition-all duration-300">
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

      </section>

      <Footer />

    </main>
  );
}
