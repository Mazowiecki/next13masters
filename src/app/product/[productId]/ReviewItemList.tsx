import React from "react";
import { Star } from "lucide-react";
import { type ReviewItemFragmentFragment } from "@/gql/graphql";

export const ReviewItemList = ({ reviews }: { reviews: ReviewItemFragmentFragment[] }) => {
	return (
		<>
			{reviews
				.sort(
					(a, b) =>
						new Date(Number(b.createdAt)).getTime() - new Date(Number(a.createdAt)).getTime(),
				)
				.map((review) => (
					<div className="py-12" key={review.id}>
						<div className="flex items-center">
							{new Date(Number(review.createdAt)).toDateString()}
							<div className="ml-4">
								<h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
								<div className="mt-1 flex flex-row items-center gap-2">
									<p aria-hidden="true" className="small-caps text-sm">
										{review.rating}/5
									</p>
									<div className="flex items-center justify-end">
										<Star />
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
								</div>
							</div>
						</div>
						<div>
							<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">
								{review.headline}
							</p>
							<p className="mt-2 text-sm italic text-gray-600">{review.content}</p>
						</div>
					</div>
				))}
		</>
	);
};
