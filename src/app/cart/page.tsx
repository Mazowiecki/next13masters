import { redirect } from "next/navigation";
import { getCartFromCookie } from "@/api/cart";
import { formatMoney } from "@/utils";
import { IncrementProductQuantity } from "@/app/cart/IncrementProductQuantity";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { type Order } from "@/gql/graphql";

export default async function CartPage() {
	const cart = (await getCartFromCookie()) as Order;
	if (!cart) {
		redirect("/");
	}
	return (
		<div className="mt-10">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{cart?.orderItem?.map(
						(item) =>
							item?.product && (
								<tr key={item.id}>
									<td>{item.product?.name}</td>
									<td>
										<IncrementProductQuantity itemId={item.id} quantity={item.quantity} />
									</td>
									<td>{formatMoney(item.product?.price)}</td>
									<td>{formatMoney(Number(cart.total))}</td>
									<td>
										<RemoveButton itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
