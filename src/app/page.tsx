import React from "react";
import { notFound } from "next/navigation";
import ProductList from "@ui/organisms/ProductList";
import { getHomepageCollections, getProductsList } from "@/api/products";
import TitleSection from "@ui/molecules/TitleSection";
import CollectionListItem from "@ui/molecules/CollectionListItem";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export default async function Home() {
	const products = (await getProductsList(1)) as ProductListItemFragmentFragment[];
	const collections = await getHomepageCollections();
	if (!products || !collections) throw notFound();
	return (
		<>
			<TitleSection>
				<h2 className="text-3xl font-bold tracking-tight text-slate-900">Collections</h2>
				<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
					{collections.map((collection) => (
						<CollectionListItem key={collection?.id} collectionName={collection?.name || ""} />
					))}
				</div>
			</TitleSection>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</>
	);
}
