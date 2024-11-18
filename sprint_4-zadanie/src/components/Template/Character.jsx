import { Box } from '@mui/system';
import styled from '@mui/system/styled';
import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const StyledImage = styled('div')(() => ({
	width: '100%',
	height: '100px',
	overflow: 'hidden',
	position: 'relative',
}));

const Character = ({ name, image, alt, modal }) => {
	return (
		<Card
			variant='outlined'
			sx={{
				width: '250px',
				height: '220px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '10px',
				border: '3px solid',
				borderColor: 'palette.text.secondary',
				backgroundColor: 'palette.background.default',
			}}
		>
			<StyledImage>
				<Box
					sx={{
						transform: 'scale(0.8) translateY(-20%)',
						width: '100%',
					}}
					component='img'
					src={image}
					alt={alt}
				/>
			</StyledImage>
			<div>
				<Typography variant='h6' align='left'>
					{name}
				</Typography>
			</div>
			<div>
				<Button variant='contained' size='small' onClick={modal}>
					Learn more
				</Button>
			</div>
		</Card>
	);
};
export default Character;
