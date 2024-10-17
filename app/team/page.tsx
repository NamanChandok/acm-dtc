'use client';
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

import team from "./team_data";

export default function Team() {

  return (
    <main>

      <Navbar active="team" />

      {/* HERO */}

      <Hero page="Team" />

      {/* TEAM */}

      <section className="px-8 md:px-16 lg:px-32 md:py-20 py-12 space-y-8">

        <div className="grid md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
          <div className="flex flex-col md:flex-row lg:gap-8 gap-6 justify-center md:col-span-3 lg:col-span-4">
            {team.map((member, index) => {
              if (index < 2) return (<TeamCard key={index} {...member} />)
              })}
          </div>
        {team.map((member, index) => {
          if (index > 1) return (<TeamCard key={index} {...member} />)
        })}
        </div>

      </section>

      <Footer />

    </main>
  );
}
