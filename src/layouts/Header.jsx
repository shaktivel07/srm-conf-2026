"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import srmLogo from "../assets/srm-trc-logo.png";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navElements = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Program",
            link: "/program",
        },
        {
            name: "Registration",
            link: "/registration",
        },
        {
            name: "Advisory Board",
            link: "/advisory-board",
        },
        {
            name: "Plan Travel",
            link: "/plan-travel",
        },
        {
            name: "Reach Us",
            link: "/reach-us",
        },
    ];

    return (
        <div className='flex justify-between items-center w-full border-y md:px-6 pr-4 fixed z-30 bg-white shadow-lg'>
            <Link href={"/"} className='h-[4rem] md:h-[5rem]'>
                <Image src={srmLogo} alt='logo' className='w-full h-full' />
            </Link>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='block text-gray-500 focus:outline-none transform transition-transform hover:scale-110'>
                    <svg className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? '-rotate-90' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <div className={`hidden md:flex gap-4 py-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                {navElements.map((navElement, index) => (
                    <Link href={navElement.link} key={index} className={cn('group px-4 py-3 font-semibold relative', navElement.link === currentPath && 'bg-yellow')}>
                        {navElement.name}
                        <span className="group-hover:absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full bg-yellow transition-all duration-300 transform"></span>
                    </Link>
                ))}
            </div>
            <div ref={menuRef} className={`bg-white h-[50vh] md:bg-transparent fixed inset-0 z-50 top-16 transition-opacity duration-300 shadow-lg border ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col gap-3 items-center justify-center h-full">
                    {navElements.map((navElement, index) => (
                        <Link href={navElement.link} onClick={() => setIsMenuOpen(!isMenuOpen)} key={index} className={cn('px-4 py-2 font-medium relative', navElement.link === currentPath && 'bg-yellow')}>
                            {navElement.name}
                            <span className="group-hover:absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full bg-yellow transition-all duration-300 transform"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}