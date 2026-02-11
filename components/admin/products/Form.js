"use client";
import { addProduct } from "@/api/products";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { FaPlus, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const Form = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setSelectedImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { register, handleSubmit } = useForm();

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      onDrop: onDrop,
      accept: {
        "image/jpeg": [".jpeg", ".jpg"],
        "image/png": [".png"],
      },
      maxFiles: 5,
      maxSize: 5 * 1024 * 1024, // 5MB
    });

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const submitForm = async (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock ?? 1);
    if (data.description) formData.append("description", data.description);

    if (selectedImages.length > 0) {
      selectedImages.map((image) => {
        formData.append("images", image);
      });
    }

    try {
      setLoading(true);
      await addProduct(formData);
      toast.success("Product added successfully");
      router.back();
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 outline-0 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Type product name"
            required
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand *
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price *
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Rs. 10000"
            required
            {...register("price")}
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category *
          </label>
          <input
            type="text"
            id="category"
            className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Product category"
            required
            {...register("category")}
          />
        </div>
        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder={10}
            {...register("stock")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Images
          </label>
          <div
            {...getRootProps()}
            className="flex items-center justify-center w-full"
          >
            <div className="flex flex-col items-center justify-center rounded-lg w-full  border border-dashed border-gray-300 cursor-pointer dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center text-body py-10">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">.png, .jpg, .jpeg (Max 5MB)</p>
              </div>
              <input {...getInputProps()} type="file" />
            </div>
          </div>
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="border rounded-lg p-2 border-gray-200 flex items-center gap-5 mt-2"
                >
                  <Image
                    className="h-14 w-14 object-contain"
                    src={URL.createObjectURL(image)}
                    width={100}
                    alt=""
                    height={100}
                  />

                  <div className="flex-1">
                    <h4>{image.name}</h4>
                    <span className="text-gray-600 text-sm">
                      {Math.round(image.size / 1024)} KB
                    </span>
                  </div>
                  <button
                    onClick={() => removeImage(index)}
                    type="button"
                    className="cursor-pointer bg-red-500 text-white p-2 rounded"
                  >
                    {" "}
                    <FaTimes className="" />
                  </button>
                </div>
              );
            })}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-3 focus:ring-primary/50 outline-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Your description here"
            defaultValue={""}
            {...register("description")}
          />
        </div>
      </div>
      <button
        type="submit"
        className="disabled:opacity-80 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600 cursor-pointer"
      >
        <span className="mr-2">Add product</span>
        {loading ? <Spinner className="h-5 w-5 fill-primary" /> : <FaPlus />}
      </button>
    </form>
  );
};

export default Form;
