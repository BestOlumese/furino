import Breadcrumb from '@/components/Breadcrumb'
import ShopCTA from '@/components/ShopCTA'
import React from 'react'

const Contact = () => {
  return (
    <>
        <Breadcrumb title="Contact" link="Contact" />
        <div className="mt-10 mb-10 px-[100px] py-5 w-full max-md:px-[30px] max-sm:py-4 max-lg:px-[50px]">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-black font-bold text-4xl">Get In Touch With Us</h1>
                <p className="text-gray-500 text-sm text-center">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br/>Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>
            <div className="flex max-md:flex-col gap-40 max-md:gap-8 xl:px-[100px] mt-20 max-md:mt-10">
                <div className="w-[30%] max-md:w-full flex flex-col gap-8">
                    <div className="flex gap-3 justify-start items-start">
                        <img src="icons/location.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold text-black">Address</h2>
                            <p className="text-black">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-start items-start">
                        <img src="icons/phone.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold text-black">Phone</h2>
                            <div className='flex flex-col'>
                                <p className="text-black">Mobile: +(84) 546-6789</p>
                                <p className="text-black">Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-start items-start">
                        <img src="icons/clock.svg" alt="" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold text-black">Working Time</h2>
                            <div className='flex flex-col'>
                                <p className="text-black">Monday-Friday: 9:00 - 22:00</p>
                                <p className="text-black">Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="w-[70%] max-md:w-full flex flex-col gap-8">
                    <div className="w-full flex flex-col gap-4">
                        <p className='text-black font-bold'>Your Name</p>
                        <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' placeholder='Abc' />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <p className='text-black font-bold'>Email Address</p>
                        <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' placeholder='Abc@gmail.com' />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <p className='text-black font-bold'>Subject</p>
                        <input type="text" className='w-full outline-none border border-gray-500 rounded-md p-3' placeholder='This is an optional' />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <p className='text-black font-bold'>Message</p>
                        <textarea className='w-full outline-none border border-gray-500 rounded-md p-3 resize-none' rows={5} placeholder="Hi i'd like to ask about"></textarea>
                    </div>
                    <div className="flex justify-start">
                        <button className="bg-primary-300 text-white px-20 py-3 text-sm rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <ShopCTA />
    </>
  )
}

export default Contact