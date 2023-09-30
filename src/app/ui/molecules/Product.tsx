import React from "react";
import ProductImage from "@/app/ui/atoms/ProductImage";
import ProductDescription from "@/app/ui/atoms/ProductDescription";
import {
	type ProductListItemFragmentFragment,
	type ReviewItemFragmentFragment,
} from "@/gql/graphql";

const Product = ({ image, price, name, review }: ProductListItemFragmentFragment) => {
	return (
		<>
			<ProductImage src={image} alt={name} />
			<ProductDescription
				title={name}
				price={price}
				review={review as ReviewItemFragmentFragment[]}
			/>
		</>
	);
};

export default Product;
