'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowOutward } from "@mui/icons-material";

import { useEffect, useState } from "react";

export default function Resources() {

  const [resources, setResources] = useState([]);
  
  useEffect(() => {
    fetch("/api/getResources")
      .then(res => res.json())
      .then(data => setResources(data));
  }, []);

  return (
    <main>

      <Navbar active="resources" />

      {/* HERO */}

      <Hero page="Resources" />

      {/* RESOURCES */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-12">

      <div className="grid md:grid-cols-4 gap-4">
        {resources.map((resource:String, index) => {
          const imgPath = resource.replace('pdf', 'jpg');
          return <a key={index} target='_blank' href={`/resources/${resource}`} className="rounded-lg border-2 border-black overflow-hidden z-10 relative group h-96 md:w-72 shadow-sm translate-y-4 hover:translate-y-0 hover:shadow-md transition-all duration-300">
            <img src={`/resources/${imgPath}`} alt="" className="h-full w-full object-cover" />
            <div className="bg-black/40 flex flex-col gap-2 items-center justify-center group-hover:opacity-100 opacity-0 transition-all duration-300 absolute inset-0 z-20">
              <small className="text-white">{resource}</small>
              <div className="bg-black text-white p-4 rounded-full">
                <ArrowOutward className="text-5xl" />
              </div>
              <small className="text-white">Download</small>
            </div>
          </a>
        })}
      </div>

      </section>

      <Footer />

    </main>
  );
}
