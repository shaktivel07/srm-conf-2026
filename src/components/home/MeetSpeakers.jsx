import Image from "next/image";
import bg from "../../assets/home/meet-speakers-bg.png";
import Link from "next/link";

export default function MeetSpeakers() {
    return (
        <div className="flex flex-col justify-start items-center pt-12 relative w-full h-[400px] lg:h-[350px]">
            <Image src={bg} alt="bg" className="w-full h-full" />
            <div className="absolute flex flex-col justify-center items-center text-white pt-6">
                <h1 className="text-3xl pb-10">Meet Our Speakers</h1>
                <p className="px-4 md:px-0 md:w-3/5 text-center pb-5">Plenary presentations featuring eminent researchers will elucidate cross-disciplinary and swiftly evolving topics central to this conference&apos;s agenda.</p>
                <Link href={"/program"} className="bg-yellow w-fit rounded-full py-2 px-6 text-[#2E2C84] font-semibold hover:bg-yellow/80 mt-1">
                    Read More
                </Link>
            </div>
        </div>
    )
}
