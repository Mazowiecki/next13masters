/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Collection = {
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type EnumOrderStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'PENDING';

export type Mutation = {
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createReview: Review;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteReview: Review;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateReview: Review;
};


export type MutationCreateOrderArgs = {
  orderItems?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreateOrderItemArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCreateReviewArgs = {
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID']['input'];
  orderItems?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<EnumOrderStatus>;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationUpdateReviewArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type Order = {
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orderItem?: Maybe<Array<Maybe<OrderItem>>>;
  status: EnumOrderStatus;
  total?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type OrderItem = {
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Product>;
  quantity: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  category?: Maybe<Array<Maybe<Category>>>;
  collection?: Maybe<Array<Maybe<Collection>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  review?: Maybe<Array<Maybe<Review>>>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<Maybe<OrderItem>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  review: Review;
  reviews: Array<Review>;
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionArgs = {
  name: Scalars['String']['input'];
};


export type QueryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  filterName?: InputMaybe<Scalars['String']['input']>;
  filterPriceHighToLow?: InputMaybe<Scalars['Boolean']['input']>;
  filterRatingHighToLow?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Review = {
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CreateOrderMutationVariables = Exact<{
  orderItems?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type CreateOrderMutation = { createOrder?: { id: string } | null };

export type CreateOrderItemMutationVariables = Exact<{
  quantity: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
}>;


export type CreateOrderItemMutation = { createOrderItem?: { id: string, quantity: number, orderId?: string | null, product?: { id: string, image: string, name: string, price: number } | null } | null };

export type CreateReviewMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  headline: Scalars['String']['input'];
  content: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateReviewMutation = { createReview: { id: string } };

export type DeleteOrderItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOrderItemMutation = { deleteOrderItem?: { id: string } | null };

export type GetCartByIdQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type GetCartByIdQuery = { order?: { id: string, status: EnumOrderStatus, total?: number | null, orderItem?: Array<{ id: string, orderId?: string | null, quantity: number, updatedAt?: string | null, product?: { ' $fragmentRefs'?: { 'ProductListItemFragmentFragment': ProductListItemFragmentFragment } } | null } | null> | null } | null };

export type GetHomepageCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageCollectionsQuery = { collections?: Array<{ id: string, name?: string | null } | null> | null };

export type GetProductsByCollectionQueryVariables = Exact<{
  collectionName: Scalars['String']['input'];
}>;


export type GetProductsByCollectionQuery = { collection?: { createdAt?: string | null, id: string, name?: string | null, updatedAt?: string | null, product?: Array<{ ' $fragmentRefs'?: { 'ProductListItemFragmentFragment': ProductListItemFragmentFragment } } | null> | null } | null };

export type GetProductByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type GetProductByIdQuery = { product?: { ' $fragmentRefs'?: { 'ProductListItemFragmentFragment': ProductListItemFragmentFragment } } | null };

export type GetProductsByCategoryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsByCategoryQuery = { categories?: Array<{ name?: string | null, id: string, product?: Array<{ ' $fragmentRefs'?: { 'ProductListItemFragmentFragment': ProductListItemFragmentFragment } } | null> | null } | null> | null };

export type GetProductsListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  filterName?: InputMaybe<Scalars['String']['input']>;
  filterPriceHighToLow?: InputMaybe<Scalars['Boolean']['input']>;
  filterRatingHighToLow?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetProductsListQuery = { products?: Array<{ ' $fragmentRefs'?: { 'ProductListItemFragmentFragment': ProductListItemFragmentFragment } } | null> | null };

export type ProductListItemFragmentFragment = { id: string, name: string, image: string, description: string, price: number, review?: Array<{ ' $fragmentRefs'?: { 'ReviewItemFragmentFragment': ReviewItemFragmentFragment } } | null> | null } & { ' $fragmentName'?: 'ProductListItemFragmentFragment' };

export type ReviewItemFragmentFragment = { id: string, name: string, content: string, email: string, headline: string, rating: number, createdAt: string, updatedAt: string } & { ' $fragmentName'?: 'ReviewItemFragmentFragment' };

export type SetOrderItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type SetOrderItemQuantityMutation = { updateOrderItem?: { id: string, quantity: number } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ReviewItemFragmentFragmentDoc = new TypedDocumentString(`
    fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}
    `, {"fragmentName":"ReviewItemFragment"}) as unknown as TypedDocumentString<ReviewItemFragmentFragment, unknown>;
export const ProductListItemFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProductListItemFragment on Product {
  id
  name
  image
  description
  price
  review {
    ...ReviewItemFragment
  }
}
    fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}`, {"fragmentName":"ProductListItemFragment"}) as unknown as TypedDocumentString<ProductListItemFragmentFragment, unknown>;
export const CreateOrderDocument = new TypedDocumentString(`
    mutation CreateOrder($orderItems: [String]) {
  createOrder(orderItems: $orderItems) {
    id
  }
}
    `) as unknown as TypedDocumentString<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateOrderItemDocument = new TypedDocumentString(`
    mutation CreateOrderItem($quantity: Int!, $productId: ID!, $orderId: ID!) {
  createOrderItem(quantity: $quantity, productId: $productId, orderId: $orderId) {
    id
    quantity
    orderId
    product {
      id
      image
      name
      price
    }
  }
}
    `) as unknown as TypedDocumentString<CreateOrderItemMutation, CreateOrderItemMutationVariables>;
export const CreateReviewDocument = new TypedDocumentString(`
    mutation CreateReview($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {
  createReview(
    productId: $productId
    headline: $headline
    content: $content
    rating: $rating
    name: $name
    email: $email
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CreateReviewMutation, CreateReviewMutationVariables>;
export const DeleteOrderItemDocument = new TypedDocumentString(`
    mutation DeleteOrderItem($id: ID!) {
  deleteOrderItem(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteOrderItemMutation, DeleteOrderItemMutationVariables>;
export const GetCartByIdDocument = new TypedDocumentString(`
    query GetCartById($cartId: ID!) {
  order(id: $cartId) {
    id
    status
    total
    orderItem {
      id
      orderId
      quantity
      updatedAt
      product {
        ...ProductListItemFragment
      }
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  image
  description
  price
  review {
    ...ReviewItemFragment
  }
}
fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}`) as unknown as TypedDocumentString<GetCartByIdQuery, GetCartByIdQueryVariables>;
export const GetHomepageCollectionsDocument = new TypedDocumentString(`
    query GetHomepageCollections {
  collections(limit: 3) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<GetHomepageCollectionsQuery, GetHomepageCollectionsQueryVariables>;
export const GetProductsByCollectionDocument = new TypedDocumentString(`
    query GetProductsByCollection($collectionName: String!) {
  collection(name: $collectionName) {
    createdAt
    id
    name
    updatedAt
    product {
      ...ProductListItemFragment
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  image
  description
  price
  review {
    ...ReviewItemFragment
  }
}
fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}`) as unknown as TypedDocumentString<GetProductsByCollectionQuery, GetProductsByCollectionQueryVariables>;
export const GetProductByIdDocument = new TypedDocumentString(`
    query GetProductById($productId: ID!) {
  product(id: $productId) {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  image
  description
  price
  review {
    ...ReviewItemFragment
  }
}
fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}`) as unknown as TypedDocumentString<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductsByCategoryDocument = new TypedDocumentString(`
    query GetProductsByCategory($limit: Int, $offset: Int, $filter: String) {
  categories(limit: $limit, offset: $offset, filter: $filter) {
    name
    id
    product {
      ...ProductListItemFragment
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  image
  description
  price
  review {
    ...ReviewItemFragment
  }
}
fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}`) as unknown as TypedDocumentString<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>;
export const GetProductsListDocument = new TypedDocumentString(`
    query GetProductsList($limit: Int, $offset: Int, $filterName: String, $filterPriceHighToLow: Boolean, $filterRatingHighToLow: Boolean) {
  products(
    limit: $limit
    offset: $offset
    filterName: $filterName
    filterPriceHighToLow: $filterPriceHighToLow
    filterRatingHighToLow: $filterRatingHighToLow
  ) {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  image
  description
  price
  review {
    ...ReviewItemFragment
  }
}
fragment ReviewItemFragment on Review {
  id
  name
  content
  email
  headline
  rating
  createdAt
  updatedAt
}`) as unknown as TypedDocumentString<GetProductsListQuery, GetProductsListQueryVariables>;
export const SetOrderItemQuantityDocument = new TypedDocumentString(`
    mutation SetOrderItemQuantity($id: ID!, $quantity: Int!) {
  updateOrderItem(id: $id, quantity: $quantity) {
    id
    quantity
  }
}
    `) as unknown as TypedDocumentString<SetOrderItemQuantityMutation, SetOrderItemQuantityMutationVariables>;