const TAKE = 20;

export const getProductsList = async (page: number) => {
	const offset = (page - 1) * TAKE;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${TAKE}&offset=${offset}`,
	);
	return res.json();
};

export const getProductById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	return res.json();
};
