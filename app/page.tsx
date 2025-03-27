"use client";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import {
	Instagram,
	LinkedIn,
	X,
	ArrowLeft,
	ArrowRight,
	Email,
	ArrowOutward,
} from "@mui/icons-material";
import { Quantico } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { listAll, ref } from "firebase/storage";
import { db, storage } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const quantico = Quantico({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
	// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

	const [eventScroll, setEventScroll] = useState(0);
	const [eventScrollMax, setEventScrollMax] = useState(10);
	const [subscribed, setSubscribed] = useState(false);

	const [resources, setResources] = useState<string[]>([]);

	interface Event {
		name: string;
		date: string;
		cover: string;
		link: string;
		description: string;
		id: string;
	}

	const [events, setEvents] = useState<Event[]>([]);

	useEffect(() => {
		const a: Event[] = [];
		const eventsRef = collection(db, "events");
		getDocs(eventsRef).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				a.push({
					name: doc.data().name,
					date: doc.data().date,
					cover: doc.data().cover,
					link: doc.data().link,
					description: doc.data().description,
					id: doc.id,
				});
			});
			setEvents(a);
		});

		const resourcesRef = ref(storage, "resources");

		listAll(resourcesRef).then((res) => {
			const r: string[] = [];
			res.items.forEach((itemRef, index) => {
				if (index > 3) return;
				r.push(itemRef.name);
			});
			setResources(r);
		});

		const events = document.getElementById("scroller") as HTMLElement;
		const left = document.getElementById("scrollLeft") as HTMLElement;
		const right = document.getElementById("scrollRight") as HTMLElement;

		events?.addEventListener("scroll", () => {
			setEventScroll(events.scrollLeft);
			setEventScrollMax(events.scrollWidth - events.clientWidth);
		});
		left?.addEventListener("click", () => {
			events.scrollLeft -= 336;
		});
		right?.addEventListener("click", () => {
			events.scrollLeft += 336;
		});

		return () => {
			events?.removeEventListener("scroll", () => {});
			left?.removeEventListener("click", () => {});
			right?.removeEventListener("click", () => {});
		};
	}, []);

	const typewriter = Typewriter({
		loop: true,
		cursor: true,
		cursorStyle: "_",
		delaySpeed: 3000,
		words: ["mentor", "guide", "teacher"],
	});

	const mentors = [
		{ name: "Dr. Neha Jain", role: "Faculty Sponsor", image: "/nehajain.jpeg" },
	];

	const handleSubscribe = (e: any) => {
		e.preventDefault();
		const email = e.target[0].value;
		fetch("/api/mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: email }),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err))
			.finally(() => setSubscribed(true));
	};

	return (
		<main>
			<Navbar active="home" />

			{/* HERO */}

			<header className="flex flex-col md:flex-row-reverse items-center gap-8 md:justify-between justify-center h-screen p-8 md:px-16 lg:px-32 shadow-lg">
				<img
					src="/header-logo.png"
					alt="acm-dtc"
					className="hidden md:block w-96 aspect-square rounded-xl"
				/>

				<div className="md:space-y-12 space-y-8">
					<div className="md:space-y-4 space-y-2">
						<h3 className="text-lg md:text-xl text-primary">
							Inspiring the Future of Computing at
						</h3>
						<h1
							className={
								quantico.className +
								" text-45xl font-semibold tracking-wider uppercase"
							}
						>
							ACM Delhi Technical Campus
						</h1>
						<p className="max-w-2xl">
							ACM Delhi Technical Campus is dedicated to fostering creativity
							and technical prowess. We provide a platform for aspiring
							technologists to learn, grow, and lead...{" "}
							<a href="/about" className="text-primary">
								more
							</a>
						</p>
					</div>

					<div className="space-x-4">
						<a href="#about" className="btn-secondary">
							Know More
						</a>
						<a
							href="https://linktr.ee/acm_dtc"
							target="_blank"
							className="btn-primary"
						>
							Join Us
						</a>
					</div>

					<div className="space-x-2">
						<a
							href="https://www.instagram.com/acm_dtc/"
							target="_blank"
							className="hover:text-primary transition-all duration-300"
						>
							<Instagram className="text-4xl" />
						</a>
						<a
							href="https://www.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu/"
							target="_blank"
							className="hover:text-primary transition-all duration-300"
						>
							<LinkedIn className="text-4xl" />
						</a>
						<a
							href="https://x.com/ACM_DTC"
							target="_blank"
							className="hover:text-primary transition-all duration-300"
						>
							<X className="text-4xl" />
						</a>
					</div>
				</div>
			</header>

			{/* ABOUT */}

			<section
				className="px-8 md:px-16 lg:px-32 md:py-20 py-12 space-y-12"
				id="about"
			>
				<div className="flex flex-col md:flex-row md:gap-16 gap-8">
					<img
						src="/about1.svg"
						alt="about"
						className="md:w-1/2 aspect-video"
					/>

					<div className="space-y-2 pt-8 md:w-1/2">
						<h3 className="uppercase text-xl font-medium text-primary">
							let&apos;s see
						</h3>
						<h2
							className={
								quantico.className + " uppercase text-4xl font-semibold"
							}
						>
							what exactly acm is?
						</h2>
						<p className="pt-4 pb-8">
							ACM (Association for Computing Machinery) is a major organization
							in the field of computing and information technology. It is a
							global community that offers a wide range of resources and
							activities for professionals, educators, and students.
						</p>
						<a href="/about" className="btn-primary box-border">
							Know more
						</a>
					</div>
				</div>

				<div className="flex flex-col md:flex-row-reverse md:gap-16 gap-8">
					<img
						src="/about2.svg"
						alt="about"
						className="md:w-1/2 aspect-video"
					/>

					<div className="space-y-2 pt-16 md:w-1/2">
						<h3 className="uppercase text-xl font-medium text-primary">
							want to know
						</h3>
						<h2
							className={
								quantico.className + " uppercase text-4xl font-semibold"
							}
						>
							how acm dtc will help you?
						</h2>
						<ul className="pt-4 pb-8 space-y-2">
							<li>Work together on innovative projects</li>
							<li>Connect with industry professionals, alumni and peers</li>
							<li>Participate in hackathons and competitions</li>
							<li>Get access to exclusive resources and tools</li>
							<li>Enhance technical skills through workshops and projects</li>
						</ul>
					</div>
				</div>
			</section>

			{/* MENTORS */}

			<section className="bg-quaternary px-8 md:px-16 lg:px-32 md:py-20 py-12 space-y-12">
				<h2
					className={
						quantico.className + " uppercase text-4xl font-semibold text-center"
					}
				>
					Meet our <span className="text-primary">{typewriter}</span>
				</h2>

				<div className="flex flex-col md:flex-row justify-center gap-12">
					{mentors.map((mentor, index) => (
						<div
							key={index}
							className="md:w-80 rounded-lg overflow-hidden shadow-md"
						>
							<img
								src={mentor.image}
								alt={mentor.name}
								className="aspect-square object-cover"
							/>
							<div className="bg-primary p-4">
								<h3 className="text-xl font-semibold text-white">
									{mentor.name}
								</h3>
								<p className="text-quaternary">{mentor.role}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="px-8 md:px-16 lg:px-32 md:py-20 py-12">
				{/* EVENTS */}

				<div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
					<h3
						className={quantico.className + " font-semibold text-3xl uppercase"}
					>
						Check out our recent events
					</h3>
					<a
						href="/events"
						className="capitalize text-right underline underline-offset-2 decoration-2 decoration-primary text-primary text-lg font-medium"
					>
						see more
					</a>
				</div>

				<div className="relative">
					<ArrowLeft
						id="scrollLeft"
						className="absolute -left-4 top-0 bottom-0 m-auto text-4xl text-primary bg-quaternary shadow-md rounded-full cursor-pointer"
						style={eventScroll === 0 ? { display: "none" } : {}}
					/>

					<div className="overflow-x-scroll flex gap-4 py-4" id="scroller">
						{events
							.sort(
								(a, b) =>
									new Date(b.date).getTime() - new Date(a.date).getTime()
							)
							.map((event, index) => {
								if (new Date(event.date).getTime() > new Date().getTime())
									return;
								return <EventCard key={index} {...event} />;
							})}
					</div>

					<ArrowRight
						id="scrollRight"
						className="absolute -right-4 top-0 bottom-0 m-auto text-4xl text-primary bg-quaternary shadow-md rounded-full cursor-pointer"
						style={
							eventScroll >= eventScrollMax - 2
								? { display: "none" }
								: { display: "block" }
						}
					/>
				</div>

				<hr className="md:my-20 my-10 border-black/20" />

				{/* AWARDS */}

				<h2
					className={
						quantico.className + " text-3xl font-semibold text-center uppercase"
					}
				>
					Awards and Achievements
				</h2>

				<div className="flex flex-col md:flex-row gap-3 justify-center my-6 ">
					<img
						src="/awards/1.jpg"
						alt="award"
						className="shadow-md md:h-[30rem]"
					/>
					<img
						src="/awards/2.jpg"
						alt="award"
						className="shadow-md md:h-[30rem]"
					/>
				</div>
				<p className="mx-auto max-w-4xl">
					The ACM Student Chapter at DTC won the "Honorable Mention for
					Outstanding Chapter Website Award" at the ACM India Student Chapter
					Awards for the year 2024.
				</p>

				<hr className="md:my-20 my-10 border-black/20" />

				{/* CHAIRPERSON */}

				<h2
					className={
						quantico.className + " text-3xl font-semibold text-center uppercase"
					}
				>
					Meet our acm Chairperson
				</h2>

				<div className="rounded-xl bg-quaternary overflow-hidden mt-6 mb-8 flex md:flex-row-reverse flex-col md:justify-between">
					<img
						src="/team/kartick_c.jpg"
						alt="Kartick Chauhaan"
						className="md:w-96 aspect-square object-cover object-top bg-slate-900"
					/>
					<div className="p-8 space-y-4 pt-12">
						<h3 className="text-2xl md:text-3xl font-semibold">
							Kartick Chauhaan
						</h3>
						<p className="max-w-2xl">
							I&apos;m Kartick Chauhaan, a final-year Computer Science student
							and the proud Chairperson of our ACM Student Chapter. As your
							Chairperson, I&apos;m dedicated to fostering a vibrant community
							for computer science enthusiasts. Join us for exciting events,
							workshops, and networking opportunities.
							<br />
							<br />
							I encourage you to explore our website, join our events, and
							become an active member of our community. Together, we can shape
							the future of technology and make a positive impact on the world.
							<br />
							<br />
							Let&apos;s innovate, collaborate, and achieve great things
							together!
						</p>
						<div className="space-x-2">
							<a
								href="https://www.linkedin.com/in/kartick-chauhaan-123172236/"
								target="_blank"
								className="hover:text-primary transition-all duration-300"
							>
								<LinkedIn className="text-4xl" />
							</a>
							<a
								href="mailto:chauhaankartick@gmail.com"
								target="_blank"
								className="hover:text-primary transition-all duration-300"
							>
								<Email className="text-4xl" />
							</a>
						</div>
					</div>
				</div>

				<div className="text-center">
					<a href="/team" className="btn-secondary capitalize tracking-wide">
						See team members
					</a>
				</div>

				<hr className="md:my-20 my-10 border-black/20" />

				{/* RESOURCES */}

				<div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
					<h3
						className={quantico.className + " font-semibold text-3xl uppercase"}
					>
						resources
					</h3>
					<a
						href="/resources"
						className="capitalize text-right underline underline-offset-2 decoration-2 decoration-primary text-primary text-lg font-medium"
					>
						see more
					</a>
				</div>

				<div className="grid md:grid-cols-4 gap-4">
					{resources.slice(0, 4).map((resource: String, index) => {
						const pdfUrl =
							"https://firebasestorage.googleapis.com/v0/b/acm-dtc.appspot.com/o/resources%2F" +
							resource +
							"?alt=media";
						return (
							<a
								target="_blank"
								key={index}
								href={pdfUrl}
								className="place-self-center border-2 border-black rounded-lg overflow-hidden z-10 relative group h-96 md:w-72 shadow-sm hover:shadow-md transition-all duration-300 justify-center items-center flex"
							>
								<Document file={pdfUrl}>
									<Page pageNumber={1} width={280} />
								</Document>
								<div className="bg-black/40 flex flex-col gap-2 items-center justify-center group-hover:opacity-100 opacity-0 transition-all duration-300 absolute inset-0 z-20">
									<p className="text-white">{resource}</p>
									<div className="bg-black text-white p-4 rounded-full">
										<ArrowOutward className="text-5xl" />
									</div>
									<small className="text-white">Download</small>
								</div>
							</a>
						);
					})}
					{resources.length == 0 && (
						<p className="text-center col-span-4">No resources available yet</p>
					)}
				</div>

				{/* NEWSLETTER */}

				<div className="rounded-xl bg-gray-700 md:p-8 p-6 md:py-24 md:px-16 md:mt-32 mt-12 flex flex-col md:flex-row gap-8 md:justify-between items-center">
					<h4
						className={
							quantico.className +
							" text-white text-3xl font-semibold uppercase tracking-wide"
						}
					>
						Subscribe to our NEWSLETTER
					</h4>

					{subscribed ? (
						<p className="text-white font-medium opacity-80">
							Thanks for Subscribing!
						</p>
					) : (
						<form
							onSubmit={handleSubscribe}
							className="flex flex-col md:flex-row overflow-hidden bg-white md:w-1/2 lg:w-2/5 w-full rounded-lg"
						>
							<input
								type="email"
								required
								placeholder="Enter your email"
								className="p-4 w-full rounded-lg"
							/>
							<input
								type="submit"
								className="p-4 bg-primary text-white cursor-pointer hover:bg-primary/90 transition-all duration-300 rounded-l-none text-sm uppercase"
								value="subscribe"
							/>
						</form>
					)}
				</div>
			</section>

			<Footer />
		</main>
	);
}
