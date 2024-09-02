'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { ArrowOutward, EventAvailable } from "@mui/icons-material";
import { db, storage } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

import { useEffect, useState } from "react";
import { listAll, ref } from "firebase/storage";

export default function Events(props:any) {

    const slug = decodeURI(props.params.slug);

    interface Event {
        name: string,
        date: string,
        cover: string,
        description: string,
        id: string
    }

    const [event, setEvent] = useState<Event | null>(null);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        let a:any = {};
        const eventsRef = doc(db, 'events', slug);
        getDoc(eventsRef).then((docSnap) => {
            const data = docSnap.data();
            if (data) {
                a.name = data.name;
                a.date = data.date;
                a.cover = data.cover;
                a.description = data.description;
                a.id = docSnap.id;
            }
            setEvent(a);
            const galleryRef = ref(storage, 'gallery/'+slug);
            listAll(galleryRef).then((res) => {
                const images:string[] = []
                res.items.forEach((itemRef) => {
                    images.push(itemRef.name)
                });
                setImages(images);
            });
        });
    }, []);

  return (
    <main>

      <Navbar active="events" />

      {/* HERO */}

      <Hero page="Events" eventPage={event?.name} />

      {/* EVENTS */}

      <section className="px-8 md:px-16 lg:px-32 md:py-20 py-12 space-y-6">

        {event && <>
        
        <h3 className={quantico.className+" font-semibold text-3xl uppercase flex items-center gap-4"}><EventAvailable fontSize="large" /> {event.name}</h3>

        <p>{event.description.split('<br>').map((line, index)=>{
            return <p className="py-1" key={index}>{line}</p>
        })}</p>

        <h4 className={quantico.className+" font-semibold text-2xl"}>Gallery</h4>

        <div className="flex gap-6 overflow-x-scroll pb-4 flex-col md:flex-row" style={{scrollbarWidth: 'thin', scrollbarColor: '#0000005a transparent'}}>
        {images.map((image, index) => {
            return (<a key={index} href={"https://firebasestorage.googleapis.com/v0/b/acm-dtc.appspot.com/o/gallery%2F"+event.id+"%2F"+image+"?alt=media"} target="_blank" className="bg-black md:w-80 flex-shrink-0 relative group rounded-sm overflow-hidden transition-all duration-300">
                <img src={"https://firebasestorage.googleapis.com/v0/b/acm-dtc.appspot.com/o/gallery%2F"+event.id+"%2F"+image+"?alt=media"} className="w-full aspect-video object-cover group-hover:opacity-80 transition-all duration-300" />
                <div className="bg-black text-white p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:opacity-100 opacity-0 transition-all duration-300">
                <ArrowOutward className="text-3xl" />
                </div>
            </a>)
        })}
        </div>

        </>}

      </section>

      <Footer />

    </main>
  );
}
