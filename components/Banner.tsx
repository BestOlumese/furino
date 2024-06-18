import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full relative'>
        <img 
            src="/banners/banner1.png"
            alt="banner"
            className='w-full'
        />
        <div className='banner-div'>
            <p className='capitalize font-bold text-black mb-3'>new arrival</p>
            <h1 className='capitalize font-extrabold text-primary-300 text-4xl mb-3'>Discover Our <br /> New Collection</h1>
            <p className='font-medium text-black mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam at reprehenderit deserunt corporis </p>
            <button className='text-white uppercase font-bold bg-primary-300 text-xs px-10 py-4'>Buy now</button>
        </div>
    </div>
  )
}

export default Banner