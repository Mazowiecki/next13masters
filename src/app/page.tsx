import React from "react";
import ProductList from "@ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { type ProductProps } from "@ui/molecules/Product";

export default async function Home() {
	const products = (await getProductsList(1)) as ProductProps[];
	return <ProductList products={products} />;
}
