import React              from 'react'
import { Provider }       from 'react-redux'
import App, { Container } from 'next/app'
import withRedux          from 'next-redux-wrapper'
import store              from '../src/store';
import { ThemeProvider }  from '@material-ui/styles';
import CssBaseline        from '@material-ui/core/CssBaseline';
import theme              from '../src/theme';

class MyApp extends App {

	componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return { pageProps }
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Container>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</Provider>
			</Container>
		)
	}
}

export default withRedux(store)(MyApp)
