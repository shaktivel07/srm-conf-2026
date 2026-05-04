"use client";

import Image from "next/image";
import landingBg from "../../assets/home/landing-bg.png";
import calendar from "../../assets/icons/calendar.svg";
import location from "../../assets/icons/location.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Banner() {
    const router = useRouter();

    return (
        <>
            <div className="relative w-full min-h-[50vh] md:min-h-[60vh]">
                {/* bg */}
                <Image src={landingBg} alt="bg" className="object-cover w-full min-h-[50vh] md:min-h-[60vh]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* bg-overlay */}
                    <div className="custom-gradient opacity-85 absolute inset-0" />
                    {/* content */}
                    <div className="text-white z-10 text-center w-full">
                        <div className="md:space-y-4">
                            <h1 className="text-xl md:text-4xl xl:text-5xl font-bold">Sustainable Multimodal AI</h1>
                            <h1 className="text-xl md:text-4xl xl:text-5xl  font-bold">for Research & Tech Transfer</h1>
                            <h1 className="text-xl md:text-xl xl:text-3xl font-bold">(SMARTT 2026)</h1>
                        </div>
                        <p className="mt-3 md:mt-6 flex justify-center items-center gap-3 font-medium text-sm w-full">
                            <span className="pr-4 h-[2px] w-1/5 md:1/4 bg-white"></span>
                            Hybrid Mode (Online & Offline)
                        </p>
                    </div>
                    {/* date */}
                    <div className="text-white z-10 text-center pt-4 space-y-3 mt-2 md:space-y-6">
                        <p className="flex justify-center items-center gap-3 font-medium text-sm md:text-xl">
                            <Image src={calendar} alt="calendar" className="h-8 w-fit" />
                            19TH & 20TH SEPTEMBER 2026
                        </p>
                        <Link href={""} className="flex justify-center items-center gap-3 font-medium text-sm md:text-xl">
                            <Image src={location} alt="calendar" className="h-8 w-fit" />
                            SRM IST, Tiruchirappalli
                        </Link>
                    </div>
                    {/* register */}
                    <div className="z-10 mt-4 md:mt-8">
                        <Button variant={"outline"} onClick={() => router.push("/registration")} className="bg-pink-600 text-white border-0 text-lg px-6 py-6 hover:bg-pink-700 hover:text-white flex justify-center items-center gap-2">
                            Register
                            <Image src={arrowRight} alt="arrow-right" className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
