'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Download, PictureAsPdf } from "@mui/icons-material";
import { storage } from "@/firebase";
import { listAll, ref } from "firebase/storage";

import { useEffect, useState } from "react";

export default function Resources() {

  const [resources, setResources] = useState<string[]>([]);
  
  useEffect(() => {
    const resourcesRef = ref(storage, 'resources');
    listAll(resourcesRef).then((res) => {
      const r:string[] = []
      res.items.forEach((itemRef) => {
        r.push(itemRef.name)
      });
      setResources(r);
    })
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
          return <a key={index} target='_blank' href={'https://firebasestorage.googleapis.com/v0/b/acm-dtc.appspot.com/o/resources%2F'+resource+'?alt=media'} className="rounded-lg border-2 border-black overflow-hidden z-10 relative h-96 md:w-72 shadow-sm translate-y-4 hover:translate-y-0 hover:shadow-md transition-all duration-300">
            <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
              <PictureAsPdf className="text-6xl" />
              <p>{resource}</p>
              <div className="bg-black flex items-center gap-3 text-white p-2 rounded-xl">
                <Download className="text-2xl" />
                Download
              </div>
            </div>
          </a>
        })}
      </div>

      </section>

      <Footer />

    </main>
  );
}
