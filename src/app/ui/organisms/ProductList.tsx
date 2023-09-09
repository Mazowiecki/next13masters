import React from "react";
import Product from "@ui/molecules/Product";

type ProductProps = {
	id: number;
	src: string;
	alt: string;
	title: string;
	price: number;
};

const ProductsMock: ProductProps[] = [
	{
		id: 1,
		title: "Product 1",
		alt: "Product 1",
		price: 100,
		src: "https://picsum.photos/300/300",
	},
	{
		id: 2,
		title: "Product 2",
		alt: "Product 2",
		price: 250,
		src: "https://picsum.photos/300/300",
	},
	{
		id: 3,
		title: "Product 3",
		alt: "Product 3",
		price: 300,
		src: "https://picsum.photos/300/300",
	},
];

const ProductList = () => {
return (
		<ul>
			{ProductsMock.map((product) => (
				<li key={product.id}>
					<Product {...product} />
				</li>
			))}
		</ul>
	);
};

export default ProductList;
