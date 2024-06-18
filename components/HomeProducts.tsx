import { ProductItems } from '@/constants'
import React from 'react'
import ProductItem from './ProductItem'

const HomeProducts = () => {
  return (
    <div className='px-[100px] w-full max-md:px-[30px] max-lg:px-[50px] flex flex-col gap-8'>
        <div className="text-center">
            <h2 className='text-black font-extrabold text-3xl mb-2'>Our Products</h2>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-6 max-sm:gap-3">
            {ProductItems.map((item) => (
                <ProductItem key={item.key} item={item} />
            ))}
        </div>

        <div className="flex justify-center items-center">
            <button className='btn-outline'>Show More</button>
        </div>
    </div>
  )
}

export default HomeProducts