import React from "react";
import { notFound } from "next/navigation";
import ProductList from "@ui/organisms/ProductList";
import { getProductsListLimit } from "@/api/products";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const SuggestedProductsList = async () => {
	const products = (await getProductsListLimit(4)) as ProductListItemFragmentFragment[];

	if (!products) {
		throw notFound();
	}

	return (
		<aside data-testid="related-products">
			<div className="py-16">
				<h2 className="py-8 text-xl font-semibold leading-7">Similar Products</h2>
				<ProductList products={products} />
			</div>
		</aside>
	);
};
