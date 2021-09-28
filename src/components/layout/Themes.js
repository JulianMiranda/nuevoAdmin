export const darkTheme = {
	palette: {
		primary: {
			main: '#90caf9',
		},
		type: 'dark', // Switching the dark mode on is a single property value change.
	},
};

export const lightTheme = {
	palette: {
		primary: {
			main: '#40A649',
		},
		secondary: {
			light: '#40DD49',
			main: '#40A649',
			dark: '#407F49',
			contrastText: '#fff',
		},
		background: {
			default: '#fcfcfe',
		},
	},
	shape: {
		borderRadius: 10,
	},
	overrides: {
		RaMenuItemLink: {
			root: {
				borderLeft: '3px solid #fff',
			},
			active: {
				borderLeft: '3px solid #40A649',
			},
		},
		MuiPaper: {
			elevation1: {
				boxShadow: 'none',
			},
			root: {
				border: '1px solid #e0e0e3',
				backgroundClip: 'padding-box',
			},
		},
		MuiButton: {
			contained: {
				backgroundColor: '#fff',
				color: '#00000',
				boxShadow: 'none',
			},
		},
		MuiAppBar: {
			colorSecondary: {
				color: '#808080',
				backgroundColor: '#fff',
			},
		},
		MuiLinearProgress: {
			colorPrimary: {
				backgroundColor: '#f5f5f5',
			},
			barColorPrimary: {
				backgroundColor: '#d7d7d7',
			},
		},
		MuiFilledInput: {
			root: {
				backgroundColor: 'rgba(0, 0, 0, 0.04)',
				'&$disabled': {
					backgroundColor: 'rgba(0, 0, 0, 0.04)',
				},
			},
		},
	},
};
