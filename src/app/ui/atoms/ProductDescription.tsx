import React from "react";
import Image from "next/image";
import { formatMoney } from "@/utils";
import { type ReviewItemFragmentFragment } from "@/gql/graphql";

type ProductDescriptionProps = {
	title: string;
	price: number;
	review?: ReviewItemFragmentFragment[];
};

const ProductDescription = ({ title, price, review }: ProductDescriptionProps) => {
	const countedReview = review
		? review.reduce((acc, { rating }) => acc + rating, 0) / review.length
		: 0;
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold text-slate-700">{title}</h3>
				<p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">
					{formatMoney(price)}
				</p>
			</div>
			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-slate-500">Category</p>
				<div className="flex flex-row items-center gap-2" title="4.5 out of 5 stars">
					<p className="small-caps text-xs" data-testid="product-rating">
						{countedReview.toFixed(1)} / 5
					</p>
					<div className="flex items-end">
						<Image src="../../star.svg" width={20} height={20} alt="star" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
