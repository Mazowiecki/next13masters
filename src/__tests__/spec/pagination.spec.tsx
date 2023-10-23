/**
 * @jest-environment jsdom
 */
import React from "react";
import Pagination from "@ui/molecules/Pagination";
import { render } from "@testing-library/react";

describe("Test pagination", () => {
	it("should render length properly", () => {
		const { getByTestId } = render(<Pagination length={10} href="/test" />);
		for (let i = 1; i <= 10; i++) {
			getByTestId(`pagination-link-${i}`);
		}
	});

	it("should render proper href", () => {
		const { getByTestId } = render(<Pagination length={1} href="/test" />);
		const liItem = getByTestId("pagination-link-1");
		const aItem = liItem.querySelector("a");
		expect(aItem).toBeTruthy();
		expect(aItem?.getAttribute("href")).toBe("/test/1");
	});

	it("should not start from 0", () => {
		const { queryByTestId } = render(<Pagination length={1} href="/test" />);
		expect(queryByTestId("pagination-link-0")).toBeNull();
		expect(queryByTestId("pagination-link-1")).toBeTruthy();
	});
});
