import { FaImage, FaPencilAlt } from "react-icons/fa";
import { format } from "date-fns";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import DeleteProduct from "./Delete";
import TableHeader from "./TableHeader";

const ProductsTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHeader />
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <th
                scope="row"
                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.imageUrls.length > 0 ? (
                  <Image
                    src={product.imageUrls[0]}
                    alt={product.name}
                    height={100}
                    width={150}
                    className="w-8 h-8 mr-3 object-contain"
                  />
                ) : (
                  <FaImage className="w-8 h-8 mr-3 text-gray-300" />
                )}

                {product.name}
              </th>
              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary dark:text-white">
                  {product.category}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.brand}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rs. {product.price}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                  <div className="inline-block w-2.5 h-2.5 mr-2 bg-green-500 rounded-full" />
                  {product.stock ?? 1}
                </div>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {format(product.createdAt, "dd MMM, yyyy")}
              </td>
              <td className="flex items-center justify-center gap-2 px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                  className="bg-primary text-white p-2 rounded-md text-xs hover:bg-blue-600 cursor-pointer"
                >
                  <FaPencilAlt />
                </Link>
                <DeleteProduct id={product._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;