"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddReviewForm = () => {
	const formStatus = useFormStatus();

	return (
		<>
			<input type="hidden" value="3" name="productId" />
			<label>
				<span className="text-xs text-gray-700">Rating</span>
				<input
					type="number"
					disabled={formStatus.pending}
					required
					className="mt-1 block w-full rounded-md border-gray-300 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
					name="rating"
				/>
			</label>
			<label>
				<span className="text-xs text-gray-700">Review title</span>
				<input
					disabled={formStatus.pending}
					required
					className="mt-1 block w-full rounded-md border-gray-300 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					name="headline"
				/>
			</label>
			<label>
				<span className="text-xs text-gray-700">Review content</span>
				<textarea
					disabled={formStatus.pending}
					required
					className="mt-1 block max-h-48 min-h-[2.5rem] w-full rounded-md border-gray-300 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
					name="content"
				/>
			</label>
			<label>
				<span className="text-xs text-gray-700">Name</span>
				<input
					disabled={formStatus.pending}
					required
					className="mt-1 block w-full rounded-md border-gray-300 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
					name="name"
				/>
			</label>
			<label>
				<span className="text-xs text-gray-700">Email</span>
				<input
					disabled={formStatus.pending}
					required
					className="mt-1 block w-full rounded-md border-gray-300 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
					type="email"
					name="email"
				/>
			</label>
			<button
				disabled={formStatus.pending}
				type="submit"
				className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			>
				Submit review
			</button>
		</>
	);
};
