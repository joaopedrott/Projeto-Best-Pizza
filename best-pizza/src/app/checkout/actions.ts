"use server";

import { LineItems, createPaymentIntent } from "@/lib/stripe";

export async function createClientSecret(
  amount: number,
  lineItems: LineItems[],
): Promise<string> {
  const { client_secret } = await createPaymentIntent(amount, lineItems);

  return client_secret!;
}
