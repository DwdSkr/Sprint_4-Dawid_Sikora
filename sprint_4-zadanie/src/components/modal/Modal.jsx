import { useCharacterInfo } from './useCharacterInfo';
import Typography from '@mui/material/Typography';
import { Card, CircularProgress, Alert, Modal, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const ModalC = ({ onClose, id, open }) => {
	const { stringData, characterData, error, isLoading } = useCharacterInfo({
		id,
	});

	return (
		<Modal
			sx={{ backdropFilter: 'blur(10px)' }}
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Card
				variant='outlined'
				sx={{
					width: 'auto',
					height: 'auto',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					padding: '10px',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%,-50%)',
				}}
			>
				{isLoading && (
					<div>
						<CircularProgress />
					</div>
				)}
				{error && (
					<div>
						<Alert severity='error'>{error}</Alert>;
					</div>
				)}
				{!isLoading && !error && stringData && (
					<>
						<Avatar
							sx={{ width: 150, height: 150 }}
							src={stringData.imageUrl}
							alt={stringData.name}
						/>
						<Typography variant='h4'>{stringData.name}</Typography>
						<Card
							variant='outlined'
							sx={{
								padding: '10px',
								display: 'flex',
								border: 'none',
							}}
						>
							{Object.values(characterData).map((dataArray, index) => {
								if (dataArray.length != 0) {
									return (
										<Card
											variant='outlined'
											sx={{
												padding: '10px',
												border: 'none',
											}}
											key={`info${index}`}
										>
											<span>
												{Object.keys(characterData)[index].toUpperCase()}
											</span>
											<ul>
												{dataArray.map((el) => {
													return <li key={el}>{el}</li>;
												})}
											</ul>
										</Card>
									);
								}
							})}
						</Card>
					</>
				)}
				<Button variant='contained' onClick={onClose}>
					Close
				</Button>
			</Card>
		</Modal>
	);
};

export default ModalC;
