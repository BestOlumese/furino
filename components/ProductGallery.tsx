"use client"

import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ProductGallery = () => {
  return (
    <div className='bg-primary-200 px-[100px] py-5 w-full max-md:px-[30px] max-md:py-8 max-lg:px-[50px]'>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <div className='flex flex-col gap-3 justify-center'>
                <h1 className="text-black text-3xl font-extrabold">50+ Beautiful rooms inspiration</h1>
                <p className="text-sm text-gray-800 font-medium">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <div>
                    <button className="btn-primary">Explore more</button>
                </div>
            </div>
            <div className="col-span-2 max-md:col-span-1">
                <div className="slider-wrapper relative">
                    <div className="image-list hidden-scrollbar ">
                        {/* <button className='chevron chevron-left'>
                            <FaChevronLeft />
                        </button>
                        <button className='chevron chevron-right'>
                            <FaChevronRight />
                        </button> */}
                        <div className="image-box">
                            <img 
                                src="/pgallery/g1.png"
                                alt='p1'
                                className='image-item'
                            />
                        </div>
                        <div className="image-box">
                            <img 
                                src="/pgallery/g2.png"
                                alt='p2'
                                className='image-item'
                            />
                        </div>
                        <div className="image-box">
                            <img 
                                src="/pgallery/g1.png"
                                alt='p1'
                                className='image-item'
                            />
                        </div>
                        <div className="image-box">
                            <img 
                                src="/pgallery/g2.png"
                                alt='p2'
                                className='image-item'
                            />
                        </div>
                        <div className="image-box">
                            <img 
                                src="/pgallery/g1.png"
                                alt='p1'
                                className='image-item'
                            />
                        </div>
                        <div className="image-box">
                            <img 
                                src="/pgallery/g2.png"
                                alt='p2'
                                className='image-item'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductGallery