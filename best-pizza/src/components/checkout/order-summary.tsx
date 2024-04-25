import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export function OrderSummary() {
  const { products, total } = useCart();

  const shippingTax = 500;
  return (
    <div className="w-1/2 self-start rounded-lg border p-6">
      <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold">
        <ShoppingCart />
        Resumo do Pedido
      </h2>

      <ul className="divide-y">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-4 py-4">
            <div className="relative h-14 w-14">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1200px)100%"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <div className="flex flex-1 items-center justify-between">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="text-gray-500">
                  {formatPrice((product.price * product.quantity) / 100)}
                </span>
              </div>

              <span className="text-md text-gray-500">
                Quantidade: {product.quantity}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className=" flex flex-col gap-2 border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Subtotal</span>
          <span className="text-gray-500">{formatPrice(total / 100)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Taxa de Entrega</span>
          <span className="text-gray-500">
            {formatPrice(shippingTax / 100)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-gray-500">
            {formatPrice((total + shippingTax) / 100)}
          </span>
        </div>
      </div>
    </div>
  );
}
