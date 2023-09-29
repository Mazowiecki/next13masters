import React from "react";
import Image from "next/image";

type ProductImageProps = {
	alt: string;
	src: string;
};

const ProductImage = ({ alt, src }: ProductImageProps) => {
	return (
		<div className="rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				height={256}
				width={256}
				src={src}
				alt={alt}
				className="h-[256px] w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};

export default ProductImage;
