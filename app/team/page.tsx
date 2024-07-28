'use client';
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

const team = [
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team1.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
]

export default function About() {

  return (
    <main>

      <Navbar active="team" />

      {/* HERO */}

      <Hero page="Team" image="" />

      {/* TEAM */}

      <section className="px-8 md:px-32 md:py-20 py-12 space-y-8">

        <div className="grid md:grid-cols-4 place-items-center gap-6">
          <p></p>
        {team.map((member, index) => {
           return (<>
            <TeamCard key={index} {...member} />
            {index == 1 ? <p></p> : null}
            </>)
        })}
        </div>

      </section>

      <Footer />

    </main>
  );
}
