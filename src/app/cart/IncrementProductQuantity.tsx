"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";
export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	return (
		<form>
			<button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
				data-testid="decrement"
				className="vorder ml-2 h-8 w-8 bg-slate-50"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				data-testid="increment"
				className="vorder ml-2 h-8 w-8 bg-slate-50"
			>
				+
			</button>
		</form>
	);
};
