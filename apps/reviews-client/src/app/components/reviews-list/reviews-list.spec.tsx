import { act, render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { mockFetch } from '../../../spec/mock/fetch';

beforeEach(() => mockFetch());

describe('ReviewsList', () => {
	it('should render successfully', async () => {
		const { baseElement } = await act(() => render(<ReviewsList />));
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews', async () => {
		await act(() => render(<ReviewsList />));
		const reviewsListElement = screen.getAllByTestId('reviews-list')[0];

		expect(reviewsListElement.children.length).toEqual(3);
	});

	it('should display message if no reviews are found', async () => {
		mockFetch({ empty: true });

		await act(() => render(<ReviewsList />));
		const emptyReviewsListElement = screen.getAllByTestId('reviews-list--empty')[0];

		expect(emptyReviewsListElement).toBeTruthy();
		expect(emptyReviewsListElement).toContainHTML('No Reviews');
	});

	it('should display the review text if provided', async () => {
		await act(() => render(<ReviewsList />));
		const reviewTexts = screen.getAllByTestId('review__text');

		expect(reviewTexts[0].innerHTML).toBeTruthy();
		expect(reviewTexts[2].innerHTML).toBeFalsy();
	});
});
