"use client"

import { miniCartItems, NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [showMainMenu, setShowMainMenu] = useState(false);
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [showCartMenu, setShowCartMenu] = useState(false);
    const [miniCart, setMiniCart] = useState<MiniCartItem[]>(miniCartItems);

    const removeItemFromMiniCart = (id: number) => {
        setMiniCart(miniCart.filter(item => item.key !== id));
    };
  return (
    <>
        <div className="bg-white px-[100px] py-5 w-full max-md:px-[30px] max-sm:py-4 max-lg:px-[50px]">
            <div className="flexBetweenCenter">
                <div className="flexCenter gap-[2px]">
                    <Image 
                        className='cursor-pointer md:hidden'
                        src="./icons/menu.svg"
                        height="30"
                        width="30"
                        alt='menu'
                        onClick={() => {setShowMainMenu(!showMainMenu); setShowSearchMenu(false); setShowCartMenu(false);}}
                    />
                    <Link href="/">
                        <Image 
                            src="./logo.svg" 
                            alt="logo"
                            width={35}
                            height={35} 
                        />
                    </Link>
                    <Link href="/" className='text-black text-2xl font-bold'>Furino</Link>
                </div>
                <ul className="flexCenter gap-10 uppercase text-sm font-semibold max-md:hidden max-lg:gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key} className='hover:text-primary-300'>
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <div className="flexCenter gap-3">
                    <Image 
                        className='cursor-pointer'
                        src="./icons/user.svg"
                        height="30"
                        width="30"
                        alt='user'
                    />
                    <Image 
                        className='cursor-pointer'
                        src="./icons/search.svg"
                        height="30"
                        width="30"
                        alt='search'
                        onClick={() => {setShowSearchMenu(!showSearchMenu); setShowMainMenu(false); setShowCartMenu(false);}}
                    />
                    <Image 
                        className='cursor-pointer'
                        src="./icons/like.svg"
                        height="30"
                        width="30"
                        alt='like'
                    />
                    <Image 
                        className='cursor-pointer'
                        src="./icons/cart.svg"
                        height="30"
                        width="30"
                        alt='cart'
                        onClick={() => {setShowCartMenu(true); setShowSearchMenu(false); setShowMainMenu(false);}}
                    />
                </div>
            </div>
        </div>
        <div className={`${showMainMenu ? 'top-[67px] md:hidden' : 'top-[-100%] md:hidden'} absolute flex flex-col text-center gap-4 bg-primary-200 text-lg font-semibold uppercase w-full max-md:px-[30px] py-3 max-lg:px-[50px] ease duration-500 z-10`}>
            {NavLinks.map((link) => (
                <Link href={link.href} key={link.key} className='hover:text-primary-300'>
                    {link.text}
                </Link>
            ))}
        </div>
        <div className={`${showSearchMenu ? 'top-[67px]' : 'top-[-100%]'} absolute flexCenter gap-4 bg-primary-200 w-full px-[100px] max-md:px-[30px] py-3 max-lg:px-[50px] ease duration-500 z-10`}>
            <Image 
                className='cursor-pointer'
                src="./icons/cancel.svg"
                height="30"
                width="30"
                alt='search'
                onClick={() => setShowSearchMenu(false)}
            />
            <input type="text" className='w-full placeholder:text-primary-300 px-5 py-2 outline-none text-primary-300' placeholder='Search for furnitures....' />
            <button className="bg-primary-300 text-white text-sm font-semibold uppercase px-5 py-2">
                Search
            </button>
        </div>
        <div className={`${showCartMenu ? 'right-[0]' : 'right-[-100%]'} absolute top-0 h-[100vh] flexCenter gap-4 bg-slate-300/50 w-full z-10`} onClick={() => setShowCartMenu(false)}>
        </div>
        <div className={`${showCartMenu ? 'right-[0]' : 'right-[-100%]'} absolute flex flex-col justify-between top-0 h-[100vh] bg-white w-1/4 max-sm:w-[80%] max-md:w-1/2 max-xl:w-2/5 ease duration-500 z-20`}>
            <div className="flex justify-between items-start p-6">
                <h1 className='font-bold capitalize text-2xl text-black border-b border-slate-300/50 pb-6 w-[80%]'>Shopping Cart</h1>
                <Image 
                    className='cursor-pointer'
                    src="./icons/cancel.svg"
                    height="30"
                    width="30"
                    alt='search'
                    onClick={() => setShowCartMenu(false)}
                />
            </div>
            <div className="flex-1 flex flex-col py-4 gap-4 overflow-y-auto p-6">
                {miniCart?.map((item) => (
                    <div className="flexBetweenCenter" key={item.key}>
                        <Image
                            className='rounded-xl'
                            src={item.image}
                            width={100}
                            height={100}
                            alt={item.title}
                        />
                        <div className="flex flex-col gap-3">
                            <h2 className="text-md font-semibold">{item.title}</h2>
                            <div className="flex gap-3 items-center">
                                <p className="text-sm">{item.quantity}</p>
                                <p className="text-sm">X</p>
                                <p className="text-xs text-primary-300">$ {item.price}</p>
                            </div>
                        </div>
                        <Image
                            className='cursor-pointer'
                            src="/icons/cancel.svg"
                            width={25}
                            height={25}
                            alt="title"
                            onClick={() => removeItemFromMiniCart(item.key)}
                        />
                    </div>
                ))}
                {miniCart?.length == 0 && (<p className='font-medium text-center text-md'>No items in cart!</p>)}
            </div>
            <div className="flex flex-col">
                <div className="flex w-full py-3 px-6 border-b-2 border-slate-300/50">
                    <h2 className="text-md font-medium w-1/2">Subtotal</h2>
                    <p className="text-lg font-medium w-1/2 text-primary-300">{miniCart?.length == 0 ? ('$ 0.00') :  ('$ 520,000.00')}</p>
                </div>
                <div className="flex py-5 px-6 w-full gap-2">
                    <Link href="/cart" className='minicart-btn'>Cart</Link>
                    <Link href="/checkout" className='minicart-btn'>Checkout</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar