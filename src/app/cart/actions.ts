"use server";

import { executeGraphQl } from "@/api/products";
import { DeleteOrderItemDocument, SetOrderItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (id: string, quantity: number) => {
	await executeGraphQl({ query: SetOrderItemQuantityDocument, variables: { id, quantity } });
};

export const deleteItem = async (id: string) => {
	await executeGraphQl({ query: DeleteOrderItemDocument, variables: { id } });
};
