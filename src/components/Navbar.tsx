"use client"
import React, {useState} from "react";
import {Link} from '../navigation';
import {useTranslations} from 'next-intl';

const Navbar  = () => {
    const t = useTranslations('header');
    const [isClick, setisClick] = useState(false);
    const toggleNav = () =>{
        setisClick(!isClick);
    };
    
    return(
        <div style={{ background: '#606be5'}} className={``}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-lg font-bold text-white bg-black rounded p-2">
                                <span style={{ color: '#09e4d0' }}>Apps</span>
                                <span style={{ color: '#ffca62' }}> & </span>
                                <span style={{ color: '#f43d6d' }}>PIECE</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className=" text-lg ml-4 flex items-center space-x-4">

                            <Link href={`/`} className="font-bold text-white hover:underline  p-2">
                            {t('home')}
                            </Link>

                            <Link href={`/wheel`} className="font-bold text-white hover:underline p-2">
                            {t('wheel')}
                            </Link>
                                
                            <Link href={`/contact`} className="font-bold text-white hover:underline  p-2">
                            {t('contact')}
                            </Link>
                          
                            {/* <div style={{ background: '#414aad'} } className="z-10 relative text-white font-bold ">
                                <input type="checkbox" className="peer hidden" id="menu-toggle" />
                                <label htmlFor="menu-toggle" className="cursor-pointer py-5 px-3 inline-block">{t('in')}</label>

                                <ul style={{ background: '#414aad'} } className="absolute hidden peer-checked:flex flex-col top-full right-0">
                                   
                                    <Link   href={`/`} locale="es" className="py-2 px-4 block font-bold text-white hover:underline ">
                                        Es
                                    </Link>
                            
                                    <Link href={`/`} locale="en" className="py-2 px-4 block font-bold text-white hover:underline ">
                                        En
                                    </Link>
                                </ul>

                            </div> */}



                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNav}>

                        {isClick ? (
                            <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ):(
                            <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        )}

                        </button>
                    </div>
                </div>
            </div>
            {isClick && ( 
                <div className="md:hidden">
                    <div className="text-lg px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href={`/`}  className="text-white block hover:underline  p-2">{t('home')}</Link>
                        <Link href={`/wheel`}  className="text-white block hover:underline  p-2">{t('wheel')}</Link>
                        <Link href={`/contact`} className="text-white block hover:underline   p-2">{t('contact')}</Link>
                    </div>
                </div> 
            )}
        </div>       
                
    );  
};

export default Navbar;