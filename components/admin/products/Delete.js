"use client";

import { deleteProduct } from "@/api/products";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const DeleteProduct = ({ id }) => {
  const router = useRouter();

  function removeProduct() {
    const isConfirmed = confirm("Are you sure?");

    if (!isConfirmed) return;

    deleteProduct(id)
      .then(() => {
        toast.success("Product deleted successfully.");
        router.refresh();
      })
      .catch(() => toast.error("Product deletion failed."));
  }

  return (
    <button
      onClick={removeProduct}
      className="bg-red-500 text-white p-2 rounded-md text-xs hover:bg-red-600 cursor-pointer"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteProduct;