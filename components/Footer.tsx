import { FooterLinks, NavLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="bg-white px-[100px] w-full max-md:px-[30px] max-sm:py-4 max-lg:px-[50px] border-slate-300/50 border-t-2">
            <div className="grid grid-cols-4 gap-8 py-8 max-lg:grid-cols-2">
                <div className="footer-col">
                    <h2 className='font-extrabold text-black text-2xl'>Funiro</h2>
                    <div>
                        <p className='text-gray-400 text-[14px]'>400 University Drive Suite 200 Coral Gabbles,</p>
                        <p className='text-gray-400 text-[14px]'>FL 33134 USA</p>
                    </div>
                </div>
                <div className="footer-col">
                    <h2 className="text-sm text-gray-400 font-semibold">Links</h2>
                    <ul className="flex flex-col gap-6">
                        {NavLinks.map((link) => (
                            <Link href={link.href} key={link.key} className='hover:text-primary-300 font-semibold'>
                                {link.text}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h2 className="text-sm text-gray-400 font-semibold">Help</h2>
                    <ul className="flex flex-col gap-6">
                        {FooterLinks.map((link) => (
                            <Link href={link.href} key={link.key} className='hover:text-primary-300 font-semibold'>
                                {link.text}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h2 className="text-sm text-gray-400 font-semibold">Newsletter</h2>
                    <div className="flex gap-2">
                        <input type="text" placeholder='Enter Your Email Address' className='footer-input ' />
                        <button className='footer-btn'>subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-gray-300 border-t-2 py-8">
                <p className="font-semibold text-sm">2023 furino. All rights reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer