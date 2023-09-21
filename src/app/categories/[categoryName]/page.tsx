import React from "react";

export default async function SingleProductPage({ params }: { params: { categoryName: string } }) {
	return <>{params.categoryName}</>;
}
