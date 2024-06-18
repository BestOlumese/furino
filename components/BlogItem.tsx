import Link from 'next/link'
import React from 'react'

const BlogItem = ({ key, image, user, date, label, title, description }: BlogItem) => {
  return (
    <div className="flex flex-col gap-2">
        <img src={image} className='w-full' alt="" />
        <div className="flex gap-4">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src="/icons/bloguser.svg" alt="user" />
                {user}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src="/icons/calender.svg" alt="date" />
                {date}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src="/icons/label.svg" alt="label" />
                {label}
            </div>
        </div>
        <h1 className="text-black text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">
            {description}
        </p>
        <div className="flex">
            <Link href="#" className='text-black font-bold text-base border-b-2 border-b-black pb-1'>Read more</Link>
        </div>
    </div>
  )
}

export default BlogItem