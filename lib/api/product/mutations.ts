import { db } from "@/lib/db/index";
import { 
  ProductId, 
  NewProductParams,
  UpdateProductParams, 
  updateProductSchema,
  insertProductSchema, 
  productIdSchema 
} from "@/lib/db/schema/product";
import { getUserAuth } from "@/lib/auth/utils";

export const createProduct = async (product: NewProductParams) => {
  const { session } = await getUserAuth();
  const newProduct = insertProductSchema.parse({ ...product, userId: session?.user.id! });
  try {
    const p = await db.product.create({ data: newProduct });
    return { product: p };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateProduct = async (id: ProductId, product: UpdateProductParams) => {
  const { session } = await getUserAuth();
  const { id: productId } = productIdSchema.parse({ id });
  const newProduct = updateProductSchema.parse({ ...product, userId: session?.user.id! });
  try {
    const p = await db.product.update({ where: { id: productId, userId: session?.user.id! }, data: newProduct})
    return { product: p };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteProduct = async (id: ProductId) => {
  const { session } = await getUserAuth();
  const { id: productId } = productIdSchema.parse({ id });
  try {
    const p = await db.product.delete({ where: { id: productId, userId: session?.user.id! }})
    return { product: p };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

