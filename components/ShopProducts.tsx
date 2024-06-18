import { ShopProductItems } from '@/constants'
import React from 'react'
import ProductItem from './ProductItem'

const ShopProducts = () => {
  return (
    <div className='px-[100px] w-full max-md:px-[30px] max-lg:px-[50px] flex flex-col gap-8 mt-10 mb-10'>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-6 max-sm:gap-3">
            {ShopProductItems.map((item) => (
                <ProductItem key={item.key} item={item} />
            ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="pag active">1</div>
          <div className="pag">2</div>
          <div className="pag">3</div>
          <div className="pag">Next</div>
        </div>
    </div>
  )
}

export default ShopProducts