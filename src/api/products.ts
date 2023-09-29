import {
	GetHomepageCollectionsDocument,
	type GetHomepageCollectionsQuery,
	GetProductByIdDocument,
	GetProductsByCategoryDocument,
	GetProductsByCollectionDocument,
	type GetProductsByCollectionQuery,
	GetProductsListDocument,
	type TypedDocumentString,
} from "@/gql/graphql";
import { UpperFirst } from "@/utils";

const TAKE = 20;

export async function executeGraphQl<TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as {
		data: TResult;
		errors?: readonly Error[] | null | undefined;
	};

	if (graphqlResponse.errors) {
		console.log("graphqlResponse.errors", graphqlResponse.errors);
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
}

export const getProductsList = async (
	page: number,
	filterPriceHighToLow?: boolean,
	filterRatingHighToLow?: boolean,
) => {
	const offset = (page - 1) * TAKE;

	const graphqlResponse = await executeGraphQl({
		query: GetProductsListDocument,
		variables: {
			limit: TAKE,
			offset,
			filterPriceHighToLow,
			filterRatingHighToLow,
		},
	});

	return graphqlResponse.products ?? [];
};

export const getProductsListLimit = async (limit: number) => {
	const graphqlResponse = await executeGraphQl({
		query: GetProductsListDocument,
		variables: {
			limit: limit,
			offset: undefined,
		},
	});

	return graphqlResponse.products ?? [];
};

export const getProductsListByQuery = async (query: string) => {
	const graphqlResponse = await executeGraphQl({
		query: GetProductsListDocument,
		variables: {
			filterName: query,
			offset: undefined,
			limit: undefined,
		},
	});

	return graphqlResponse.products ?? [];
};

export const getProductsListByCategoryName = async (page: number, categoryName: string) => {
	const offset = (page - 1) * TAKE;

	const graphqlResponse = await executeGraphQl({
		query: GetProductsByCategoryDocument,
		variables: {
			limit: TAKE,
			offset,
			filter: categoryName,
		},
	});

	if (!graphqlResponse.categories?.length) {
		return [];
	}

	return graphqlResponse.categories[0]?.product ?? [];
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphQl({
		query: GetProductByIdDocument,
		variables: {
			productId: id,
		},
	});

	return graphqlResponse.product ?? null;
};

export const getHomepageCollections = async () => {
	const graphqlResponse: GetHomepageCollectionsQuery = await executeGraphQl({
		query: GetHomepageCollectionsDocument,
	});

	return graphqlResponse.collections ?? [];
};

export const getProductsByCollection = async (name: string) => {
	const graphqlResponse: GetProductsByCollectionQuery = await executeGraphQl({
		query: GetProductsByCollectionDocument,
		variables: { collectionName: UpperFirst(name) },
	});

	return graphqlResponse.collection?.product ?? [];
};
