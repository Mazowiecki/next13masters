import React from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import ProductList from "@ui/organisms/ProductList";
import { UpperFirst } from "@/utils";
import { getProductsByCollection } from "@/api/products";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> => {
	return {
		title: UpperFirst(params.collectionName),
	};
};

export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	const products = (await getProductsByCollection(
		params.collectionName,
	)) as ProductListItemFragmentFragment[];

	if (!products) {
		throw notFound();
	}

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
