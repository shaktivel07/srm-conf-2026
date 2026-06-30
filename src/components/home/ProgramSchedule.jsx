export default function ProgramSchedule() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 text-center pb-8 uppercase">Program <span className="text-yellow">Schedule</span></h1>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center gap-12 w-[90%] md:max-w-[70%] overflow-x-auto md:overflow-auto">
                    <div className='space-y-2'>
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-900 pb-4">Day 1 Conference (26th November 2026)</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 py-2 px-4 text-left">Time</th>
                                    <th className="border border-gray-300 py-2 px-4 text-left">Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">09.30am - 10.00am</td>
                                    <td className="border border-gray-300 py-2 px-4">Inauguration</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">10.00am - 10.45am</td>
                                    <td className="border border-gray-300 py-2 px-4">Keynote Seminar</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">10.45am - 11.00am</td>
                                    <td className="border border-gray-300 py-2 px-4">Session Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">11.00am - 01.00pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation I (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">01.00pm - 01.40pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Lunch Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">01.40pm - 03.00pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation II (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">03.00pm - 03.10pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Tea Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">03.10pm - 04.00pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation III (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4 font-medium">First Day Technical Sessions Closed</td>
                                    <td className="border border-gray-300 py-2 px-4 font-medium">First Day Technical Sessions Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='space-y-2'>
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-900 pb-4">Day 2 Conference (27th November 2026)</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 py-2 px-4 text-left">Time</th>
                                    <th className="border border-gray-300 py-2 px-4 text-left">Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">09.30am - 10.10am</td>
                                    <td className="border border-gray-300 py-2 px-4">Keynote Seminar</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">10.10am - 10.20am</td>
                                    <td className="border border-gray-300 py-2 px-4">Session Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">10.20am - 11.30am</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation IV (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">11.30am - 11.40am</td>
                                    <td className="border border-gray-300 py-2 px-4">Tea Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">11.40am - 01.00pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation V (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">01.00pm - 01.40pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Lunch Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">01.40pm - 03.00pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation VI (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">03.00pm - 03.10pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Tea Break</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">03.10pm - 04.10pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Technical Presentation VII (Parallel 06 Sessions)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">04.10pm - 04.40pm</td>
                                    <td className="border border-gray-300 py-2 px-4">Valedictory Function</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4 font-medium">Second Day Technical Session Closed</td>
                                    <td className="border border-gray-300 py-2 px-4 font-medium">Second Day Technical Session Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p className="text-base md:text-lg text-gray-700 text-center pt-8">Presentation Time: <span className=' font-semibold'>10 Minutes</span></p>
            <p className="text-base md:text-lg text-gray-700 text-center">Presentation Format: <span className=' font-semibold'>Power Point Presentation (PPT)</span></p>
        </div>
    );
};