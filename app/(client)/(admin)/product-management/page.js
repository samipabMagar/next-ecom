import { FaUpload } from "react-icons/fa";
import Link from "next/link";

import { getProducts } from "@/api/products";
import Pagination from "@/components/admin/products/Pagination";
import ProductsTable from "@/components/admin/products/Table";

const ProductManagementPage = async ({ searchParams }) => {
  const products = await getProducts(searchParams);

  return (
    <section className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Products: </span>
            <span className="dark:text-white">123456</span>
          </h5>
          <h5>
            <span className="text-gray-500">Total sales: </span>
            <span className="dark:text-white">$88.4k</span>
          </h5>
        </div>
        <div className="flex flex-col shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <Link
            href="/product-management/add"
            className="bg-primary px-6 py-2 rounded-md text-white"
          >
            Add product
          </Link>

          <button
            type="button"
            className="flex items-center justify-center shrink-0 px-3 py-2 gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <FaUpload />
            Export
          </button>
        </div>
      </div>
      <ProductsTable products={products} />
      <Pagination />
    </section>
  );
};

export default ProductManagementPage;