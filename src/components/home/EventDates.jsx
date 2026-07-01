import Image from "next/image";
import date from "../../assets/icons/date.svg";

export default function EventDates() {
    return (
        <div className="flex flex-col items-center justify-center md:justify-around gap-8 py-6 scroll-m-20" id="dates">
            <div className="flex justify-center items-center gap-5 -ml-20">
                <Image src={date} alt="date" />
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">KEY <span className="text-yellow">DATES</span></h1>
            </div>
            <div className="flex flex-col gap-6 px-5 py-6 md:px-0 md:py-0">
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">1</span><p>Paper Submission Deadline: <span className="font-semibold">15<sup>th</sup> August 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">2</span><p>Acceptance Notification: <span className="font-semibold">15<sup>th</sup> October 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">3</span><p>Camera Ready Submission: <span className="font-semibold">30<sup>th</sup> October 2026</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">4</span><p>Conference Dates: <span className="font-semibold">26<sup>th</sup> and 27<sup>th</sup> November 2026</span></p></div>
            </div>
        </div>
    )
};