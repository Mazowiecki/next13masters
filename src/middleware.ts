/* eslint-disable import/no-default-export */

import { authMiddleware } from "@clerk/nextjs";

const authMiddlewareConfig = authMiddleware({
	publicRoutes: [
		/^\/$/,
		/^\/search/,
		/^\/cart/,
		/^\/categories/,
		/^\/categories\/(.*)/,
		/^\/collections/,
		/^\/collections\/(.*)/,
		/^\/product/,
		/^\/product\/(.*)/,
		/^\/products/,
		/^\/products\/(.*)/,
	],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddlewareConfig;
