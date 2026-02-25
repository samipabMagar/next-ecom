"use client";

import Image from "next/image";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

const ProductImage = ({ images }) => {
  const [image, setImage] = useState(images[0]);

  return (
    <div>
      <div className="flex justify-center">
        {image ? (
          <Image
            src={image}
            alt=""
            height={800}
            width={1200}
            className="w-auto h-100"
          />
        ) : (
          <div className="h-100 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
            <FaImage className="text-9xl text-gray-500" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-3 h-28 mt-5">
        {images.map((item, index) => (
          <Image
            key={index}
            className={`${item == image ? "border-primary" : "border-gray-300"} h-28 w-28 border-2 p-2 rounded-lg object-contain`}
            src={item}
            onClick={() => setImage(item)}
            alt=""
            height={800}
            width={1200}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;