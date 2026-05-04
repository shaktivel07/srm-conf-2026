import Link from "next/link";

export default function AboutConference() {
    return (
        <div className="flex flex-col justify-center items-center w-full my-8 scroll-m-20" id="about">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">ABOUT THE <span className="text-yellow">CONFERENCE</span></h1>
            <div className="flex flex-col md:flex-row justify-around w-full pt-5 md:pt-9">
                <ul className="flex flex-col justify-around gap-3 md:gap-3 md:w-1/3 px-8 text-sm md:text-base text-justify md:px-0 md:text-justify list-disc">
                    <li>The conference will centre on the most recent advancements in the disciplines of physics, chemistry, mathematics, engineering, and material sciences as well as applications of data sciences.</li>
                    <li>It is one of the primary platforms for showcasing the outcomes of research initiatives in pertinent fields. It aims to bring together scholars from all over the world to share the most recent research findings. The conference&apos;s primary goal is to improve technology and collect significant developments in today&apos;s society, which addresses a wide range of topics related to human welfare and technology.</li>
                    <Link href={"/about"} className="bg-yellow w-fit rounded-full py-2 px-6 text-[#2E2C84] font-semibold hover:bg-yellow/80 mt-1">
                        Read More
                    </Link>
                </ul>
                <div className="hidden md:block">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ajsnl6-NpwY?si=YcTWQcWodUe0CZT9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="block md:hidden mx-auto mt-6">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/Ajsnl6-NpwY?si=YcTWQcWodUe0CZT9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
};