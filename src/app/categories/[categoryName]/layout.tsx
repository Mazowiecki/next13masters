import TitleSection from "@ui/molecules/TitleSection";
import { UpperFirst } from "@/utils";

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { categoryName: string };
}) {
	return (
		<>
			<TitleSection>
				<h2 className="text-3xl font-bold tracking-tight text-slate-900">
					{UpperFirst(params.categoryName)}
				</h2>
			</TitleSection>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				{children}
			</section>
		</>
	);
}
