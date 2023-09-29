import React, { Suspense } from "react";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@ui/organisms/SuggestedProductsList";
import ProductImage from "@ui/atoms/ProductImage";
import { formatMoney } from "@/utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/app/product/[productId]/AddToCartButton";
import { addToCart, getOrCreateCart } from "@/api/cart";
import { Reviews } from "@/app/product/[productId]/Reviews";
import { changeItemQuantity } from "@/app/cart/actions";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<{
	description: string | null | undefined;
	title: string;
	openGraph: {
		images: { url: string | null | undefined }[];
		description: string | null | undefined;
		title: string;
	};
}> => {
	const product = (await getProductById(params.productId)) as ProductListItemFragmentFragment;

	return {
		title: product.name || "",
		description: product.description || "",
		openGraph: {
			title: product.name || "",
			description: product.description || "",
			images: [{ url: product.image || "" }],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = (await getProductById(params.productId)) as ProductListItemFragmentFragment;

	if (!product) {
		throw notFound();
	}

	const { name, description, image, price } = product;

	async function addToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		if (cart && cart.orderItem?.some((item) => item?.product?.id === params.productId)) {
			const item = cart.orderItem?.find((item) => item?.product?.id === params.productId);
			await changeItemQuantity(item!.id, item!.quantity + 1);
			revalidatePath("/");
			return;
		}
		await addToCart(cart.id, params.productId);
		revalidatePath("/");
	}

	return (
		<>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{image && name && <ProductImage src={image} alt={name} />}
				<div className="px-6">
					<h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">{name}</h1>
					<div className="mt-4 flex items-center">
						<p
							className="small-caps text-sm font-medium text-slate-900"
							data-testid="product-price"
						>
							{price && formatMoney(price)}
						</p>
					</div>
					<div className="mt-4 space-y-6">
						<p className="font-sans text-base text-slate-500">{description}</p>
					</div>
					<div className="mt-6 flex items-center">
						<p className="ml-1 text-sm font-semibold text-slate-500">In stock</p>
					</div>
					<div className="mt-8">
						<form action={addToCartAction}>
							<AddToCartButton />
						</form>
					</div>
				</div>
			</div>
			<aside>
				<Suspense fallback="Loading">
					<SuggestedProductsList />
				</Suspense>
			</aside>
			<Reviews product={product} />
		</>
	);
}
