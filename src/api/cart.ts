import { cookies } from "next/headers";
import { currentUser } from "@clerk/nextjs";
import {
	CreateOrderDocument,
	CreateOrderItemDocument,
	GetCartByIdDocument,
	type Order,
} from "@/gql/graphql";
import { executeGraphQl } from "@/api/products";

export async function getOrCreateCart(): Promise<Order> {
	const existingCart = await getCartFromCookie();
	const user = await currentUser();
	const userId = user?.id;

	if (existingCart) {
		return existingCart as Order;
	}

	const cart = await createCart(userId);
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

export async function createCart(userId?: string) {
	const variablesData = userId ? { userId } : { userId: null };
	return executeGraphQl({ query: CreateOrderDocument, variables: variablesData });
}

export async function addToCart(cartId: string, productId: string) {
	const quantity = 1;
	return executeGraphQl({
		query: CreateOrderItemDocument,
		variables: { quantity, productId, orderId: cartId },
		cache: "no-store",
	});
}
