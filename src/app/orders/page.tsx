import { currentUser } from "@clerk/nextjs";
import { GetOrdersByUserIdDocument, type Order } from "../../gql/graphql";
import { executeGraphQl } from "@/api/products";

export default async function OrdersPage() {
	const user = await currentUser();
	const userId = user?.id;

	if (!userId) {
		return <p>Brak ID usera</p>;
	}

	const ordersResult = await executeGraphQl({
		query: GetOrdersByUserIdDocument,
		variables: {
			userId,
		},
	});

	const orders = ordersResult.orders as Order[];

	return (
		<div>
			<h1>{user.firstName}&rsquo;s Orders</h1>
			{orders && orders.length === 0 ? (
				<div>No orders found</div>
			) : (
				<ul>
					{orders.map(
						(order: Order) =>
							order.id &&
							order.createdAt && (
								<li key={order.id}>
									{/*<div>{order.orderId}</div>*/}
									<div>
										<time dateTime={order.createdAt}>{order.createdAt}</time>
									</div>
									<div>{order.status}</div>
								</li>
							),
					)}
				</ul>
			)}
		</div>
	);
}
