import React from 'react'

const ImageGrid = () => {
  return (
    <div className='px-[100px] w-full max-md:px-[30px] max-lg:px-[50px] flex flex-col gap-8'>
        <div className="text-center flex flex-col gap-2">
            <p className="font-bold text-sm text-gray-600">Share your setup with</p>
            <h1 className="font-extrabold text-black text-3xl">#FuniroFurniture</h1>
        </div>
        <div className="columns-4 gap-3 w-full mx-auto space-y-3">
            <div className="break-inside-avoid">
                <img src="/gallery/4.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/1.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/10.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/2.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/3.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/6.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/7.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/5.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/8.jpg" alt="1" />
            </div>
            <div className="break-inside-avoid">
                <img src="/gallery/9.jpg" alt="1" />
            </div>
        </div>
    </div>
  )
}

export default ImageGrid