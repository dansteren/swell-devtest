import { reviews } from './reviews';
import Review from '../review/review';
// import useFetch from '../../hooks/useFetch';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
	// const {loading, reviews, error} = useFetch('http://localhost:3333/api/reviews');

	// if (loading) return <p>loading...</p>;
	// if (error) return <p>error: {error}</p>;

	return reviews.map((review) => <Review review={review} />);
}

export default ReviewsList;
