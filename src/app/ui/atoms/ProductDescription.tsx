import React from "react";

type ProductDescriptionProps = {
	title: string;
	price: number;
};

const ProductDescription = ({ title, price }: ProductDescriptionProps) => {
	return (
		<div className="flex items-center justify-around">
			<p className="font-bold">{title}</p>
			<p className="font-bold">{price / 100}</p>
		</div>
	);
};

export default ProductDescription;
