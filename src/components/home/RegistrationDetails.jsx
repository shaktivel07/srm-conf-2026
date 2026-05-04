import Image from "next/image";
import tick from "../../assets/icons/tick-arrow.svg";

export default function RegistrationDetails() {
    return (
        <div className="container mx-auto px-4 py-8 scroll-m-16" id="registration">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 text-center pb-8 uppercase">Registration &<span className="text-yellow"> Pricing</span></h1>
            <div className="flex flex-col justify-center items-center mb-8">
                <div className="flex flex-col justify-center w-fit pb-8 md:max-w-[70%]">
                    <h3 className="text-xl font-bold mb-4">Registration Guidelines:</h3>
                    <ul className="pl-6 space-y-5 md:space-y-2 -ml-2">
                        <li className="flex gap-2 md:items-center"><Image src={tick} alt='-' className='size-5' />For each accepted paper, at least one of the authors must register for the conference.</li>
                        <li className="flex gap-2 md:items-center"><Image src={tick} alt='-' className='size-5' />One registration in the Student category allows one paper presentation/publication.</li>
                        <li className="flex gap-2 md:items-center"><Image src={tick} alt='-' className='size-5' />One registration in the Faculty category allows two paper presentations/publications (provided that both papers have been accepted upon peer review).</li>
                        <li className="flex gap-2 md:items-center"><Image src={tick} alt='-' className='size-5' />Registration in the Author&apos;s Registration Category is mandatory for the presentation of the paper in the conference.</li>
                        <li className="flex gap-2 md:items-center"><Image src={tick} alt='-' className='size-5' />Inclusion of the paper in the conference proceedings.</li>
                        <li className="flex gap-2 md:items-center"><Image src={tick} alt='-' className='size-5' />If one of the authors of the paper has registered in the author&apos;s registration category, then all other authors of the paper may register under the co-authors&apos; registration category if they wish to attend the conference.</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center w-[90%] overflow-x-auto md:overflow-auto md:max-w-[70%]">
                    <h3 className="text-xl font-bold mb-4">Per Person Registration Fee Structure:</h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 py-2 px-4 text-left">Category</th>
                                <th className="border border-gray-300 py-2 px-4 text-left">Student / Research Scholar</th>
                                <th className="border border-gray-300 py-2 px-4 text-left">Faculty / Academician</th>
                                <th className="border border-gray-300 py-2 px-4 text-left">Industry Professional</th>
                                <th className="border border-gray-300 py-2 px-4 text-left">Co-Author / Attendee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 py-2 px-4 text-left">Authors from India (INR)</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">₹13,000</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">₹14,000</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">₹15,000</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">₹2,000</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 py-2 px-4 text-left">Authors from outside India (USD)</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">$200</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">$200</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">$200</td>
                                <td className="border border-gray-300 py-2 px-4 text-left">$65</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 text-sm text-gray-600">* Authors would be able to avail an early bird discount of 10% on the registration fee if they register before the specified date.</p>
                </div>
            </div>
        </div>
    );
};