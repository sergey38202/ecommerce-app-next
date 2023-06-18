import Index from "@/components/ProductImage";
import { notFound } from "next/navigation";
import {TProps} from "@/app/product/[id]/types";

async function ProductPage({ params: { id } }: TProps) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: IProduct = await res.json();

    const { title, price, description } = product;

    return (
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        <Index product={product} />

        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
              ${price}
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductPage;
