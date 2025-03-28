"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Quantico } from "next/font/google";
import { AssignmentInd, Public, KeyboardArrowDown } from "@mui/icons-material";

import { useState, useEffect } from "react";

const quantico = Quantico({ subsets: ["latin"], weight: ["400", "700"] });

export default function About() {
	const [accordian, setAccordian] = useState(1);

	useEffect(() => {
		const accordian1 = document.getElementById("accordian1") as HTMLElement;
		const accordian2 = document.getElementById("accordian2") as HTMLElement;
		const accordian3 = document.getElementById("accordian3") as HTMLElement;

		if (accordian == 1) {
			accordian1.style.opacity = "1";
			accordian1.style.maxHeight = accordian1.scrollHeight + 20 + "px";
			accordian1.style.paddingBlock = "0.5rem";
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
			accordian2.style.maxHeight = accordian2.scrollHeight + 20 + "px";
			accordian2.style.paddingBlock = "0.5rem";
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
			accordian3.style.maxHeight = accordian3.scrollHeight + 20 + "px";
			accordian3.style.paddingBlock = "0.5rem";
		} else {
			accordian1.style.opacity = "0";
			accordian1.style.maxHeight = "0";
			accordian1.style.paddingBlock = "0";
			accordian2.style.opacity = "0";
			accordian2.style.maxHeight = "0";
			accordian2.style.paddingBlock = "0";
			accordian3.style.opacity = "0";
			accordian3.style.maxHeight = "0";
			accordian3.style.paddingBlock = "0";
		}
	}, [accordian]);

	return (
		<main>
			<Navbar active="about" />

			{/* HERO */}

			<Hero page="About" />

			{/* ABOUT */}

			<section className="px-8 md:px-16 lg:px-32 md:py-20 py-12 md:space-y-40 space-y-12">
				<div className="grid md:grid-cols-2 md:gap-24 gap-12">
					<img
						src="/about_logo.png"
						alt="about"
						className="md:hidden block object-contain aspect-[4/3]"
					/>

					<div className="space-y-3">
						<h3 className="uppercase text-sm font-medium text-primary">
							About us
						</h3>
						<h2
							className={
								quantico.className + " uppercase text-4xl font-semibold"
							}
						>
							Association for Computing Machinery
						</h2>
						<h3 className="text-xl font-medium">
							&quot;Advancing Computing as a Science & Profession&quot;
						</h3>
						<p>
							The Association for Computing Machinery (ACM) is an international
							learned society for computing. It was founded in 1947 and is the
							world&apos;s largest scientific and educational computing society.
							It is a not-for-profit professional membership group. Its
							membership is more than 100,000 as of 2011. Its headquarters are
							in New York City. The ACM is an umbrella organization for academic
							and scholarly interests in computer science.
						</p>
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

					<img
						src="/about_logo.png"
						alt="about"
						className="md:block hidden h-[25rem] place-self-center"
					/>

					<iframe
						src="https://www.youtube.com/embed/4-m8KYYdaWc?si=qwfv8Y7t7cPUHPgJ"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="md:col-span-2 w-full h-[40rem]"
					></iframe>

					<div className="space-y-3">
						<h3 className="uppercase text-sm font-medium text-primary">
							about acm dtc
						</h3>
						<h2
							className={
								quantico.className + " uppercase text-4xl font-semibold"
							}
						>
							DTC ACM Student Chapter
						</h2>
						<p>
							DTC ACM Student Chapter believes in providing a healthy
							environment where creativity and imagination can flourish. Through
							collaboration and engagement in a plethora of technical activities
							and projects, we envision to build a community of like-minded
							people who love to code, collaborate and have fun!
						</p>
					</div>

					<div className="border-2 h-min border-gray-200 rounded-md divide-y-2 divide-gray-200 overflow-hidden">
						<button
							onClick={() => {
								accordian == 1 ? setAccordian(0) : setAccordian(1);
							}}
							className="w-full relative z-10 p-3 bg-gray-100 cursor-pointer text-lg font-semibold flex justify-between"
						>
							01. Our Mission{" "}
							<KeyboardArrowDown
								className={accordian == 1 ? "rotate-180" : ""}
							/>
						</button>
						<div
							id="accordian1"
							className="px-3 transition-all duration-300 opacity-0 max-h-0 will-change-[max-height]"
						>
							To advance the field of computing and empower individuals within
							it, promoting innovation and excellence in computing education,
							research, and practice, while fostering a global community that
							collaborates, shares knowledge, and addresses critical societal
							challenges.
						</div>
						<button
							onClick={() => {
								accordian == 2 ? setAccordian(0) : setAccordian(2);
							}}
							className="w-full relative z-10 p-3 bg-gray-100 cursor-pointer text-lg font-semibold flex justify-between"
						>
							02. Our Vision{" "}
							<KeyboardArrowDown
								className={accordian == 2 ? "rotate-180" : ""}
							/>
						</button>
						<div
							id="accordian2"
							className="px-3 transition-all duration-300 opacity-0 max-h-0 will-change-[max-height]"
						>
							Our vision is to be the leading global community that empowers
							computing professionals, students, and researchers by driving
							technological innovation, bridging academia and industry, and
							fostering inclusivity. We aim to create a collaborative
							environment where everyone, regardless of background, can access
							opportunities in computing and contribute to the advancement of
							society through responsible and transformative technology.
						</div>
						<button
							onClick={() => {
								accordian == 3 ? setAccordian(0) : setAccordian(3);
							}}
							className="w-full relative z-10 p-3 bg-gray-100 cursor-pointer text-lg font-semibold flex justify-between"
						>
							03. Our Plan{" "}
							<KeyboardArrowDown
								className={accordian == 3 ? "rotate-180" : ""}
							/>
						</button>
						<div
							id="accordian3"
							className="px-3 transition-all duration-300 opacity-0 max-h-0 will-change-[max-height]"
						>
							To achieve our vision, we will organize educational and networking
							events, publish and share knowledge, build strategic partnerships,
							and support student development. Through workshops, seminars,
							hackathons, and collaborations, we aim to foster a thriving
							ecosystem where computing professionals can excel, students can
							reach their full potential, and society can benefit from the
							transformative power of technology
						</div>
					</div>

					<img
						src="/about_logo.png"
						alt="about"
						className="md:block hidden h-[25rem] place-self-center"
					/>

					<div className="space-y-3">
						<h2
							className={
								quantico.className + " uppercase text-4xl font-semibold"
							}
						>
							Membership benefits
						</h2>
						<p>
							A vast network of nearly 100,000 highly dedicated student and
							professional peers. A full year subscription to ACM magazines and
							news letters (Communications of the ACM, XRDS: Crossroads,
							MemberNet etc.). The option to subscribe to the full ACM Digital
							Library, which includes over 2 million pages of text. Become a
							member of computing community through one of hundreds of
							Professional and Student Chapters worldwide. Participation in ACM
							Distinguished Speakers Program (DSP). Renowned International
							Thought Leaders Speaking on the Most Important Topics in Computing
							Today. Unique volunteering opportunities to gain hands-on
							experience and knowledge of the marketplace.
						</p>
						<div className="space-x-2 pt-4">
							<a
								href="https://www.acm.org/membership/membership-benefits"
								className="btn-primary"
							>
								Learn More
							</a>
							<a
								href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD"
								className="btn-secondary"
							>
								Join ACM
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
