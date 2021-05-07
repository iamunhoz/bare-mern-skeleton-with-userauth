import { createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		primary: {
			light: '#b0ff57',
			main: '#76ff03',
			dark: '#32cb00',
			contrastText: '#000'
		},
		secondary: {
			light: '#e7ff8c',
			main: '#b2ff59',
			dark: '#7ecb20',
			contrastText: '#000'
		},
		openTitle: '#fbec5d',
		protectedTitle: green['400'],
		type: 'light'
	}
})

export default theme
