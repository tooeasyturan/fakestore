/** @format */

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className='bg-gray-800 text-white flex justify-between items-center'>
      <h1 className='m-4'>LOGO</h1>
      <nav className='m-4'>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
