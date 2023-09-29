import React from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsListByCategoryName } from "@/api/products";
import ProductList from "@ui/organisms/ProductList";
import Pagination from "@ui/molecules/Pagination";
import { UpperFirst } from "@/utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { categoryName: string; page: string };
}): Promise<Metadata> => {
	return {
		title: UpperFirst(params.categoryName),
	};
};

export default async function SingleProductPage({
	params,
}: {
	params: { categoryName: string; page: string };
}) {
	const products = (await getProductsListByCategoryName(
		Number(params.page),
		params.categoryName,
	)) as ProductListItemFragmentFragment[];

	if (!products) {
		throw notFound();
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination href={`/categories/${params.categoryName}`} length={2} />
		</>
	);
}
