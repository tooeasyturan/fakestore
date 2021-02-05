/** @format */

import React, { useState } from "react";

export default function FilterProducts({ handleFilterProducts }) {
  return (
    <>
      <label htmlFor='products'>Choose a product category:</label>
      <select id='products' name='products' onChange={handleFilterProducts}>
        <option value='all'>All Products</option>
        <option value='men clothing'>Men Clothing</option>
        <option value='women clothing'>Women Clothing</option>
        <option value='jewelery'>Jewelry</option>
        <option value='electronics'>Electronics</option>
      </select>
    </>
  );
}
