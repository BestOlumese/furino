import React from 'react'

const FilterBar = () => {
  return (
    <div className='filterBar'>
       <div className="flex items-center gap-2">
        <img src="/icons/filter.svg" alt="filter" className='cursor-pointer' />
        <p className="font-semibold">Filter</p>
        <img src="/icons/grid.svg" alt="grid" className='cursor-pointer' />
        <img src="/icons/list.svg" alt="list" className='border-r-black border pr-4 mr-4 cursor-pointer' />
        <p className='text-sm'>Showing 1-16 of 32 results</p>
       </div>
       <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
            <p className='text-black font-semibold'>Show</p>
            <input type="text" placeholder='16' className='bg-white outline-none border-none h-10 w-10 placeholder:text-center text-center' />
        </div>
        <div className="flex items-center gap-2">
            <p className='text-black font-semibold'>Sort by</p>
            <input type="text" placeholder='Default' className='bg-white outline-none border-none h-10 w-[120px] p-2' />
        </div>
       </div>
    </div>
  )
}

export default FilterBar