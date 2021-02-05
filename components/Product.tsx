/** @format */

import React from "react";
import Image from "next/image";

export default function Product({
  image,
  title,
  description,
  category,
  price,
}) {
  return (
    <div className='flex p-6'>
      <div className='flex-none w-48 relative'>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='absolute inset-0 w-full h-full'
        />
      </div>
      <form className='flex-auto p-6'>
        <div className='flex flex-col'>
          <h1 className='flex text-xl font-semibold'>{title}</h1>
          <div className='text-xl font-semibold text-gray-500'>{`$${price}`}</div>
          <div className='w-full flex-none text-sm font-medium text-gray-500 mt-2'>
            In Stock
          </div>
          <div className='flex space-x-3 mb-4 text-sm font-medium'>
            <div className='flex-auto flex space-x-3 mt-4'>
              <button
                className='w-4/12 h-8 flex items-center justify-center rounded-md bg-black text-white'
                type='submit'
              >
                Buy now
              </button>
              <button
                className='w-4/12 h-8 flex items-center justify-center rounded-md border border-gray-300'
                type='button'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
