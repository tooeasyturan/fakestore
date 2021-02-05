/** @format */

import React, { useState, useEffect } from "react";
import FilteredProducts from "./FilteredProducts";
import Product from "./Product";

type ProductObj = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
};

export default function Products() {
  const [products, setProducts] = useState<ProductObj[] | null>([]);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const productsToShow =
    filterValue === "all"
      ? products
      : products.filter((product) => product.category === filterValue);

  const showProducts = productsToShow.map((product) => (
    <Product
      image={product.image}
      title={product.title}
      key={product.id}
      category={product.category}
      description={product.description}
      price={product.price}
    />
  ));

  const handleFilterProducts = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <FilteredProducts handleFilterProducts={handleFilterProducts} />
      <div className='flex flex-col content-center space-y-2 w-6/12'>
        {products && showProducts}
      </div>
    </>
  );
}
