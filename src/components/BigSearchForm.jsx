import styled      from 'styled-components';
import React       from 'react';
import SearchInput from './SearchInput';
import Link        from 'next/link';
import Button      from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
  	align-items:center;
  	width:550px;
  	height:320px;
  	h4 {
  		margin:0;
  		padding:0;
  		color: gray;
  	}
  	img {
  		width: 360px;
  		height: 92px;
  	}
`;

const BigSearchForm = props => {
	const { onChange, value, onSearch, onSearchUrl, ...rest} = props;
	return (
		<Container>
			<img src='../static/logo.png'/>
			<h4>A funny way to stalk other people's code on GitHub that does NOT look like google!</h4>
			<SearchInput width='calc(100vh - 100px)'
						 placeholder="Type in the ̶v̶i̶c̶t̶i̶m̶ GitHub's user to see his repos"
						 onChange={onChange} value={value}
						 showButton={false}/>
			<Link href={onSearchUrl}>
				<Button variant="contained">Search</Button>
			</Link>
			<Typography variant="body2" color="textSecondary" align="center">
				{'Made with (short) ⌛️ and (lots of) ❤️ by '}
				<Link href="https://github.com/tadeuqc">
					<a>tadeuqc</a>
				</Link>
			</Typography>
		</Container>
	)
}

export default BigSearchForm
