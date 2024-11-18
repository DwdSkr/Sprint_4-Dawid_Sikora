import { useState } from 'react';
import CharacterList from './components/template/CharacterList';
import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	Typography,
	AppBar,
	Toolbar,
} from '@mui/material';
import ThemeChange from './components/Switch/Switch';

function App() {
	const [mode, setMode] = useState(false);
	const theme = createTheme({
		palette: mode
			? {
					mode: 'dark',
					background: {
						paper: '#3f3f3f',
						default: '#3f3f3f',
					},
			  }
			: {
					mode: 'light',
					background: {
						paper: '#f3f3f3',
						default: '#f3f3f3',
					},
			  },
	});

	const handleSwitchMode = () => {
		setMode((prev) => !prev);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar
				position='static'
				color='palette.background.paper'
				sx={{ boxShadow: 'none', backgroundImage: 'none' }}
			>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						<Typography sx={{ marginLeft: '20px' }}>Disney APP</Typography>
					</div>
					<div>
						<ThemeChange checked={mode} onClick={handleSwitchMode} />
					</div>
				</Toolbar>
			</AppBar>
			<hr />
			<CharacterList />
		</ThemeProvider>
	);
}

export default App;
