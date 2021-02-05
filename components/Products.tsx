/** @format */

import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
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
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const productsToShow = filteredProducts ? filteredProducts : products;

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

  console.log(products);

  const handleFilterProducts = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setFilteredProducts(products);
      return;
    }
    const result = products.filter((product) => product.category === value);
    setFilteredProducts(result);
  };

  return (
    <>
      <FilterProducts handleFilterProducts={handleFilterProducts} />
      <div className='flex flex-col content-center space-y-2 w-6/12'>
        {products && showProducts}
      </div>
    </>
  );
}
