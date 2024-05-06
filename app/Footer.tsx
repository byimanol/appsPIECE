"use client"
import React, {useState} from "react";
import Link from "next/link"

const Footer = () => {
    return(
        <div style={{ background: '#606be5',boxShadow: 'inset -4px -4px 0px 3px #00000042'}} className="bg-white rounded-lg shadow m-4 bg-gray-800 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between   ">
                <span style={{ color: 'white'} } className="text-lg font-bold sm:text-center ">© 2024 <a href="/" className="hover:underline">Apps & PIECE</a>. All Rights Reserved.</span>
                <ul style={{ color: 'white'} } className="flex flex-wrap items-center mt-3 text-lg font-bold  font-medium text-gray-500  sm:mt-0">
                    <Link href="/terms" className="hover:underline me-4 md:me-6">
                        Terms
                    </Link>  
                    <Link href="/privacy" className="hover:underline me-4 md:me-6>privacy">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="hover:underline me-4 md:me-6>privacy">
                        Contact
                    </Link>
                </ul>
            </div>
        </div>
    );  
};

export default Footer;





