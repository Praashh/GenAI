"use client";
import { CompleteProduct } from "@/lib/db/schema/product";
import { trpc } from "@/lib/trpc/client";
import ProductModal from "./ProductModal";


export default function ProductList({ product }: { product: CompleteProduct[] }) {
  const { data: p } = trpc.product.getProduct.useQuery(undefined, {
    initialData: { product },
    refetchOnMount: false,
  });

  if (p.product.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul>
      {p.product.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
}

const Product = ({ product }: { product: CompleteProduct }) => {
  return (
    <li className="flex justify-between my-2">
      <div className="w-full">
        <div>{product.productName}</div>
      </div>
      <ProductModal product={product} />
    </li>
  );
};

const EmptyState = () => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No product
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new product.
      </p>
      <div className="mt-6">
        <ProductModal emptyState={true} />
      </div>
    </div>
  );
};

