import { getProductById, getProduct } from "@/lib/api/product/queries";
import { publicProcedure, router } from "@/lib/server/trpc";
import {
  productIdSchema,
  insertProductParams,
  updateProductParams,
} from "@/lib/db/schema/product";
import { createProduct, deleteProduct, updateProduct } from "@/lib/api/product/mutations";

export const productRouter = router({
  getProduct: publicProcedure.query(async () => {
    return getProduct();
  }),
  getProductById: publicProcedure.input(productIdSchema).query(async ({ input }) => {
    return getProductById(input.id);
  }),
  createProduct: publicProcedure
    .input(insertProductParams)
    .mutation(async ({ input }) => {
      return createProduct(input);
    }),
  updateProduct: publicProcedure
    .input(updateProductParams)
    .mutation(async ({ input }) => {
      return updateProduct(input.id, input);
    }),
  deleteProduct: publicProcedure
    .input(productIdSchema)
    .mutation(async ({ input }) => {
      return deleteProduct(input.id);
    }),
});
