"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteItem } from "@/app/cart/actions";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			onClick={() => {
				startTransition(async () => {
					await deleteItem(itemId);
					router.refresh();
				});
			}}
			className="text-red-500 disabled:text-slate-400"
			disabled={isPending}
		>
			Remove
		</button>
	);
};
