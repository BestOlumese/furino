import React from 'react'
import Banner from '../components/Banner'
import BrowseCategory from '@/components/BrowseCategory'
import HomeProducts from '@/components/HomeProducts'
import ProductGallery from '@/components/ProductGallery'
import ImageGrid from '@/components/ImageGrid'

const Home = () => {
  return (
    <div className='flex flex-col gap-10 mb-10'>
        <Banner />
        <BrowseCategory />
        <HomeProducts />
        <ProductGallery />
        <ImageGrid />
    </div>
  )
}

export default Home