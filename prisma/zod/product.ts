import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const productSchema = z.object({
  id: z.string(),
  productName: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProduct extends z.infer<typeof productSchema> {
  user: CompleteUser
}

/**
 * relatedProductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductSchema: z.ZodSchema<CompleteProduct> = z.lazy(() => productSchema.extend({
  user: relatedUserSchema,
}))
