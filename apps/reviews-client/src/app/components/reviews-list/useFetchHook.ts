import { useEffect, useState } from 'react';
import { ReviewWithCompanyAndReviewer } from '../review/review';

type ReviewsResponse = {
	reviews: ReviewWithCompanyAndReviewer[];
};

const useFetch = (url: string) => {
	const [loading, setLoading] = useState(true);
	const [reviews, setData] = useState<ReviewWithCompanyAndReviewer[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const response = await fetch(url);
				const json: ReviewsResponse = await response.json();

				setData(json.reviews);
				setLoading(false);
			} catch (error) {
				// Use some logging tool like Sentry/Datadog/LogRocket to log error
				console.log(error);
				setError(
					'Something went wrong while loading the reviews. Our team has been notified, but in the meantime try reloading the page.',
				);
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { reviews, error, loading };
};

export default useFetch;
