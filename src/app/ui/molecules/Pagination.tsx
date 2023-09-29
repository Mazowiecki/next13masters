import React from "react";
import { type Route } from "next";
import ActiveLink from "@ui/atoms/ActiveLink";

type PaginationProps = {
	length: number;
	href: string;
	searchParams?: string;
};

const Pagination: React.FC<PaginationProps> = ({ length, href, searchParams }) => {
	return (
		<nav
			className="mt-auto flex items-center justify-center border-t border-slate-200 px-4"
			aria-label="pagination"
		>
			<ul className="-mt-px flex">
				{Array.from({ length: length }, (_, index) => {
					return (
						<li key={index}>
							<ActiveLink
								href={`${href}/${index + 1}` as Route}
								searchParams={searchParams}
								className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
							>
								{index + 1}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
