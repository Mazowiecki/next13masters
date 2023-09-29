"use client";
import React, { experimental_useOptimistic as useOptimistic } from "react";
import { Star } from "lucide-react";
import { ReviewItemList } from "@/app/product/[productId]/ReviewItemList";
import { ProductListItemFragmentFragment, ReviewItemFragmentFragment } from "@/gql/graphql";
import { AddReviewForm } from "@/app/product/[productId]/AddReviewForm";
import { addReview } from "@/app/product/[productId]/actions";

export const Reviews = ({ product }: { product: ProductListItemFragmentFragment }) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic<ReviewItemFragmentFragment[]>(
		product.review as any,
	);
	async function addReviewAction(_formData: FormData) {
		if (
			!_formData.get("name") ||
			!_formData.get("content") ||
			!_formData.get("headline") ||
			!_formData.get("email")
		) {
			return;
		}

		const newReview: ReviewItemFragmentFragment = {
			id: product.id,
			name: _formData.get("name") as string,
			content: _formData.get("content") as string,
			headline: _formData.get("headline") as string,
			email: _formData.get("email") as string,
			rating: 5,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};
		if (optimisticReviews?.length) {
			setOptimisticReviews([...optimisticReviews, newReview]);
		}

		await addReview(product.id, _formData);
	}

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
				<div className="lg:col-span-4">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>
					<div className="mt-3 flex items-center">
						<div className="flex items-center">
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</div>
						<p>Based on {optimisticReviews.length} reviews</p>
					</div>
					<div className="mt-10">
						<p className="text-lg font-medium text-gray-900">
							If you’ve used this product, share your thoughts with other customers
						</p>
						<form
							data-testid="add-review-form"
							onSubmit={async (e) => {
								e.preventDefault();
								await addReviewAction(new FormData(e.currentTarget));
							}}
							className="mt-2 flex flex-col gap-y-2"
						>
							<AddReviewForm />
						</form>
					</div>
				</div>
				<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
					<div className="-my-12 divide-y divide-gray-200">
						<ReviewItemList reviews={optimisticReviews} />
					</div>
				</div>
			</div>
		</div>
	);
};
