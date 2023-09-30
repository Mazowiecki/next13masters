"use server";

import { revalidatePath } from "next/cache";
import { executeGraphQl } from "@/api/products";
import { CreateReviewDocument } from "@/gql/graphql";

export const addReview = async (id: string, _formData: FormData) => {
	await executeGraphQl({
		query: CreateReviewDocument,
		variables: {
			productId: id,
			rating: Number(_formData.get("rating")),
			name: _formData.get("name") as string,
			content: _formData.get("content") as string,
			headline: _formData.get("headline") as string,
			email: _formData.get("email") as string,
		},
	});
	revalidatePath("/product");
};
