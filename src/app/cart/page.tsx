import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs";
import { getCartFromCookie } from "@/api/cart";
import { formatMoney } from "@/utils";
import { IncrementProductQuantity } from "@/app/cart/IncrementProductQuantity";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { type Order, UpdateOrderDocument } from "@/gql/graphql";
import { executeGraphQl } from "@/api/products";

export default async function CartPage() {
	const cart = (await getCartFromCookie()) as Order;
	const user = await currentUser();
	const userId = user?.id;

	if (!cart) {
		redirect("/");
	}

	if (userId && !cart?.userId) {
		await executeGraphQl({
			query: UpdateOrderDocument,
			variables: {
				updateOrderId: cart.id,
				userId,
			},
		});
		revalidatePath("/cart");
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
			<div className="mt-10 grid grid-cols-2">
				<div></div>
				<button
					type="submit"
					disabled={!cart?.orderItem?.length || !cart.userId}
					className="w-full rounded border border-transparent bg-blue-500 px-6 py-3 font-medium text-slate-50 hover:bg-blue-600 disabled:bg-gray-300"
				>
					Checkout
				</button>
			</div>
		</div>
	);
}
