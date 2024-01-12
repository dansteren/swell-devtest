import Review from '../review/review';
import useFetch from './useFetchHook';
import { Alert, LinearProgress, Rating } from '@mui/material';

export function ReviewsList() {
	const { loading, reviews, error } = useFetch('http://localhost:3333/api/reviews');

	if (loading) return <LinearProgress />;
	if (error) return <Alert severity="error">{error}</Alert>;

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
