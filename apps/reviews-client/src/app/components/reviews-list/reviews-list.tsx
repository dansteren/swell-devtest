import Review from '../review/review';
import useFetch from './useFetchHook';
import { Alert, LinearProgress, Rating } from '@mui/material';

export function ReviewsList() {
	const { loading, reviews, error } = useFetch('http://localhost:3333/api/reviews');

	if (loading) return <LinearProgress data-testid="reviews-list--loading" />;
	if (error)
		return (
			<Alert data-testid="reviews-list--error" severity="error">
				{error}
			</Alert>
		);

	if (reviews.length === 0) {
		return (
			<div
				data-testid="reviews-list--empty"
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<Rating name="no-value" value={null} readOnly />
				<strong>
					<p style={{ color: 'rgba(0,0,0,0.2)' }}>No Reviews</p>
				</strong>
			</div>
		);
	}

	return (
		<div data-testid="reviews-list">
			{reviews.map((review) => (
				<Review review={review} key={review.id} />
			))}
		</div>
	);
}

export default ReviewsList;
