import ProductList from "@/components/product/ProductList";
import NewProductModal from "@/components/product/ProductModal";
import { api } from "@/lib/trpc/api";
import { checkAuth } from "@/lib/auth/utils";

export default async function Product() {
  await checkAuth();
  const { product } = await api.product.getProduct.query();  

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl my-2">Product</h1>
        <NewProductModal />
      </div>
      <ProductList product={product} />
    </main>
  );
}
