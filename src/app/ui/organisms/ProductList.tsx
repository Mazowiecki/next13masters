import React from "react";
import Link from "next/link";
import Product, { type ProductProps } from "@ui/molecules/Product";

type ProductListProps = {
	products: ProductProps[];
};

const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/product/${product.id}`}>
						<Product {...product} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ProductList;
