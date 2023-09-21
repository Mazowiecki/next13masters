import ProductList from "@ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { type ProductProps } from "@ui/molecules/Product";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = (await getProductsList(1)) as ProductProps[];
	await sleep(5000);
	return <ProductList products={products.slice(-4)} />;
};
