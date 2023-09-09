import React from "react";

type ProductImageProps = {
	alt: string;
	src: string;
};

const ProductImage = ({ alt, src }: ProductImageProps) => {
	return <img height={300} width={300} src={src} alt={alt} />;
};

export default ProductImage;
