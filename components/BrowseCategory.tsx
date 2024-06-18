import { CategoryItems } from '@/constants'
import Image from 'next/image'
import React from 'react'
import CategoryItem from './CategoryItem'

const BrowseCategory = () => {
  return (
    <div className='px-[100px] w-full max-md:px-[30px] max-lg:px-[50px] flex flex-col gap-8'>
        <div className="text-center">
            <h2 className='text-black font-extrabold text-2xl mb-2'>Browse The Range</h2>
            <p className='text-gray-500 font-medium text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus.</p>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
            {CategoryItems.map((item) => (
                <CategoryItem key={item.key} img={item.img} title={item.title} />
            ))}
        </div>
    </div>
  )
}

export default BrowseCategory