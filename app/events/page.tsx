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
      .then(data => setFolders(data));
  }, []);

  return (
    <main>

      <Navbar active="events" />

      {/* HERO */}

      <Hero page="Events" image="" />

      {/* EVENTS */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-12">

        

      </section>

      <Footer />

    </main>
  );
}
