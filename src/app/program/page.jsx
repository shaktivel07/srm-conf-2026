import one from "../../assets/program/1.png";
import two from "../../assets/program/2.png";
import three from "../../assets/program/3.png";
import four from "../../assets/program/4.png";
import five from "../../assets/program/5.png";
import six from "../../assets/program/6.png";
import seven from "../../assets/program/7.png";
import eight from "../../assets/program/8.png";
import Image from 'next/image';

export default function page() {

    const tableCellStyle = "px-6 py-4 whitespace-nowrap font-semibold";
    const tableHeaderStyle = "px-6 py-3 text-left font-semibold text-neutral-200 text-lg uppercase tracking-wider border-b border-[#eeeeee2f]";

    const keyNoteSpeakers = [
        {
            name: "Xiaolei Wang",
            title: "Associate Professor",
            department: "Department of Electrical Engineer and Automation",
            university: "Aalto University, Finland",
            img: one
        },
        {
            name: "Mariofanna (Fanny) Milanova, IEEE Senior Member",
            title: "NVIDIA Deep Learning Instructor",
            position: "Fulbright Scholar and Professor",
            department: "Computer Science Department",
            university: "University of Arkansas",
            img: two
        },
        {
            name: "Xavier Fernando, PhD, P. Eng",
            title: "Professor",
            university: "Toronto Metropolitan University",
            img: three
        },
        {
            name: "Dr. Korhan Cengiz",
            title: "Senior Researcher",
            department: "Department of Information Technologies",
            faculty: "Faculty of Informatics and Management",
            university: "University of Hradec Kralove",
            location: "Kralove, 500 03, Czech Republic",
            img: four
        },
        {
            name: "Xiaohui Yuan, Ph.D.",
            title: "Associate Professor",
            department: "Department of Computer Science and Engineering",
            labDirector: "Computer Vision and Intelligent Systems Lab",
            university: "University of North Texas",
            img: five
        },
        {
            name: "Basim Alhadidi, PhD. Professor",
            department: "Department of Computer Information Systems",
            faculty: "Prince Abullah Bin Ghazi Faculty of Information and Communication Technology",
            university: "Al-Balqa Applied University",
            img: six
        },
        {
            name: "Stephen O. Olabiyisi, PhD, MCPN, MNCS",
            title: "Professor of Computer Science",
            img: seven
        },
        {
            name: "Dr. Lipo WANG",
            title: "Associate Professor",
            department: "School of Electrical and Electronic Engineering",
            university: "Nanyang Technological University",
            location: "Singapore",
            img: eight
        }
    ];

    const vicePatrons = [
        { name: "Dr. T. R. Paarivendhar", title: "Founder", institution: "SRM Group of Educational Institutions" },
        { name: "Dr. R. Shivakumar", title: "Chairman", institution: "SRM Group of Educational Institutions (Ramapuram & Trichy Campus)" },
        { name: "Mr. S. Niranjan", title: "Co-Chairman", institution: "SRM Group of Educational Institutions (Ramapuram & Trichy Campus)" }
    ];

    const chiefPatrons = [
        { name: "Dr. N. Sethuraman", title: "Chief Director", institution: "SRM Group of Educational Institutions, Ramapuram Campus" }
    ];

    const patrons = [
        { name: "Dr. R. Jagadeesh Kannan", title: "Dean", institution: "Faculty of Engineering and Technology, SRM Institute of Science and Technology, Tiruchirappalli Campus" }
    ];

    const conferenceChair = [
        { name: "Dr. S. Kanaga Suba Raja", title: "Professor and Head", department: "Department of Computer Science and Engineering, SRM Institute of Science and Technology, Tiruchirappalli Campus" }
    ];

    const technicalChair = [
        { name: "Dr.Senthil Kumar P", designation: "Associate Professor" },
        { name: "Dr.Siva subramanian R", designation: "Associate Professor" },
        { name: "Dr.Sathish Kumar K", designation: "Associate Professor" },
        { name: "Dr. Rahul Shrivastava", designation: "Associate Professor" },
        { name: "Dr.Dhanasekaran K", designation: "Associate Professor" }
    ];

    const conferenceTreasurers = [
        { name: "Mr.J.Paul RajaSingh", designation: "Assistant Professor" },
        { name: "Dr.K.R.Saranya", designation: "Assistant Professor" },
        { name: "Dr.S.Sivakumar", designation: "Assistant Professor" },
        { name: "Dr.L.Josephine Usha", designation: "Assistant Professor" },
        { name: "Ms.R.Sharanya", designation: "Assistant Professor" },
        { name: "Dr.N.Saranya", designation: "Assistant Professor" },
        { name: "Dr.V. Mani", designation: "Assistant Professor" },
        { name: "Dr.S .Rahmath Nisha", designation: "Assistant Professor" }
    ];

    const committeeMembers = [
        { name: "Dr.S.Sakthivel", designation: "Assistant Professor" },
        { name: "Mr.Ajey Prasaath K.B", designation: "Assistant Professor" },
        { name: "Mr.Naresh Kumar R", designation: "Assistant Professor" },
        { name: "Dr.Muthukumar.M", designation: "Assistant Professor" },
        { name: "Dr.J.Jegan", designation: "Assistant Professor" },
        { name: "Mr.Hariharan", designation: "Assistant Professor" },
        { name: "Dr.S.Shargunam", designation: "Assistant Professor" },
        { name: "Dr.Deena Rose", designation: "Assistant Professor" }
    ];

    const studentList = [
        "S MohanaKumar (II CSE C)",
        "AN Alagammai (II CSE C)",
        "Akash Sankar Chowdhury (III CSE)",
        "Shreya Mazumder (III CSE Al&ML)",
        "Samiksha Krishnasamy (II CSE A)",
        "Sri Ramaswamy S (II CSE A)",
        "Nithish Kumar N (II CSE A)",
        "Sanjay Raam VJ (II CSE A)",
        "Makeshwaran KP (II CSE A)",
        "R V Darsan (I Al&ML)",
        "Zian Surani (I Al&ML)",
        "Sandeep K (III CSE)",
        "Vignesh D (III CSE)",
        "ThirumukhilS P (III CSE)",
        "Jeyajeev V (III CSE)",
        "Shalini (II Al&ML)",
        "Laksharai Jha (II CSE A)",
        "Rishi Arun Kumar (II CSE A)",
        "Devi Nanda (III Al & ML)",
        "Suchi Pambhar (II CSE A)",
        "Amisha Kumari M (II CSE A)"
    ];

    return (
        <div className="w-full mx-auto py-10 bg-gradient-to-r from-[#E29E03] to-[#214B9C] scroll-m-0" id="keynote">
            <div className='container flex flex-col justify-center text-white md:py-12 pb-12'>
                <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">KEYNOTE SPEAKERS</h1>
                <div className='flex flex-wrap justify-center items-center md:grid grid-cols-3 gap-y-10'>
                    {keyNoteSpeakers.map((person, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-8 justify-center items-center">
                                <Image src={person.img} className="w-[100px]" alt="person" />
                                <div className="text-center">
                                    <h3 className="text-sm md:max-w-[250px]">{person.name}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.title}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.department}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.university}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.location}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container text-white w-full overflow-x-auto pt-12 scroll-m-0" id="comittee">
                <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center uppercase">Organising Committee</h1>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold mb-3">Vice Patron:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {vicePatrons.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.institution}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Chief Patron:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {chiefPatrons.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.institution}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Patron:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {patrons.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.institution}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Conference Chair:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {conferenceChair.map((person, index) => (
                            <li key={index}>{person.name}, {person.title}, {person.department}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Co-convener:</h2>
                    <ul className="list-disc pl-5 mb-5">
                        <li>Dr.P.Shanmuga Sundari, Associate Professor, SRMIST, Tiruchirappalli</li>
                    </ul>

                    <h2 className="text-xl font-bold mb-3">Technical Chair:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {technicalChair.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Conference Treasurers:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {conferenceTreasurers.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-3">Committee Members:</h2>
                    <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
                        <thead className="divide-y divide-[#eeeeee2f]">
                            <tr>
                                <th className={tableHeaderStyle}>Name</th>
                                <th className={tableHeaderStyle}>Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee2f]">
                            {committeeMembers.map((person, index) => (
                                <tr key={index}>
                                    <td className={tableCellStyle}>{person.name}</td>
                                    <td className={tableCellStyle}>{person.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container text-white w-full overflow-x-auto py-12 scroll-m-0' id="organizers">
                <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center uppercase">Organising Committee (Students)</h1>
                <div className="flex flex-wrap justify-center">
                    {studentList?.map((student, index) => {
                        return (
                            <div key={index} className="w-full">
                                <div className=" rounded-lg shadow-lg">
                                    <div className="p-6">
                                        <h1 className="md:text-xl font-semibold">{student}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
