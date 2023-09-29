import { cookies } from "next/headers";
import {
	CreateOrderDocument,
	CreateOrderItemDocument,
	GetCartByIdDocument,
	type Order,
} from "@/gql/graphql";
import { executeGraphQl } from "@/api/products";

export async function getOrCreateCart(): Promise<Order> {
	const existingCart = await getCartFromCookie();
	if (existingCart) {
		return existingCart as Order;
	}

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Could not create cart");
	}
	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return cart.createOrder as Order;
}

export async function getCartFromCookie() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphQl({
			query: GetCartByIdDocument,
			variables: {
				cartId,
			},
			next: {
				tags: ["cart"],
			},
			cache: "no-store",
		});
		if (cart.order) {
			return cart.order;
		}
	}
	return;
}

export async function createCart() {
	return executeGraphQl({ query: CreateOrderDocument, variables: {} });
}

export async function addToCart(cartId: string, productId: string) {
	const quantity = 1;
	return executeGraphQl({
		query: CreateOrderItemDocument,
		variables: { quantity, productId, orderId: cartId },
		cache: "no-store",
	});
}
