import AddToCart from "@/components/products/details/AddToCart";
import ProductDescription from "@/components/products/details/Description";
import ProductImage from "@/components/products/details/Image";
import RecommendedProducts from "@/components/products/details/RecommendCard";
import {config }from "@/config/config";
import axios from "axios";
import { FaRegHeart, FaStar } from "react-icons/fa";

async function fetchById(id) {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
}

export const generateMetadata = async ({ params }) => {
  const id = (await params).id;

  const product = await fetchById(id);

  return {
    title: product?.name,
  };
};

const ProductByIdPage = async ({ params }) => {
  const id = (await params).id;

  const product = await fetchById(id);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="container px-6 mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:grid-cols-[2fr_1fr] xl:gap-16">
          <div>
            <ProductImage images={product.imageUrls} />
            <ProductDescription description={product?.description} />
          </div>
          <div className="lg:sticky top-20 self-start mt-6 sm:mt-8 lg:mt-0 rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-8">
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary inset-ring inset-ring-primary/30">
              {product.category}
            </span>

            <h1 className="my-2 text-2xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-200 ">
              Brand: <span className="font-semibold">{product.brand}</span>
            </p>
            <div className="mt-4">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                Rs. {product.price}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  (5.0)
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </a>
              </div>
            </div>
            <div className="mt-6 gap-4 items-center flex flex-col">
              <a
                href="#"
                className="w-full flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <FaRegHeart className="mr-2" />
                Add to favorites
              </a>
              <AddToCart product={{ id: product._id, ...product }} />
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-600" />
            <div>
              <h4 className="text-xl font-semibold">Recommended Products:</h4>

              <RecommendedProducts
                id={product._id}
                category={product.category}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductByIdPage;