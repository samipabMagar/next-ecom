import { getProductById } from "@/api/products";
import ProductForm from "@/components/admin/products/Form";

const UpdateProductPage = async ({ params }) => {
  const id = (await params).id;

  const product = await getProductById(id);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update existing product
        </h2>
        <ProductForm product={product} />
      </div>
    </section>
  );
};

export default UpdateProductPage;