import Link from 'next/link';

export default function SubmissionsPage() {
    return (
        <div className="flex flex-col items-center justify-center px-4 min-h-[50vh]">
            <div className="container mx-auto px-4 py-20 md:max-w-[70%]">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Paper Submission</h1>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                    <div className="flex justify-center">
                        <Link href="https://cmt3.research.microsoft.com/SMARTT2026" className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-6 rounded-full shadow-lg transition duration-300"> Paper Submission </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
