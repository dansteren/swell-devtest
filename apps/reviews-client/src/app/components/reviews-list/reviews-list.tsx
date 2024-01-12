import Review from '../review/review';
import useFetch from '../../hooks/useFetch';
import { LinearProgress } from '@mui/material';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
	const { loading, reviews, error } = useFetch('http://localhost:3333/api/reviews');

	if (loading) return <LinearProgress />;
	if (error) return <p>error: {error}</p>;

	return reviews.map((review) => <Review review={review} />);
}

export default ReviewsList;
