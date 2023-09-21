export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount / 100);
};

export const prodOnly = <TParams extends unknown[], TReturn>(
	func: (...args: TParams) => TReturn,
): ((...args: TParams) => TReturn | Promise<unknown[]>) => {
	return (...args: TParams) => {
		if (process.env.NODE_ENV === "production") {
			return func(...args);
		} else {
			return Promise.resolve([]);
		}
	};
};
