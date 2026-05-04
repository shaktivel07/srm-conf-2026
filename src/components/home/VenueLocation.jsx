import Link from "next/link";

export default function VenueLocation() {
    return (
        <div className="flex flex-col gap-6 py-8 justify-center items-center w-full">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">VENUE <span className="text-yellow">DETAILS</span></h1>
            <div className="hidden md:flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.105612194349!2d78.75247028636714!3d10.955394326050465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb9b231ae861%3A0xe015b4e7a6e2c2d6!2sSRM%20Institute%20of%20Science%20%26%20Technology%2C%20Tiruchirapalli%20Campus!5e0!3m2!1sen!2sin!4v1710017362297!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="md:hidden flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.105612194349!2d78.75247028636714!3d10.955394326050465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb9b231ae861%3A0xe015b4e7a6e2c2d6!2sSRM%20Institute%20of%20Science%20%26%20Technology%2C%20Tiruchirapalli%20Campus!5e0!3m2!1sen!2sin!4v1710017362297!5m2!1sen!2sin" width="300" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Link href={"/reach-us"} className="bg-yellow w-fit rounded-full py-2 px-6 text-[#2E2C84] font-semibold hover:bg-yellow/80 mt-1">
                View Contact
            </Link>
        </div>
    )
}
