import { Pagination } from '@mui/material';
const PaginationComponent = ({ page, pageCount, onChange }) => {
	if (page === 1) {
		return (
			<Pagination
				count={pageCount}
				page={page}
				onChange={onChange}
				size='large'
				hidePrevButton
			/>
		);
	}
	if (page === pageCount) {
		return (
			<Pagination
				count={pageCount}
				page={page}
				onChange={onChange}
				size='large'
				hideNextButton
			/>
		);
	}

	return (
		<Pagination
			count={pageCount}
			page={page}
			onChange={onChange}
			size='large'
		/>
	);
};
export default PaginationComponent;
