import React from "react";
import { notFound } from "next/navigation";
import TitleSection from "@ui/molecules/TitleSection";
import { getProductsListByQuery } from "@/api/products";
import ProductList from "@ui/organisms/ProductList";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export default async function SearchPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const products = (await getProductsListByQuery(
		(searchParams?.query as string) || "",
	)) as ProductListItemFragmentFragment[];

	if (!products) {
		throw notFound();
	}

	return (
		<>
			<TitleSection>
				Found {products.length} {products.length > 1 ? "products" : "product"} for phase:{" "}
				{searchParams?.query}
			</TitleSection>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</>
	);
}
