import React from 'react'

const ShopCTA = () => {
  return (
    <div className='bg-primary-200 py-20 px-6 max-md:py-10'>
        <div className="grid grid-cols-4 gap-8 max-lg:gap-8 max-md:grid-cols-1 max-lg:grid-cols-2 max-md:justify-items-center">
            <div className="flex gap-2">
                <img src="icons/trophy.svg" alt="trophy" />
                <div className="flex flex-col gap-1">
                    <h1 className='font-extrabold text-black text-2xl'>High Quality</h1>
                    <p className='text-gray-500 font-bold'>crafted from top materials</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img src="icons/guarantee.svg" alt="guarantee" />
                <div className="flex flex-col gap-1">
                    <h1 className='font-extrabold text-black text-2xl'>Warranty Protection</h1>
                    <p className='text-gray-500 font-bold'>Over 2 years</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img src="icons/shipping.svg" alt="shipping" />
                <div className="flex flex-col gap-1">
                    <h1 className='font-extrabold text-black text-2xl'>Free Shipping</h1>
                    <p className='text-gray-500 font-bold'>Order over 150 $</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img src="icons/customer-support.svg" alt="customer-support" />
                <div className="flex flex-col gap-1">
                    <h1 className='font-extrabold text-black text-2xl'>24 / 7 Support</h1>
                    <p className='text-gray-500 font-bold'>Dedicated support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopCTA