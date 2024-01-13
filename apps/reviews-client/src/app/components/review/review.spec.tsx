import { render, screen } from '@testing-library/react';
import Review from './review';

const review = {
	id: '70eafa74-31ac-4e3e-ac11-79c06b25ec29',
	reviewerId: '2625f5b9-d6fc-443c-a5ca-e438ffc959ca',
	companyId: '3880e9ff-036a-4a16-9fd5-957e2c29bb2b',
	reviewText: 'Praesent blandit lacinia erat.',
	rating: 5,
	createdOn: '2022-08-30T15:59:19Z',
	user: {
		id: '2625f5b9-d6fc-443c-a5ca-e438ffc959ca',
		firstName: 'Nicki',
		lastName: 'Shyre',
		email: 'nshyre17@instagram.com',
	},
	company: {
		id: '3880e9ff-036a-4a16-9fd5-957e2c29bb2b',
		name: 'Russel, Orn and Jacobson',
	},
};

describe('Review', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Review review={review} />);
		expect(baseElement).toBeTruthy();
	});

	it('includes the reviewers full name', () => {
		render(<Review review={review} />);
		const reviewerElement = screen.getAllByTestId('review__reviewer')[0];
		expect(reviewerElement.innerHTML).toEqual(review.user.firstName + ' ' + review.user.lastName);
	});

	it('includes the company name', () => {
		render(<Review review={review} />);
		const companyElement = screen.getAllByTestId('review__company')[0];
		expect(companyElement.innerHTML).toEqual(review.company.name);
	});

	it('includes the review date', () => {
		render(<Review review={review} />);
		const dateElement = screen.getAllByTestId('review__date')[0];
		expect(dateElement.innerHTML).toEqual('8/30/2022');
	});

	it('includes the review text', () => {
		render(<Review review={review} />);
		const ratingElement = screen.getAllByTestId('review__rating')[0];
		expect(ratingElement.getAttribute('aria-label')).toEqual('5 Stars');
	});

	it('includes the review text', () => {
		render(<Review review={review} />);
		const reviewTextElement = screen.getAllByTestId('review__text')[0];
		expect(reviewTextElement.innerHTML).toEqual(review.reviewText);
	});
});
