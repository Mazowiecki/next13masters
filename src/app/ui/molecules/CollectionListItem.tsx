import React from "react";
import { type Route } from "next";
import Link from "next/link";
import Image from "next/image";

const CollectionListItem = ({ collectionName }: { collectionName: string }) => {
	return (
		<div className="group relative">
			<Link href={`/collections/${collectionName.toLowerCase()}` as Route}>
				<div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white transition group-hover:scale-110 group-hover:opacity-75 sm:h-64">
					<Image height={256} width={256} src="https://picsum.photos/300/300" alt="sdfsdfdssd" />
				</div>
				<h3 className="mt-2 font-bold text-slate-700">{collectionName}</h3>
			</Link>
		</div>
	);
};

export default CollectionListItem;
