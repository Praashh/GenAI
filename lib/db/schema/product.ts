import { productSchema } from "@/zodAutoGenSchemas";
import { z } from "zod";
import { timestamps } from "@/lib/utils";
import { getProduct } from "@/lib/api/product/queries";


// Schema for product - used to validate API requests
const baseSchema = productSchema.omit(timestamps)

export const insertProductSchema = baseSchema.omit({ id: true });
export const insertProductParams = baseSchema.extend({}).omit({ 
  id: true,
  userId: true
});

export const updateProductSchema = baseSchema;
export const updateProductParams = updateProductSchema.extend({}).omit({ 
  userId: true
});
export const productIdSchema = baseSchema.pick({ id: true });

// Types for product - used to type API request params and within Components
export type Product = z.infer<typeof productSchema>;
export type NewProduct = z.infer<typeof insertProductSchema>;
export type NewProductParams = z.infer<typeof insertProductParams>;
export type UpdateProductParams = z.infer<typeof updateProductParams>;
export type ProductId = z.infer<typeof productIdSchema>["id"];
    
// this type infers the return from getProduct() - meaning it will include any joins
export type CompleteProduct = Awaited<ReturnType<typeof getProduct>>["product"][number];

