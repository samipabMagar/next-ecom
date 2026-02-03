"use client";
import { PRODUCT_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DEFAULT_SORT = JSON.stringify({
  createdAt: -1,
});
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000;
const ProductFilter = () => {
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");

  const router = useRouter();

  const filterProducts = () => {
    const params = new URLSearchParams();
    params.set("sort", sort);
    params.set("minPrice", minPrice);
    params.set("maxPrice", maxPrice);
    params.set("category", category);
    params.set("brands", brands.join(","));
    params.set("name", name);

    router.push(`?${params.toString()}`);
  };

  const resetFilters = () => {
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setCategory("");
    setBrands([]);
    setName("");

    router.push(PRODUCT_ROUTE);
  };

  const handleBrandChange = (brand) => {
    setBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand],
    );
  };

  return (
    <aside className="shadow-md py-4 px-6 rounded-xl sticky top-15 h-fit">
      <h1 className="text-xl font-semibold mb-2"> Products Filter</h1>
      <div>
        <h4 className="font-medium">Search Products:</h4>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-0 w-full border-gray-300 rounded-md border px-3 py-1"
          name="name"
        />
      </div>
      <div className="">
        <h4 className="font-medium mb-2">Sort By:</h4>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-gray-800 outline-0 rounded-md w-full border-gray-300 border px-2 py-1"
          name="sort"
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
          <option value={JSON.stringify({ name: 1 })}>Name: A-Z</option>
          <option value={JSON.stringify({ name: -1 })}>Name: Z-A</option>
        </select>
      </div>
      <div>
        <h4 className="mb-1 mt-2">Price Range:</h4>
        <label className="text-xs text-gray-700">Minimum price:</label>
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          type="number"
          className="outline-0  w-full text-gray-800 border-gray-300 border rounded-md my-1 px-2 py-1"
          name="min"
        />
        <label className="text-xs text-gray-700">Maximum price:</label>
        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          type="number"
          className="outline-0 w-full  text-gray-800  border-gray-300 border rounded-md my-1 px-2 py-1"
          name="max"
        />
      </div>

      <div className="mb-2">
        <h4 className="font-medium mb-2 mt-2">Category</h4>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-gray-800 outline-0 rounded-md w-full border-gray-300 border px-2 py-1"
          name="sort"
        >
          <option value={""}>Select category</option>
          <option value={"Smartphones"}>Smartphones</option>
          <option value={"Laptops"}>Laptops</option>
          <option value={"Smartwatches"}>Smartwatches</option>
        </select>
      </div>

      <div>
        <h4 className="font-medium mt-1 mb-1">Brands</h4>

        <div className="flex gap-2 items-center mb-2">
          <input
            name="Apple"
            checked={brands.includes("Apple")}
            onChange={() => handleBrandChange("Apple")}
            type="checkbox"
          />
          <label className="text-sm text-gray-700">Apple</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            checked={brands.includes("Google")}
            onChange={() => handleBrandChange("Google")}
            name="Google"
            type="checkbox"
          />
          <label className="text-sm text-gray-700">Google</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            checked={brands.includes("Samsung")}
            onChange={() => handleBrandChange("Samsung")}
            name="Samsung"
            type="checkbox"
          />
          <label className="text-sm text-gray-700">Samsung</label>
        </div>
      </div>

      <div>
        <button
          onClick={() => filterProducts()}
          className="mt-2 hover:bg-blue-600 transition duration-200 bg-primary cursor-pointer text-white rounded-md py-1 w-full px-5"
        >
          Filter Products
        </button>
        <button
          onClick={() => resetFilters()}
          className="mt-2 bg-red-500 hover:bg-red-600 transition duration-200 cursor-pointer text-white rounded-md py-1 w-full px-5"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductFilter;
