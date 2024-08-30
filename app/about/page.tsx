'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { AssignmentInd, Public, KeyboardArrowDown } from "@mui/icons-material";

import { useState, useEffect } from "react";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

export default function About() {

  const [accordian, setAccordian] = useState(1);

  useEffect(() => {
    const accordian1 = document.getElementById("accordian1") as HTMLElement;
    const accordian2 = document.getElementById("accordian2") as HTMLElement;
    const accordian3 = document.getElementById("accordian3") as HTMLElement;

    if (accordian == 1) {
      accordian1.style.opacity = "1";
      accordian1.style.maxHeight = "100%";
      accordian1.style.paddingBlock = "0.75rem";
      accordian2.style.opacity = "0";
      accordian2.style.maxHeight = "0";
      accordian2.style.paddingBlock = "0";
      accordian3.style.opacity = "0";
      accordian3.style.maxHeight = "0";
      accordian3.style.paddingBlock = "0";
    } else if (accordian == 2) {
      accordian1.style.opacity = "0";
      accordian1.style.maxHeight = "0";
      accordian1.style.paddingBlock = "0";
      accordian2.style.opacity = "1";
      accordian2.style.maxHeight = "100%";
      accordian2.style.paddingBlock = "0.75rem";
      accordian3.style.opacity = "0";
      accordian3.style.maxHeight = "0";
      accordian3.style.paddingBlock = "0";
    } else if (accordian == 3) {
      accordian1.style.opacity = "0";
      accordian1.style.maxHeight = "0";
      accordian1.style.paddingBlock = "0";
      accordian2.style.opacity = "0";
      accordian2.style.maxHeight = "0";
      accordian2.style.paddingBlock = "0";
      accordian3.style.opacity = "1";
      accordian3.style.maxHeight = "100%";
      accordian3.style.paddingBlock = "0.75rem";
    }
  }, [accordian]);

  return (
    <main>

      <Navbar active="about" />

      {/* HERO */}

      <Hero page="About" image="/about_header.jpg" />

      {/* ABOUT */}

      <section className="px-8 md:px-32 md:py-20 py-12 md:space-y-40 space-y-12">

        <div className="grid md:grid-cols-2 md:gap-24 gap-12">
          <img src="/about_logo.png" alt="about" className="md:hidden block object-contain aspect-[4/3]" />

          <div className="space-y-3">
            <h3 className="uppercase text-sm font-medium text-primary">About us</h3>
            <h2 className={quantico.className+" uppercase text-4xl font-semibold"}>Association for Computing Machinery</h2>
            <h3 className="text-xl font-medium">&quot;Advancing Computing as a Science & Profession&quot;</h3>
            <p>The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947 and is the world&apos;s largest scientific and educational computing society. It is a not-for-profit professional membership group. Its membership is more than 100,000 as of 2011. Its headquarters are in New York City. The ACM is an umbrella organization for academic and scholarly interests in computer science.</p>
            <div className="grid md:grid-cols-2 gap-6 pt-4 md:pt-12">
              <div className="flex gap-2">
                <AssignmentInd className="text-4xl text-primary" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-xl ">Shaping Future</h3>
                  <p>For over 70 years and see what&apos;s next.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Public className="text-4xl text-primary" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-xl ">Globally Acclaimed</h3>
                  <p>More than 100,000 members worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <img src="/about_logo.png" alt="about" className="md:block hidden object-contain aspect-[4/3]" />
          
          <iframe src="https://www.youtube.com/embed/cUCa76oCZgs?si=K_1MsTMrFgiHTZb_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="md:col-span-2 w-full h-[35rem]"></iframe>

          <div className="space-y-3">
            <h3 className="uppercase text-sm font-medium text-primary">about acm dtc</h3>
            <h2 className={quantico.className+" uppercase text-4xl font-semibold"}>DTC ACM Student Chapter</h2>
            <p>DTC ACM Student Chapter believes in providing a healthy environment where creativity and imagination can flourish. Through collaboration and engagement in a plethora of technical activities and projects, we envision to build a community of like-minded people who love to code, collaborate and have fun!</p>
          </div>

          <div className="border-2 border-gray-200 rounded-md divide-y-2 divide-gray-200">
            <p onClick={()=>{setAccordian(1)}} className="p-3 bg-gray-100 cursor-pointer text-lg font-semibold flex justify-between">01. Our Mission <KeyboardArrowDown className={accordian == 1 ? "rotate-180" : ""} /></p>
            <div id="accordian1" className="px-3 transition-all duration-300 opacity-0 max-h-0 will-change-[max-height]">To advance the field of computing and empower individuals within it, promoting innovation and excellence in computing education, research, and practice, while fostering a global community that collaborates, shares knowledge, and addresses critical societal challenges.</div>
            <p onClick={()=>{setAccordian(2)}} className="p-3 bg-gray-100 cursor-pointer text-lg font-semibold flex justify-between">02. Our Plan <KeyboardArrowDown className={accordian == 2 ? "rotate-180" : ""} /></p>
            <div id="accordian2" className="px-3 transition-all duration-300 opacity-0 max-h-0 will-change-[max-height]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, maiores! Debitis error, obcaecati consequatur cum modi quo natus dolores nihil quae! Quia officiis voluptatibus, ipsa iste mollitia sequi officia quasi!</div>
            <p onClick={()=>{setAccordian(3)}} className="p-3 bg-gray-100 cursor-pointer text-lg font-semibold flex justify-between">03. Our Vision <KeyboardArrowDown className={accordian == 3 ? "rotate-180" : ""} /></p>
            <div id="accordian3" className="px-3 transition-all duration-300 opacity-0 max-h-0 will-change-[max-height]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, maiores! Debitis error, obcaecati consequatur cum modi quo natus dolores nihil quae! Quia officiis voluptatibus, ipsa iste mollitia sequi officia quasi!</div>
          </div>

          <img src="/about_logo.png" alt="about" className="md:block hidden object-contain aspect-[4/3]" />

          <div className="space-y-3">
            <h2 className={quantico.className+" uppercase text-4xl font-semibold"}>Membership benefits</h2>
            <p>A vast network of nearly 100,000 highly dedicated student and professional peers. A full year subscription to ACM magazines and news letters (Communications of the ACM, XRDS: Crossroads, MemberNet etc.). The option to subscribe to the full ACM Digital Library, which includes over 2 million pages of text. Become a member of computing community through one of hundreds of Professional and Student Chapters worldwide. Participation in ACM Distinguished Speakers Program (DSP). Renowned International Thought Leaders Speaking on the Most Important Topics in Computing Today. Unique volunteering opportunities to gain hands-on experience and knowledge of the marketplace.</p>
            <div className="space-x-2 pt-4">
              <a href="/" className="btn-primary">Learn More</a>
              <a href="/" className="btn-secondary">Form Link</a>
            </div>
          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
