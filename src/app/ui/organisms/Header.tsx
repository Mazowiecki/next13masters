import React from "react";
import NavigationBar from "@ui/organisms/NavigationBar";

const Header = () => {
	return (
		<nav className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
				<NavigationBar />
				Search
			</div>
		</nav>
	);
};

export default Header;
