import { useEffect, useState } from 'react';
import { ReviewWithCompanyAndReviewer } from '../components/review/review';

type ReviewsResponse = {
	reviews: ReviewWithCompanyAndReviewer[];
};

const useFetch = (url: string) => {
	const [reviews, setData] = useState<ReviewWithCompanyAndReviewer[]>([]);
	const [error, setError] = useState('null');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const response = await fetch(url);
				const json: ReviewsResponse = await response.json();

				setData(json.reviews);
				setLoading(false);
			} catch (error) {
				setError('something went wrong:' + error);
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { reviews, error, loading };
};

export default useFetch;
