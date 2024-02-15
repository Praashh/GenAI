import { computersRouter } from "./computers";
import { router } from "@/lib/server/trpc";
import { productRouter } from "./product";

export const appRouter = router({
  computers: computersRouter,
  product: productRouter,
});

export type AppRouter = typeof appRouter;
