import React from "react";
import { notFound } from "next/navigation";
import ProductList from "@ui/organisms/ProductList";
import Pagination from "@ui/molecules/Pagination";
import TitleSection from "@ui/molecules/TitleSection";
import { getProducts } from "@/app/products/[page]/actions";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { FilterProducts } from "@/app/products/[page]/FilterProducts";

export const generateStaticParams = async () => {
	// const products = (await getProductsList(1)) as ProductProps[];
	// return products.map((product) => product.id);
	return [{ page: "1" }, { page: "2" }, { page: "3" }];
};

export default async function ProductsPageByPage({
	params,
	searchParams,
}: {
	params: { page: string };
	searchParams: { [key: string]: string };
}) {
	let filterPriceHighToLow: boolean | undefined = undefined;
	let filterRatingHighToLow: boolean | undefined = undefined;

	if (searchParams?.sort === "priceAsc") {
		filterPriceHighToLow = false;
	} else if (searchParams?.sort === "priceDesc") {
		filterPriceHighToLow = true;
	} else if (searchParams?.sort === "ratingDesc") {
		filterRatingHighToLow = true;
	} else if (searchParams?.sort === "ratingAsc") {
		filterRatingHighToLow = false;
	}

	const products = (await getProducts(
		Number(params.page),
		filterPriceHighToLow,
		filterRatingHighToLow,
	)) as ProductListItemFragmentFragment[];

	if (!products) {
		throw notFound();
	}

	return (
		<>
			<TitleSection>
				<h2 className="text-3xl font-bold tracking-tight text-slate-900">All products</h2>
				<FilterProducts />
			</TitleSection>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={products} />
				<Pagination
					href="/products"
					searchParams={searchParams?.sort ? `sort=${searchParams?.sort}` : undefined}
					length={2}
				/>
			</section>
		</>
	);
}
