"use client";

import { Product, NewProductParams, insertProductParams } from "@/lib/db/schema/product";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProductForm = ({
  product,
  closeModal,
}: {
  product?: Product;
  closeModal?: () => void;
}) => {
  
  const editing = !!product?.id;

  const router = useRouter();
  const utils = trpc.useContext();

  const form = useForm<z.infer<typeof insertProductParams>>({
    // latest Zod release has introduced a TS error with zodResolver
    // open issue: https://github.com/colinhacks/zod/issues/2663
    // errors locally but not in production
    resolver: zodResolver(insertProductParams),
    defaultValues: product ?? {
      productName: ""
    },
  });

  const onSuccess = async (action: "create" | "update" | "delete",
    data?: { error?: string },
  ) => {
        if (data?.error) {
      toast.error(data.error)
      return;
    }

    await utils.product.getProduct.invalidate();
    router.refresh();
    if (closeModal) closeModal();
        toast.success(`Product ${action}d!`);
  };

  const { mutate: createProduct, isLoading: isCreating } =
    trpc.product.createProduct.useMutation({
      onSuccess: (res) => onSuccess("create"),
      onError: (err) => console.log("create", { error: err.message }),
    });

  const { mutate: updateProduct, isLoading: isUpdating } =
    trpc.product.updateProduct.useMutation({
      onSuccess: (res) => onSuccess("update"),
      onError: (err) => console.log("update", { error: err.message }),
    });

  const { mutate: deleteProduct, isLoading: isDeleting } =
    trpc.product.deleteProduct.useMutation({
      onSuccess: (res) => onSuccess("delete"),
      onError: (err) => console.log("delete", { error: err.message }),
    });

  const handleSubmit = (values: NewProductParams) => {
    if (editing) {
      updateProduct({ ...values, id: product.id });
    } else {
      createProduct(values);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={"space-y-8"}>
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (<FormItem>
              <FormLabel>Product Name</FormLabel>
                <FormControl>
            <Input {...field} />
          </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mr-1"
          disabled={isCreating || isUpdating}
        >
          {editing
            ? `Sav${isUpdating ? "ing..." : "e"}`
            : `Creat${isCreating ? "ing..." : "e"}`}
        </Button>
        {editing ? (
          <Button
            type="button"
            variant={"destructive"}
            onClick={() => deleteProduct({ id: product.id })}
          >
            Delet{isDeleting ? "ing..." : "e"}
          </Button>
        ) : null}
      </form>
    </Form>
  );
};

export default ProductForm;
