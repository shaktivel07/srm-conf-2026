import Image from "next/image";
import organizedBy from "../../assets/home/organized-by.png"

export default function OrangizedCard() {
    return (
        <div className="bg-gradient-to-r from-yellow to-pink-600 min-h-[30vh]  w-full text-white flex relative justify-evenly overflow-hidden md:py-6">
            <div className=" flex flex-col justify-start items-end md:justify-center md:items-start gap-4 w-fit pt-4 md:pr-0 md:pt-0">
                <h3 className="text-xl font-semibold md:text-3xl">Organized By</h3>
                <hr className="w-1/3 border-t-[3px]" />
                <div className="text-end md:text-start text-xs md:text-xl">
                    <p>Department of Computer Science and Engineering</p>
                    <p>SRM Institute of Science and Technology,</p>
                    <p>SRM Nagar, Irungalur Near Samayapuram Toll Plaza,</p>
                    <p>Trichy Chennai Highway, Tiruchirappalli,</p>
                    <p>Tamil Nadu - 621105, India.</p>
                </div>
            </div>
            <Image src={organizedBy} alt="organizedBy" className="w-32 absolute -bottom-6 -left-6 md:relative md:bottom-auto md:left-auto md:w-auto md:max-w-[22rem]" />
        </div>
    )
}
