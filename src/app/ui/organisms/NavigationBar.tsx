import React from "react";
import { type Route } from "next";
import ActiveLink from "@ui/atoms/ActiveLink";

const NavigationBar = () => {
	return (
		<nav>
			<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
				<li className="first:pl-4 last:pr-4 lg:px-0">
					<ActiveLink href="/" exact={true}>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products">All</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/categories/t-shirts" as Route}>T-shirts</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/categories/hoodies" as Route}>Hoodies</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/categories/accessories" as Route}>Accessories</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
