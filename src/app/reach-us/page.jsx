import Image from "next/image";
import roundIcons from "../../assets/reach-us/round-icon.svg";
import contact from "../../assets/icons/contact.svg";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location-contact.svg";
import Link from "next/link";

export default function page() {
    return (
        <div class="min-h-[70vh] bg-gray-100 flex flex-col gap-8 md:gap-0 py-12 md:flex-row justify-around items-center">
            <div class="w-[90%] md:w-[500px] min-h-[50vh] p-6 bg-gradient-to-b from-[#0A075F] to-[#150FC5] rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500 text-white relative overflow-hidden">
                <div className="flex flex-col gap-12 justify-center z-10 relative">
                    <h1 className="text-xl md:text-3xl pt-4">Contact Information</h1>
                    <div className="space-y-6">
                        <p className="flex gap-4 items-center"><Image src={contact} alt="" /> Dr. S. Kanaga Suba Raja</p>
                        <Link href={"tel:+919486684400"} className="flex gap-4 items-center"><Image src={phone} alt="" /> +919486684400</Link>
                        <Link href={"mailto:hod.cse@ist.srmtrichy.edu.in"} className="flex gap-4 items-center"><Image src={mail} alt="" />hod.cse@ist.srmtrichy.edu.in</Link>
                        <div className="flex gap-4">
                            <Image src={location} alt="" />
                            <div>
                                <p> SRM Institute of Science and Technology</p>
                                <p>Tiruchirappalli Campus</p>
                                <p> Irungalur, Near Samayapuram Toll Plaza</p>
                                <p>Tiruchirappalli 621105</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={roundIcons} alt="icon" className="absolute -bottom-12 -right-6" />
            </div>
            <div className="hidden md:flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.105612194349!2d78.75247028636714!3d10.955394326050465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb9b231ae861%3A0xe015b4e7a6e2c2d6!2sSRM%20Institute%20of%20Science%20%26%20Technology%2C%20Tiruchirapalli%20Campus!5e0!3m2!1sen!2sin!4v1710017362297!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="md:hidden flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.105612194349!2d78.75247028636714!3d10.955394326050465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb9b231ae861%3A0xe015b4e7a6e2c2d6!2sSRM%20Institute%20of%20Science%20%26%20Technology%2C%20Tiruchirapalli%20Campus!5e0!3m2!1sen!2sin!4v1710017362297!5m2!1sen!2sin" width="300" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
