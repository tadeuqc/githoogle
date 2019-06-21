import React                                from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet }                 from 'styled-components'
import { ServerStyleSheets }                from '@material-ui/styles';
import theme                                from '../src/theme';

export default class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const sheets = new ServerStyleSheets();

		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{initialProps.styles}
						{sheets.getStyleElement()}
						{sheet.getStyleElement()}

					</React.Fragment>
				)
			}
		}
		finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<html lang="en">
			<Head>
				<meta charSet="utf-8"/>
				{/* Use minimum-scale=1 to enable GPU rasterization */}
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				{/* PWA primary color */}
				<meta name="theme-color" content={theme.palette.primary.main}/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
			</html>
		);
	}
}
