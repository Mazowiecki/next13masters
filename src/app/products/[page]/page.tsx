import React from "react";
import ProductList from "@ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { type ProductProps } from "@ui/molecules/Product";
import Pagination from "@ui/molecules/Pagination";

export const generateStaticParams = async () => {
	// const products = (await getProductsList(1)) as ProductProps[];
	// return products.map((product) => product.id);
	return [{ page: "1" }, { page: "2" }, { page: "3" }];
};

export default async function ProductsPageByPage({ params }: { params: { page: string } }) {
	const products = (await getProductsList(Number(params.page))) as ProductProps[];

	return (
		<>
			<ProductList products={products} />
			<Pagination length={2} />
		</>
	);
}
