/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateOrder($orderItems: [String]) {\n  createOrder(orderItems: $orderItems) {\n    id\n  }\n}": types.CreateOrderDocument,
    "mutation CreateOrderItem($quantity: Int!, $productId: ID!, $orderId: ID!) {\n  createOrderItem(quantity: $quantity, productId: $productId, orderId: $orderId) {\n    id\n    quantity\n    orderId\n    product {\n      id\n      image\n      name\n      price\n    }\n  }\n}": types.CreateOrderItemDocument,
    "mutation CreateReview($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    productId: $productId\n    headline: $headline\n    content: $content\n    rating: $rating\n    name: $name\n    email: $email\n  ) {\n    id\n  }\n}": types.CreateReviewDocument,
    "mutation DeleteOrderItem($id: ID!) {\n  deleteOrderItem(id: $id) {\n    id\n  }\n}": types.DeleteOrderItemDocument,
    "query GetCartById($cartId: ID!) {\n  order(id: $cartId) {\n    id\n    status\n    total\n    orderItem {\n      id\n      orderId\n      quantity\n      updatedAt\n      product {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}": types.GetCartByIdDocument,
    "query GetHomepageCollections {\n  collections(limit: 3) {\n    id\n    name\n  }\n}": types.GetHomepageCollectionsDocument,
    "query GetProductsByCollection($collectionName: String!) {\n  collection(name: $collectionName) {\n    createdAt\n    id\n    name\n    updatedAt\n    product {\n      ...ProductListItemFragment\n    }\n  }\n}": types.GetProductsByCollectionDocument,
    "query GetProductById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductListItemFragment\n  }\n}": types.GetProductByIdDocument,
    "query GetProductsByCategory($limit: Int, $offset: Int, $filter: String) {\n  categories(limit: $limit, offset: $offset, filter: $filter) {\n    name\n    id\n    product {\n      ...ProductListItemFragment\n    }\n  }\n}": types.GetProductsByCategoryDocument,
    "query GetProductsList($limit: Int, $offset: Int, $filterName: String, $filterPriceHighToLow: Boolean, $filterRatingHighToLow: Boolean) {\n  products(\n    limit: $limit\n    offset: $offset\n    filterName: $filterName\n    filterPriceHighToLow: $filterPriceHighToLow\n    filterRatingHighToLow: $filterRatingHighToLow\n  ) {\n    ...ProductListItemFragment\n  }\n}": types.GetProductsListDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  image\n  description\n  price\n  review {\n    ...ReviewItemFragment\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "fragment ReviewItemFragment on Review {\n  id\n  name\n  content\n  email\n  headline\n  rating\n  createdAt\n  updatedAt\n}": types.ReviewItemFragmentFragmentDoc,
    "mutation SetOrderItemQuantity($id: ID!, $quantity: Int!) {\n  updateOrderItem(id: $id, quantity: $quantity) {\n    id\n    quantity\n  }\n}": types.SetOrderItemQuantityDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOrder($orderItems: [String]) {\n  createOrder(orderItems: $orderItems) {\n    id\n  }\n}"): typeof import('./graphql').CreateOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOrderItem($quantity: Int!, $productId: ID!, $orderId: ID!) {\n  createOrderItem(quantity: $quantity, productId: $productId, orderId: $orderId) {\n    id\n    quantity\n    orderId\n    product {\n      id\n      image\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CreateOrderItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateReview($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    productId: $productId\n    headline: $headline\n    content: $content\n    rating: $rating\n    name: $name\n    email: $email\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CreateReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteOrderItem($id: ID!) {\n  deleteOrderItem(id: $id) {\n    id\n  }\n}"): typeof import('./graphql').DeleteOrderItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCartById($cartId: ID!) {\n  order(id: $cartId) {\n    id\n    status\n    total\n    orderItem {\n      id\n      orderId\n      quantity\n      updatedAt\n      product {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCartByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHomepageCollections {\n  collections(limit: 3) {\n    id\n    name\n  }\n}"): typeof import('./graphql').GetHomepageCollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsByCollection($collectionName: String!) {\n  collection(name: $collectionName) {\n    createdAt\n    id\n    name\n    updatedAt\n    product {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').GetProductsByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').GetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsByCategory($limit: Int, $offset: Int, $filter: String) {\n  categories(limit: $limit, offset: $offset, filter: $filter) {\n    name\n    id\n    product {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').GetProductsByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsList($limit: Int, $offset: Int, $filterName: String, $filterPriceHighToLow: Boolean, $filterRatingHighToLow: Boolean) {\n  products(\n    limit: $limit\n    offset: $offset\n    filterName: $filterName\n    filterPriceHighToLow: $filterPriceHighToLow\n    filterRatingHighToLow: $filterRatingHighToLow\n  ) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').GetProductsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  image\n  description\n  price\n  review {\n    ...ReviewItemFragment\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItemFragment on Review {\n  id\n  name\n  content\n  email\n  headline\n  rating\n  createdAt\n  updatedAt\n}"): typeof import('./graphql').ReviewItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SetOrderItemQuantity($id: ID!, $quantity: Int!) {\n  updateOrderItem(id: $id, quantity: $quantity) {\n    id\n    quantity\n  }\n}"): typeof import('./graphql').SetOrderItemQuantityDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
