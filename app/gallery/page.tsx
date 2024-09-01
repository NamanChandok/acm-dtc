'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { ArrowOutward } from "@mui/icons-material";
import { db, storage } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

import { useEffect, useState } from "react";
import { listAll, ref } from "firebase/storage";

export default function Gallery() {

  interface Gallery {
    id: string,
    name: string,
    date: string,
    images: string[]
  }

  const [folders, setFolders] = useState<Gallery[]>([]);
  
  useEffect(() => {
    const eventsRef = collection(db, 'events');
    getDocs(eventsRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const galleryRef = ref(storage, 'gallery/'+doc.id);
        listAll(galleryRef).then((res) => {
          const images:string[] = []
          res.items.forEach((itemRef) => {
            images.push(itemRef.name)
          });
          setFolders((prev) => {
            if (prev.map((folder) => folder.id).includes(doc.id)) return prev;
            return [...prev, {
              id: doc.id,
              name: doc.data().name,
              date: doc.data().date,
              images: images
            }]
          })
        })
      })
    })
  }, []);

  return (
    <main>

      <Navbar active="gallery" />

      {/* HERO */}

      <Hero page="Gallery" />

      {/* GALLERY */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-12">

        {folders.sort((a,b)=>(new Date(b.date).getTime() - new Date(a.date).getTime())).map((event, index) => {
          return (<div className="space-y-4" key={index}>
            <h3 className={quantico.className+" font-semibold uppercase text-2xl md:text-3xl flex gap-3 flex-col md:flex-row md:items-center divide-x-2 divide-black"}> <span>{event.name}</span> <span className="pl-3 font-medium text-xl md:text-2xl">{event.date}</span></h3>
            <div className="flex gap-6 overflow-x-scroll pb-4 flex-col md:flex-row" style={{scrollbarWidth: 'thin', scrollbarColor: '#0000005a transparent'}}>
              {event.images.map((image, index) => {
                return (<a key={index} href={"https://firebasestorage.googleapis.com/v0/b/acm-dtc.appspot.com/o/gallery%2F"+event.id+"%2F"+image+"?alt=media"} target="_blank" className="bg-black md:w-80 flex-shrink-0 relative group rounded-sm overflow-hidden transition-all duration-300">
                  <img src={"https://firebasestorage.googleapis.com/v0/b/acm-dtc.appspot.com/o/gallery%2F"+event.id+"%2F"+image+"?alt=media"} className="w-full aspect-video object-cover group-hover:opacity-80 transition-all duration-300" />
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
