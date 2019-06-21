import styled      from 'styled-components';
import React       from 'react';
import SearchInput from './SearchInput';
import Link        from 'next/link';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
  	height:125px;
  	
`;

const SmallSearchInput = styled.div`
	display: flex;
	flex-direction: row;
	align-items:center;
	margin-top: 20px;
	img {
  		width: 117px;
  		height: 30px;
  		margin: 0 20px;
  		cursor: pointer;
  	}
`;

const SortContainer = styled.div`
	margin-left: 160px !important;
	margin-top: 10px !important;
	display: flex;
	flex-direction: row;
`;

const SmallSearchForm = props => {
	const { onChange, value, onSearch, children, ...rest} = props;
	return (
		<Container>
			<SmallSearchInput>
				<Link href="/">
					<img src='../static/logo.png'/>
				</Link>

				<SearchInput width='calc(100vh - 50px)'
							 placeholder="The other dude was not that interesting huh? 🤔"
							 onChange={onChange} value={value}
							 showButton={true}
							 onClick={onSearch}/>

			</SmallSearchInput>
			<SortContainer>
				{children}
			</SortContainer>
		</Container>
	)
}

export default SmallSearchForm
