import Breadcrumb from '@/components/Breadcrumb'
import ShopCTA from '@/components/ShopCTA'
import BlogItem from '@/components/BlogItem'
import Link from 'next/link'
import React from 'react'
import { BlogData, Categories, RecentPosts } from '@/constants'

const Blog = () => {
  return (
    <>
        <Breadcrumb title="Blog" link="Blog " />
        <div className="mt-10 mb-10 px-[100px] py-5 w-full max-md:px-[30px] max-sm:py-4 max-lg:px-[50px]">
            <div className="flex flex-col gap-10">
                <div className="flex max-md:flex-col-reverse gap-10">
                    <div className="w-[65%] max-md:w-full flex flex-col gap-8">
                        {BlogData.map((item) => (
                            <BlogItem item={item} key={item.key} />
                        ))}
                    </div>
                    <div className="w-[35%] max-md:w-full flex flex-col gap-8">
                        <input type="text" className='w-full border border-gray-500 outline-none py-2 px-4 rounded-md' placeholder='Search...' />
                        <div className="flex flex-col gap-6 mb-20 max-md:mt-0">
                            <h1 className='text-black font-bold text-2xl'>Categories</h1>
                            <div className="flex flex-col gap-6">
                                {Categories.map((item) => (
                                    <div key={item.key} className="flex justify-between items-center text-gray-400 font-medium">
                                        <p>{item.name}</p>
                                        <p>{item.no}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h1 className='text-black font-bold text-2xl'>Recent Posts</h1>
                            <div className="flex flex-col gap-6">
                                {RecentPosts.map((item) => (
                                    <div key={item.key} className="flex items-center gap-4">
                                        <img src={item.image} alt={item.title} />
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-black font-medium text-md">{item.title}</h3>
                                            <p className="text-gray-500 text-sm">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <div className="pag active">1</div>
                    <div className="pag">2</div>
                    <div className="pag">3</div>
                    <div className="pag">Next</div>
                </div>
            </div>
        </div>
        <ShopCTA />
    </>
  )
}

export default Blog