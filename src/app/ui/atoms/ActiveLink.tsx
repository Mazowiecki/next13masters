"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import clsx from "clsx";

type ActiveLinkProps<T extends string> = {
	className?: string;
	activeClassName?: string;
	href: Route<T> | URL;
	children: React.ReactNode;
	exact?: boolean;
};

const ActiveLink = ({
	className = "flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700",
	activeClassName = "!border-blue-500",
	href,
	children,
	exact = false,
}: ActiveLinkProps<string>) => {
	const pathname = usePathname();
	const stringPathname = typeof href === "object" ? href.pathname || "" : href;
	const isActive = exact ? pathname === stringPathname : pathname.includes(stringPathname);

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};

export default ActiveLink;
