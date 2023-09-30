import React from "react";
import { type Route } from "next";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import NavBar from "@ui/organisms/NavBar";
import Search from "@ui/molecules/Search";
import { getCartFromCookie } from "@/api/cart";

export async function Header() {
	const cart = await getCartFromCookie();
	const countItems = cart?.orderItem?.length;
	return (
		<section className="sm:pt-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 pt-12 sm:px-6 lg:max-w-7xl">
			<nav className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<NavBar />
					<div className="flex items-center gap-2">
						<Search />
						<Link href={"/cart" as Route}>
							<div className="ml-auto flex h-full items-center text-slate-500 lg:ml-4">
								<ShoppingBag /> <span className="ml-2 text-sm font-medium ">{countItems}</span>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</section>
	);
}

export default Header;
