"use client";
import { useEffect, useState } from "react";
import { type Route } from "next";
import { useRouter } from "next/navigation";

const Search = () => {
	const { push } = useRouter();
	const [searchValue, setSearchValue] = useState<string>("");

	useEffect(() => {
		if (searchValue.length > 1) {
			const timer = setTimeout(() => {
				const encodedValue = searchValue.replace(/ /g, "%20");
				push(`/search?query=${encodedValue}` as Route);
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [searchValue, push]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<>
			<div className="w-full max-w-lg lg:max-w-xs">
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="h-5 w-5 text-slate-300"
							aria-hidden="true"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</svg>
					</div>
					<input
						className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
						placeholder="Search"
						type="search"
						name="search"
						onChange={handleInputChange}
						value={searchValue}
					/>
				</div>
			</div>
		</>
	);
};

export default Search;
