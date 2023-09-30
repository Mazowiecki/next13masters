"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { type Route } from "next";

export const FilterProducts = () => {
	const router = useRouter();

	return (
		<select
			onChange={(e) => {
				router.push(`?sort=${e.target.value}` as Route);
			}}
			className="arrow-down-bg block w-48 cursor-pointer appearance-none rounded-md border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 lg:mt-1"
		>
			<option value="ratingDesc" data-testid="sort-by-rating">
				Rating (High to Low)
			</option>
			<option value="ratingAsc" data-testid="sort-by-rating">
				Rating (Low to High)
			</option>
			<option value="priceAsc" data-testid="sort-by-price">
				Price (Low to High)
			</option>
			<option value="priceDesc" data-testid="sort-by-price">
				Price (High to Low)
			</option>
		</select>
	);
};
