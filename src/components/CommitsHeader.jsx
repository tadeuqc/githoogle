import styled      from 'styled-components';
import Link        from 'next/link';
import React       from 'react';
import SearchInput from './SearchInput';
import Button      from '@material-ui/core/Button';


const Control = styled.div` 
	display: flex;
	flex-direction: row;
	align-items:center;
	width: 100%;
	min-height: 130px;
	background-color: #fafbfc;
	border-bottom: 1px solid #e1e4e8;
	img {
		width: 117px;
		height: 30px;
		margin: 0 20px;
		cursor: pointer;
	}
	h2 {
		margin: 0;
		color: #0366d6;
		font-size: 18px;
		line-height: 26px;
		font-weight: 400;
		a {
			text-decoration: none;
			b {
				font-weight: 600;
			}
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		margin-top: 16px;
	}
	
`;
const CommitsHeader = props => {
	const {user, repo, onChange, value, onSearch} = props;
	function handleSearch() {
		onSearch(1);
	}
	return (
		<Control>
				<Link href="/">
					<img src='../static/grey-logo.png'/>
				</Link>
			<div className='right'>
				<h2>
					<a>{user}</a> /
					<a><b>{repo}</b></a>
				</h2>
				<SearchInput width='calc(100vh - 50px)'
							 placeholder="Looking for the criminal on the buggy commit? Let me know!"
							 onChange={onChange} value={value} onClick={handleSearch} showButton={true}
				/>
			</div>

		</Control>
	);
}

export default CommitsHeader
