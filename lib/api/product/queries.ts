import { db } from "@/lib/db/index";
import { getUserAuth } from "@/lib/auth/utils";
import { type ProductId, productIdSchema } from "@/lib/db/schema/product";

export const getProducts = async () => {
  const { session } = await getUserAuth();
  const p = await db.product.findMany({ where: {userId: session?.user.id!}});
  return { product: p };
};

export const getProductById = async (id: ProductId) => {
  const { session } = await getUserAuth();
  const { id: productId } = productIdSchema.parse({ id });
  const p = await db.product.findFirst({
    where: { id: productId, userId: session?.user.id!}});
  return { product: p };
};


