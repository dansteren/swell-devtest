import Review from '../review/review';
import useFetch from '../../hooks/useFetch';
import { LinearProgress, Rating } from '@mui/material';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
	const { loading, reviews, error } = useFetch('http://localhost:3333/api/reviews');

	if (loading) return <LinearProgress />;
	if (error) return <p>error: {error}</p>;

	if (reviews.length === 0) {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Rating name="no-value" value={null} readOnly />
				<strong>
					<p style={{ color: 'rgba(0,0,0,0.2)' }}>No Reviews</p>
				</strong>
			</div>
		);
	}

	return reviews.map((review) => <Review review={review} />);
}

export default ReviewsList;
