import React from 'react'

interface ProductItem {
    key: number;
    img: string;
    title: string;
    description: string;
    price: string;
    discount_price: string;
    status: string;
}

const ProductItem = ({item}: ProductItem) => {
  return (
    <div className="flex flex-col relative cursor-pointer checker">
        <img 
            src={item.img} 
            className='w-full'
            alt={item.title} 
        />
        <div className="flex flex-col gap-1 p-3 bg-gray-100">
            <h2 className='font-bold text-black text-md'>{item.title}</h2>
            <p className='text-gray-500 text-xs'>{item.description}</p>
            <div className="flex gap-2 items-center">
                {item.discount_price ? <p className='text-black font-bold text-sm'>$ {item.discount_price}</p> : <p className='text-black font-bold text-sm'>$ {item.price}</p>}
                {item.discount_price && <p className='text-gray-400 line-through text-xs'>$ {item.price}</p>}
            </div>
        </div>
        {item.status && (
            <div className={`product-badge ${item.status == '-50%' ? 'bg-red-400' : 'bg-green-400'}`}>
                {item.status}
            </div>
        )}
        <div className="overlay-product">
            <button className='bg-white text-primary-300 px-10 py-2 text-sm font-semibold'>Add to cart</button>

        </div>
    </div>
  )
}

export default ProductItem