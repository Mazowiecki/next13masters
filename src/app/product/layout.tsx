import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Products List",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			{children}
		</div>
	);
}
