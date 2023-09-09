import React from "react";
import ProductImage from "@/app/ui/atoms/ProductImage";
import ProductDescription from "@/app/ui/atoms/ProductDescription";

type ProductProps = {
	src: string;
	alt: string;
	title: string;
	price: number;
};

const Product = ({ src, alt, price, title }: ProductProps) => {
	return (
		<>
			<ProductImage src={src} alt={alt} />
			<ProductDescription price={price} title={title} />
		</>
	);
};

export default Product;
