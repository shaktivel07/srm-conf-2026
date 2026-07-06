import Link from 'next/link';
import Image from "next/image";
import tick from "../../assets/icons/tick-arrow.svg";

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col justify-center items-center mb-8">
                    <div className="flex flex-col justify-center w-fit pb-8 md:max-w-[70%]">
                        <h3 className="text-xl font-bold mb-4">Paper Submission Instructions:</h3>
                        <p className="mb-4">While preparing your manuscript, we recommend to copy paste your content directly into this EAI template. (The template is to be attached in the website)</p>
                        <p>Maximum Paper size : 6 Pages</p>
                        <h3 className="text-xl font-bold mt-8 mb-4">Review Process:</h3>
                        <ol className="pl-6 space-y-2 md:space-y-2 -ml-2">
                            <li className="flex gap-2 md:items-center mb-2"><Image src={tick} alt='-' className='size-5' />At first, the manuscripts received would be evaluated from the purview of the scope of this conference.</li>
                            <li className="flex gap-2 md:items-center mb-2"><Image src={tick} alt='-' className='size-5' />Screened submissions undergo an initial quality check through Turnitin Software for potential similarity with published literature.</li>
                            <li className="flex gap-2 md:items-center mb-2"><Image src={tick} alt='-' className='size-5' />Subsequently, the manuscripts with a similarity index of less than 5 percent would be sent for single-blind review by three independent referees.</li>
                            <li className="flex gap-2 md:items-center mb-2"><Image src={tick} alt='-' className='size-5' />A consensus of three reviewers would be mandatory for the acceptance of manuscripts.</li>
                            <li className="flex gap-2 md:items-center mb-2"><Image src={tick} alt='-' className='size-5' />One reviewer would not review more than three manuscripts.</li>
                        </ol>
                        <h3 className="text-xl font-bold mt-8 mb-4">Publication and Indexing:</h3>
                        <p className="mb-4">The articles submitted to the Sustainable Multimodal Artificial Intelligence for Research and Technology Transformations (SMARTT 2026) will be subjected to double-blind peer review by the panel of experts. All accepted and registered papers will be included in the conference proceedings that will be published by AIP. (Waiting for approval)</p>
                        <h3 className="text-xl font-bold mt-8 mb-4">Best Paper Award:</h3>
                        <p>One paper from each of the 10 tracks listed in Call for Papers will be selected as Best Paper. The Best Papers will be announced at culmination of the conference.</p>
                    </div>
                    <div className="flex flex-col justify-center w-[90%] overflow-x-auto md:overflow-auto md:max-w-[70%]">
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

                    {/* Paper Submission Section */}
                    <div className="flex flex-col items-center justify-center w-[90%] md:max-w-[70%] mt-16 mb-4">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Ready to submit your paper?</h3>
                        <Link href="/submissions" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-bold shadow-lg transition duration-300">
                            Paper Submission
                        </Link>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-16">Registration Coming Soon</h1>
                    <p className="text-gray-600 text-lg mb-8">We&apos;re working on this. Stay tuned!</p>
                    <div className="flex space-x-4">
                        <Link href="/" className="bg-blue-900 hover:bg-blue-800  text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
                            Home
                        </Link>
                        <Link href="/reach-us" className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};