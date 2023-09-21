import React, { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { type ProductProps } from "@ui/molecules/Product";
import { SuggestedProductsList } from "@ui/organisms/SuggestedProductsList";
import ProductImage from "@ui/atoms/ProductImage";
import { formatMoney } from "@/utils";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { title, description } = (await getProductById(params.productId)) as ProductProps;

	return {
		title: title,
		description: description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const { image, description, price, title } = (await getProductById(
		params.productId,
	)) as ProductProps;

	return (
		<>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<ProductImage src={image} alt={description} />
				<div className="px-6">
					<h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
					<div className="mt-4 flex items-center">
						<p
							className="small-caps text-sm font-medium text-slate-900"
							data-testid="product-price"
						>
							{formatMoney(price)}
						</p>
					</div>
					<div className="mt-4 space-y-6">
						<p className="font-sans text-base text-slate-500"></p>
					</div>
					<div className="mt-6 flex items-center">
						<p className="ml-1 text-sm font-semibold text-slate-500">In stock</p>
					</div>
					<div className="mt-8">
						<button className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300">
							Add to cart
						</button>
					</div>
				</div>
			</div>
			<aside>
				<Suspense aria-busy="true" fallback="Loading...">
					<h2>Similar Products</h2>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
