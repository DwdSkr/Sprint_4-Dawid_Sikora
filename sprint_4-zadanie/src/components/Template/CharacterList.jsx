import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useDataArray } from './useDataArray';
import Character from './Character';
import ModalC from '../modal/Modal';
import Grid from '@mui/system/Grid';
import { Paper, CircularProgress, Alert } from '@mui/material';
import PaginationComponent from './Pagination';

const CharacterList = () => {
	const { data, error, isLoading, page, handlePageChange } = useDataArray();
	const [isModalShown, setIsModalShown] = useState(false);
	const [characterId, setCharacterId] = useState(null);
	const showModal = (id) => {
		setCharacterId(id);
		setIsModalShown(true);
	};
	const closeModal = () => {
		setCharacterId(null);
		setIsModalShown(false);
	};
	const modal = createPortal(
		<ModalC open={isModalShown} onClose={closeModal} id={characterId} />,
		document.body
	);

	if (isLoading) {
		return <CircularProgress />;
	}
	if (error) {
		return <Alert severity='error'>{error}</Alert>;
	}
	if (!Array.isArray(data.data)) {
		return <p>Przetwarzam dane</p>;
	}
	if (Array.isArray(data.data)) {
		return (
			<>
				<Paper
					variant='otline'
					square
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Grid container spacing={2} sx={{ justifyContent: 'center' }}>
						{data.data.map((character, index) => {
							return (
								<Character
									key={index}
									name={character.name}
									image={character.imageUrl}
									alt={character.name}
									modal={() => showModal(character._id)}
								/>
							);
						})}
					</Grid>
					<div>
						<PaginationComponent
							page={page}
							pageCount={data.info.totalPages}
							onChange={handlePageChange}
						/>
					</div>
				</Paper>
				{isModalShown && modal}
			</>
		);
	}
};
export default CharacterList;
