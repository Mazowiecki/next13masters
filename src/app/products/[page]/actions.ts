"use server";

import { getProductsList } from "@/api/products";

export const getProducts = async (
	page: number,
	filterPriceHighToLow?: boolean,
	filterRatingHighToLow?: boolean,
) => {
	return await getProductsList(Number(page), filterPriceHighToLow, filterRatingHighToLow);
};
