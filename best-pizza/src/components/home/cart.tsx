"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

import { CreditCard, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CartItem } from "./cart-item";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function Cart() {
  const { products, total, updateProduct, removeProduct } = useCart();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleGoToCheckout = () => {
    router.push("/checkout");
    setOpen(false);
  };

  const totalProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const totalFormatPrice = formatPrice(total / 100);

  return (
    <div className="relative">
      <div>
        <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
          <ShoppingCart className="text-zinc-500" size={24} />
          {products.length > 0 && (
            <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white absolute -right-2 -top-2 inline-flex items-center justify-center ">
              {totalProducts}
            </span>
          )}
        </Button>

        {open && (
          <div className="absolute right-0 top-full z-20 mt-2 w-96 rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Seu Carrinho</h3>
                <span className="text-gray text-sm">
                  Total: {totalFormatPrice}
                </span>
              </div>

              <ul>
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex w-full items-center justify-between py-4"
                  >
                    <CartItem
                      product={product}
                      updateProduct={updateProduct}
                      removeProduct={removeProduct}
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Button className="w-full" onClick={handleGoToCheckout}>
                  <CreditCard className="mr-2" />
                  Finalizar Pedido
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
