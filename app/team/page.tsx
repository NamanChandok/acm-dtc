'use client';
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";

const quantico = Quantico({subsets: ['latin'], weight: ['400', '700']});

const team = [
  {name: "Kartick Chauhaan", role: "Chairperson", image: "/team/kartick_c.jpg", year: "4th Year, B.Tech CSE", linkedin: "https://www.linkedin.com/in/kartick-chauhaan-123172236/", mail: "mailto:chauhaankartick@gmail.com"},
  {name: "Ananya Mathur", role: "Vice Chairperson", image: "/team/ananya_m.jpeg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kritagya Arora", role: "Webmaster", image: "/team/kritagya.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kishika Sharma", role: "Secretary", image: "/team/kishika.png", year: "4th Year, B.Tech AIML", linkedin: "/", mail: "/"},
  {name: "Ananya Tamta", role: "Secretary Associate", image: "/team/ananya_t.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Danish", role: "Treasurer", image: "/team/danish.jpg", year: "3rd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Aashi", role: "Membership Chair", image: "/team/aashi.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Akshit Lakhanpal", role: "PR Outreach Head", image: "/team/akshit.jpeg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Harshit Panchal", role: "PR Outreach Associate", image: "/team/harshit.jpeg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Harshita Meena", role: "PR Outreach Associate", image: "/team/harshita.png", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Adityan Verma", role: "Operation Head", image: "/team/adityan.jpg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Vansh Jaiswal", role: "Discipline Head", image: "/team/vansh.jpg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Isha Vashishtha", role: "Discipline Associate", image: "/team/isha.jpg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Aakash Chopra", role: "Discipline Associate", image: "/team/aakash.jpg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Mohd. Akif", role: "Discipline Associate", image: "/team/akif.jpg", year: "3rd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Prateek Srivastav", role: "Design Head", image: "/team/prateek.jpeg", year: "4th Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Shah Kamil Ahmad", role: "Design Associate", image: "/team/kamil.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Shubham Katyan", role: "Social Head", image: "/team/shubham.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kovidh Nougain", role: "Social Associate", image: "/team/kovidh.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Sanjam Kaur", role: "Social Associate", image: "/team/sanjam.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Naman Chandok", role: "Web Associate", image: "/team/naman.jpeg", year: "3rd Year, B.Tech CSE", linkedin: "https://www.linkedin.com/in/naman-chandok-874b421b0/", mail: "mailto:namanchandok1@gmail.com"},
  {name: "Yuvraj Singh", role: "Web Associate", image: "/team/yuvraj.jpeg", year: "3rd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Abhinav Chauhaan", role: "Videographer", image: "/team/abhinav.jpg", year: "2nd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Brahmjyot Singh", role: "Videographer", image: "/team/brahmjyot.jpg", year: "3rd Year, B.Tech CSE", linkedin: "/", mail: "/"},
  {name: "Kartick Sharma", role: "Videographer", image: "/team/kartick_s.jpg", year: "3rd Year, B.Tech CSE", linkedin: "/", mail: "/"},
]

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
