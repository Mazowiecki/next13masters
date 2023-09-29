import type { Metadata } from "next";
import TitleSection from "@ui/molecules/TitleSection";
import { UpperFirst } from "@/utils";

export const metadata: Metadata = {
	title: "Products List",
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { collectionName: string };
}) {
	return (
		<>
			<TitleSection>
				<h1 className="text-3xl font-bold tracking-tight text-slate-900">
					{UpperFirst(params.collectionName)}
				</h1>
				<p className="mt-4 max-w-2xl text-base text-slate-700">
					Embrace the summer spirit with our exclusive collection of vibrant and stylish essentials.
					Elevate your productivity and create a refreshing workspace with these limited edition
					items. Hurry, grab them before they are gone!
				</p>
			</TitleSection>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				{children}
			</section>
		</>
	);
}
