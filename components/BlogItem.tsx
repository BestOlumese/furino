import Link from 'next/link'
import React from 'react'

const BlogItem = ({item}) => {
  return (
    <div className="flex flex-col gap-2">
        <img src={item.image} className='w-full' alt="" />
        <div className="flex gap-4">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src="/icons/bloguser.svg" alt="user" />
                {item.user}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src="/icons/calender.svg" alt="date" />
                {item.date}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src="/icons/label.svg" alt="label" />
                {item.label}
            </div>
        </div>
        <h1 className="text-black text-3xl font-bold">{item.title}</h1>
        <p className="text-gray-500 text-sm">
            {item.description}
        </p>
        <div className="flex">
            <Link href="#" className='text-black font-bold text-base border-b-2 border-b-black pb-1'>Read more</Link>
        </div>
    </div>
  )
}

export default BlogItem