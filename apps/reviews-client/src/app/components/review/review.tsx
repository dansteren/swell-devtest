import { Card, Grid, Rating } from '@mui/material';
import LocationIcon from '@mui/icons-material/LocationOn';

export interface ReviewWithCompanyAndReviewer {
	id: string;
	reviewerId: string;
	companyId: string;
	user: {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
	};
	company: {
		id: string;
		name: string;
	};
	reviewText: string | null;
	rating: number | null;
	createdOn: string;
}

export interface ReviewProps {
	review: ReviewWithCompanyAndReviewer;
}

export function Review(props: ReviewProps) {
	const review = props.review;
	const reviewer = `${review.user.firstName} ${review.user.lastName}`;
	const date = new Date(review.createdOn).toLocaleDateString();
	const companyName = review.company.name;

	return (
		<Card data-testid="review" sx={{ margin: '16px 0px' }}>
			<Grid container>
				<Grid item xs={12} md={3} sx={{ padding: '16px' }}>
					<div>
						<strong data-testid="review__reviewer">{reviewer}</strong>
					</div>
					<Rating data-testid="review__rating" value={review.rating} readOnly />
					<div data-testid="review__date">{date}</div>
					<br />
					<div data-testid="review__company" style={{ display: 'flex' }}>
						<LocationIcon />
						{companyName}
					</div>
				</Grid>
				<Grid item data-testid="review__text" xs={12} md={9} sx={{ padding: '16px' }}>
					{review.reviewText}
				</Grid>
			</Grid>
		</Card>
	);
}

export default Review;
