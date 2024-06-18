import Breadcrumb from '@/components/Breadcrumb'
import FilterBar from '@/components/FilterBar'
import ShopCTA from '@/components/ShopCTA'
import ShopProducts from '@/components/ShopProducts'
import React from 'react'

const Shop = () => {
  return (
    <>
        <Breadcrumb title='Shop' link='Shop' />
        <FilterBar />
        <ShopProducts />
        <ShopCTA />
    </>
  )
}

export default Shop