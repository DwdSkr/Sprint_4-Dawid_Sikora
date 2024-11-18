import { useFetchData } from '../hooks/useFetchData';
import { BASE_URL } from '../hooks/useBaseUrl';
import { useEffect, useState } from 'react';

export const useCharacterInfo = ({ id }) => {
	const [stringData, setStringData] = useState('');
	const [characterData, setCharacterData] = useState();
	const { data, error, isLoading } = useFetchData(`${BASE_URL}/${id}`);

	useEffect(() => {
		if (data.data) {
			const {
				name,
				allies,
				enemies,
				films,
				shortFilms,
				tvShows,
				videoGames,
				parkAttractions,
				imageUrl,
			} = data.data;
			setStringData({ name, imageUrl });
			setCharacterData({
				allies,
				enemies,
				films,
				shortFilms,
				tvShows,
				videoGames,
				parkAttractions,
			});
		}
	}, [data]);
	return { stringData, characterData, error, isLoading };
};
