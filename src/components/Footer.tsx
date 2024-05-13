"use client"
import React, {useState} from "react";
import {Link} from '../navigation';
import {useTranslations} from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');

    return(
        <div style={{ background: '#606be5',boxShadow: 'inset -4px -4px 0px 3px #00000042'}} className=" rounded-lg shadow m-4 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between   ">
                <span style={{ color: 'white'} } className="text-lg font-bold sm:text-center ">© 2024 <a href="/" className="hover:underline">Apps & PIECE</a>. {t('title')}</span>
                <ul style={{ color: 'white'} } className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500  sm:mt-0">
                    <Link href="/terms" className="hover:underline me-4 md:me-6">
                    {t('terms')}
                    </Link>  
                    <Link href="/privacy" className="hover:underline me-4 md:me-6">
                    {t('privacy')}
                    </Link>
                    <Link href="/contact" className="hover:underline me-4 md:me-6">
                    {t('contact')}
                    </Link> 
                </ul>
            </div>
        </div>
    );  
};

export default Footer;





