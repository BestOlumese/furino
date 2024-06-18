import Breadcrumb from '@/components/Breadcrumb'
import ShopCTA from '@/components/ShopCTA'
import React from 'react'

const Checkout = () => {
  return (
    <>
        <Breadcrumb title="Checkout" link="Checkout" />
        <div className="mt-10 mb-10 px-[100px] py-5 w-full max-md:px-[30px] max-sm:py-4 max-lg:px-[50px]">
            <div className="flex max-md:flex-col gap-40  max-md:gap-10 max-xl:gap-10">
                <div className="w-1/2 flex flex-col gap-6 max-md:w-full">
                    <h1 className='text-black font-bold text-3xl'>Billing details</h1>
                    <form className="flex flex-col gap-6">
                        <div className="flex gap-6">
                            <div className="w-1/2 flex flex-col gap-4">
                                <p className='text-black font-bold'>First Name</p>
                                <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                            </div>
                            <div className="w-1/2 flex flex-col gap-4">
                                <p className='text-black font-bold'>Last Name</p>
                                <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Company Name (Optional)</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Country / Region</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Street Address</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Town / City</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>ZIP Code</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Phone</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Email address</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className='text-black font-bold'>Additional Information</p>
                            <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' />
                        </div>
                    </form>
                </div>
                <div className="w-1/2 max-md:w-full">
                    <div className="flex flex-col gap-6 border-b border-b-gray-500 pb-6">
                        <div className="flex justify-between items-center">
                            <h1 className='text-black font-semibold text-2xl'>Product</h1>
                            <h1 className='text-black font-semibold text-2xl'>Subtotal</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className='text-black flex gap-2 text-md'>
                                <p className='text-gray-500'>Asgaard Sofa</p> X 1
                            </div>
                            <p className="text-black font-normal">$ 250,000.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-black font-semibold text-md'>Subtotal</h3>
                            <p className="text-black font-normal">$ 250,000.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-black font-semibold text-md'>Total</h3>
                            <p className="text-primary-300 text-2xl font-extrabold">$ 250,000.00</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-6 select-none">
                        <div className="flex gap-4">
                            <input type="radio" name='choice' id='transfer' />
                            <label className="text-black font-semibold" for="transfer">Direct Bank Transfer</label>
                        </div>
                        <div className="flex gap-4">
                            <input type="radio" name='choice' id="cdelivery" />
                            <label className="text-black font-semibold" for="cdelivery">Cash on Delivery</label>
                        </div>
                        <p>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                        </p>
                    </div>
                    <div className="flex justify-center items-cente">
                        <button className='text-center text-black font-bold rounded-lg px-20 py-4 border border-black flex justify-center items-center'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
        <ShopCTA />
    </>
  )
}

export default Checkout