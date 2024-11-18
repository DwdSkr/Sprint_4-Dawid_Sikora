import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('coś nie działa');
				}
				const json = await response.json();
				setData(json);
			} catch (error) {
				console.log('error', error);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
		return () => {
			setIsLoading(false);
		};
	}, [url]);
	return { data, error, isLoading };
};
