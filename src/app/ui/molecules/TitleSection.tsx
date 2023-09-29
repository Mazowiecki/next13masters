import React from "react";

type CategoriesHeaderProps = {
	children: React.ReactNode;
};

const TitleSection = ({ children }: CategoriesHeaderProps) => {
	return (
		<div className="bg-slate-50">
			<div className="mx-auto max-w-7xl px-8 py-12">{children}</div>
		</div>
	);
};

export default TitleSection;
