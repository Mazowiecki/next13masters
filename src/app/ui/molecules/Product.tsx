import React from "react";
import ProductImage from "@/app/ui/atoms/ProductImage";
import ProductDescription from "@/app/ui/atoms/ProductDescription";
import { type ProductListItemFragmentFragment, ReviewItemFragmentFragment } from "@/gql/graphql";

const Product = ({ image, price, name, review }: ProductListItemFragmentFragment) => {
	return (
		<>
			{image && name && <ProductImage src={image} alt={name} />}
			{name && price && review && (
				<ProductDescription
					title={name}
					price={price}
					review={review as ReviewItemFragmentFragment[]}
				/>
			)}
		</>
	);
};

export default Product;
