import { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { BASE_URL } from '../hooks/useBaseUrl';

export const useDataArray = () => {
	const [page, setPage] = useState(1);
	const { data, error, isLoading } = useFetchData(`${BASE_URL}?page=${page}`);

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	return { data, error, isLoading, page, handlePageChange };
};
