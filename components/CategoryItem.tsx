import React from 'react'

interface CategoryItemProps {
    img: string;
    title: string;
}

const CategoryItem = ({ img, title }: CategoryItemProps) => {
  return (
    <div className='flex flex-col gap-3'>
        <img  
            src={img}
            className='w-full rounded-lg'
            alt='cat'
        />
        <p className="text-center font-bold text-black text-md">{title}</p>
    </div>
  )
}

export default CategoryItem