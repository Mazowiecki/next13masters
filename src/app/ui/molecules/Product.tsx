import React from "react";
import ProductImage from "@/app/ui/atoms/ProductImage";
import ProductDescription from "@/app/ui/atoms/ProductDescription";

export type ProductProps = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const Product = ({ image, description, price, title }: ProductProps) => {
	return (
		<>
			<ProductImage src={image} alt={description} />
			<ProductDescription price={price} title={title} />
		</>
	);
};

export default Product;
