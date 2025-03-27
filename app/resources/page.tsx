"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowOutward } from "@mui/icons-material";
import { storage } from "@/firebase";
import { listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function Resources() {
	// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

	const [resources, setResources] = useState<string[]>([]);

	useEffect(() => {
		const resourcesRef = ref(storage, "resources");
		listAll(resourcesRef).then((res) => {
			const r: string[] = [];
			res.items.forEach((itemRef) => {
				r.push(itemRef.name);
			});
			setResources(r);
		});
	}, []);

	return (
		<main>
			<Navbar active="resources" />

			{/* HERO */}

			<Hero page="Resources" />

			{/* RESOURCES */}

			<section className="px-8 md:px-16 lg:px-32 md:py-20 py-12 space-y-12">
				<div className="grid md:grid-cols-4 gap-4">
					{resources.map((resource: String, index) => {
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
			</section>

			<Footer />
		</main>
	);
}
