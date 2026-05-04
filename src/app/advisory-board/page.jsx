"use client";

import Image from 'next/image'
import landingBg from "../../assets/advisory-board/landing-bg.png";
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <span>{children}</span>
                    </Box>
                )}
            </div>
        );
    }

    const internationalBoard = [
        {
            name: "Dr. Jiankun Hu",
            university: "The University of New South Wales",
            country: "Australia"
        },
        {
            name: "Dr. Osvaldo Gervasi",
            university: "University of Perugia",
            country: "Italy"
        },
        {
            name: "Dr. Tunde Olabiyisi",
            university: "Ladoke Akintola University of Technology",
            country: "Nigeria"
        },
        {
            name: "Dr. George Ghinea",
            university: "Brunel University",
            country: "United Kingdom"
        },
        {
            name: "Dr. Rahim Tafazolli",
            university: "University of Surrey",
            country: "United Kingdom"
        },
        {
            name: "Dr. Chua Sook Ling @ Landa Chua",
            university: "Multimedia University",
            country: "Malaysia"
        },
        {
            name: "Dr. Atma Sahu",
            university: "Coppin State University",
            country: "USA"
        },
        {
            name: "Dr. PaO-Ann Hsiung",
            university: "National Chung Cheng University",
            country: "Taiwan"
        },
        {
            name: "Dr. Hadi Susanto",
            university: "Khalifa University",
            country: "UAE"
        },
        {
            name: "Dr. Girijesh Prasad",
            university: "Ulster University",
            country: "United Kingdom"
        },
        {
            name: "Dr. Kawal Sawhney",
            university: "University of Oxford",
            country: "United Kingdom"
        },
        {
            name: "Dr. Zhenlu Cui",
            university: "Fayetteville State University",
            country: "USA"
        },
        {
            name: "Dr. Stefano Mariani",
            university: "University of Milan",
            country: "Italy"
        }
    ];

    const nationalBoard = [
        {
            name: "Dr. S. Thamarai Selvi",
            university: "Thiruvalluvar University",
            location: "Vellore"
        },
        {
            name: "Dr. P. Yogesh",
            university: "Anna University",
            location: "Chennai"
        },
        {
            name: "Dr. R N Kulkarni",
            university: "Ballari Institute of Technology & Management",
            location: "Ballari"
        },
        {
            name: "Dr. A. Amuthan",
            university: "Puducherry Technological University",
            location: "Puducherry"
        },
        {
            name: "Dr. S. Mary Saira Bhanu",
            university: "National Institute of Technology",
            location: "Tiruchirappalli"
        },
        {
            name: "Dr. R. Rajesh",
            university: "Central University of Kerala",
            location: "Kerala"
        },
        {
            name: "Dr. R. Baskaran",
            university: "Anna University",
            location: "Chennai"
        },
        {
            name: "Dr. PJA Alphonse",
            university: "National Institute of Technology",
            location: "Tiruchirappalli"
        },
        {
            name: "Dr. R. S. Bhuvaneswaran",
            university: "Anna University",
            location: "Chennai"
        },
        {
            name: "Dr. R. Dhanalakshmi",
            university: "IIIT",
            location: "Tiruchirappalli"
        },
        {
            name: "Dr. R. Bala venkata Subramanyam",
            university: "National Institute of Technology",
            location: "Warangal"
        },
        {
            name: "Dr. Pandiri Venkatesh",
            university: "IIITDM Kancheepuram",
            location: "Chennai"
        },
        {
            name: "Dr. C. Valliamma",
            university: "Anna University",
            location: "Chennai"
        },
        {
            name: "Dr. Ponsy. R. K. Sathiyabama",
            university: "Anna University",
            location: "Chennai"
        },
        {
            name: "Dr. V. Akila",
            university: "Puducherry Technological University",
            location: "Puducherry"
        },
        {
            name: "Dr. S.Janakiraman",
            university: "Pondicherry University",
            location: "Pondicherry"
        },
        {
            name: "Dr. J. Arul Valan",
            university: "National Institute of Technology",
            location: "Nagaland"
        },
        {
            name: "Dr. K. Kathiravan",
            university: "SRM Group of Institutions, Ramapuram Campus",
            location: "Chennai"
        }
    ];

    return (
        <div className='flex flex-col w-full'>
            <div className='h-[30vh] md:h-[50vh] overflow-hidden relative flex justify-start items-center'>
                <Image src={landingBg} alt='bg' className='w-full object-cover h-full' />
                <div className="absolute flex flex-col z-10 pl-5 md:pl-20 justify-center text-white">
                    <h1 className="md:text-5xl text-white font-bold">International Advisory Board</h1>
                    <hr className='border-t-2 md:border-t-[7px] border-white w-1/3 mt-2 md:mt-5' />
                </div>
            </div>
            <div className='md:py-12 pb-8 pt-8 space-y-12 px-1 md:px-20'>
                <div className='space-y-6 px-6'>
                    <p className={cn("leading-loose", poppins.className)}>
                        Back in 2003, SRM set up an International Advisory Board (IAB) consisting of 31 Distinguished Deans, Directors and professors from top universities across the world. SRM&apos;s IAB is the first across the Indian University system. IAB works towards helping SRMIST set Global Standards and Internationalize through bringing globally acclaimed curriculum, research and teaching methodology to its students and faculty members.</p>
                    <p className={cn("leading-loose", poppins.className)}>
                        Now over 50+ Members are on IAB and they are from the best of the universities across the world including Harvard Business School, Kennedy Public School (Harvard University), MIT, Stanford, LSE, UC Berkeley, Cambridge, NUS among others.
                    </p>
                </div>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="tabs">
                        <Tab label="INTERNATIONAL" {...a11yProps(0)} />
                        <Tab label="NATIONAL" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className="flex flex-col">
                        <div className="-my-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                                        <thead className="bg-blue-900 text-white">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                                                    University
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                                                    Country
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {internationalBoard.map((doctor, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="font-medium text-gray-900">{doctor.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-gray-900">{doctor.university}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-gray-900">{doctor.country}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className="flex flex-col">
                        <div className="-my-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                                        <thead className="bg-blue-900 text-white">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                                                    University
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                                                    Country
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {nationalBoard.map((doctor, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="font-medium text-gray-900">{doctor.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-gray-900">{doctor.university}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-gray-900">{doctor.location}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
