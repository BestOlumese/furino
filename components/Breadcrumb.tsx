import Link from 'next/link';
import React from 'react'

const Breadcrumb = ({title, link}: { title: string; link: string; }) => {
    return (
        <div className="bg-breadcrumb p-20 object-contain max-sm:p-10">
            <div className="text-center flex flex-col gap-2 justify-center items-center">
                <img src="/logo.svg" alt="logo" className='w-10' />
                <h1 className='text-4xl font-bold text-black'>{title}</h1>
                <p className='text-black text-sm font-semibold flex justify-center gap-1'>
                    <Link href="/">Home</Link> >
                    <a className='font-thin'>{link}</a>
                </p>
            </div>
        </div>
    )
}

export default Breadcrumb