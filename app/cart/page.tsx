"use client"
import Breadcrumb from '@/components/Breadcrumb'
import ShopCTA from '@/components/ShopCTA'
import { miniCartItems } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState(miniCartItems);

    const deleteCart = (id)  => {
        setCart(cart.filter(item => item.key != id));
    }
  return (
    <>
        <Breadcrumb title='Cart' link='Cart' />
        <div className="flex max-[1100px]:flex-col gap-6 mt-10 mb-10 px-[100px] py-5 w-full max-md:px-[30px] max-sm:py-4 max-lg:px-[50px]">
            <div className="overflow-x-auto w-[70%] max-[1100px]:w-full">
                <table className='w-full max-md:w-[150%]'>
                    <thead>
                        <tr className='bg-primary-200 h-10 text-left mb-10'>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item) => (
                            <tr className='align-middle text-gray-500 font-bold h-[100px]'>
                                <td><img src={item.image} alt={item.title} className='rounded-lg w-20' /></td>
                                <td>{item.title}</td>
                                <td>$ {item.price}</td>
                                <td><input type="text" placeholder='1' maxLength={3} className='text-center w-8 h-8 border-2 rounded-md border-gray-500 outline-none' /></td>
                                <td className='text-black'>$ {item.price}</td>
                                <td><img src='icons/delete.svg' className='w-4 cursor-pointer' alt="delete" onClick={() => deleteCart(item.key)} /></td>
                            </tr>
                        ))}
                        {cart?.length == 0 && (
                            <tr className="font-bold text-black h-[100px]">
                                <td className='col-span-4 text-center' colSpan={6}>No Items in Cart</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col gap-8 bg-primary-200 py-4 px-10 w-[30%] max-[1100px]:w-full">
                <h1 className='font-extrabold text-black text-2xl text-center'>Cart Totals</h1>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center font-bold">
                        <p className="text-black font-sm">Subtotal</p>
                        <p className="text-gray-500 font-sm">$ 250,000.00</p>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                        <p className="text-black font-sm">Total</p>
                        <p className="text-primary-300 text-xl">$ 270,000.00</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/checkout" className='text-black font-bold rounded-lg px-8 py-2 border border-black flex justify-center items-center'>Check Out</Link>
                    </div>
                </div>
            </div>
        </div>
        <ShopCTA />
    </>
  )
}

export default Cart