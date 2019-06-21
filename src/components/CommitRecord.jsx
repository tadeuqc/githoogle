import { dateTime as formatDate } from '../util/formatters';
import Link                       from 'next/link';
import React                      from 'react';
import styled                     from 'styled-components';

const Container = styled.div` 
	font-family: arial,sans-serif;
	display: flex;
	flex-direction: row;
	margin: 15px 0;
	max-width: 630px;
	h3 {
		margin: 0;
		font-size: 18px;
		line-height: 1.33;
		display: inline-block;
		font-weight: normal;
		color: #1a0dab;
	}
	a {
	    color: #006621;
		font-size: 14px;
		line-height: 1.43;
		text-decoration: none; 
	}
	p {
		font-size: 13px;
		margin: 0;
	}
	div {
		display: flex;
		flex-direction: column;
		height: 80px;
	}
	img {
		border: 1px solid #cccccc;
		border-radius: 50%;
		margin-right: 20px;
		width: 80px;
		height: 80px;
	}
`;

const CommitRecord = props => {
	const { commit } = props
	return (
		<Container>
			<img src={commit.author.avatarUrl} width='50px' height='50px' />
			<div>
				<Link href={commit.htmlUrl}>
					<a><h3>{commit.commit.message.substring(0, 100)}</h3></a>
				</Link>
				<Link href={commit.author.htmlUrl}>
					<a>{commit.author.login}</a>
				</Link>
				<p>This commit was made in {formatDate(commit.commit.author.date)}</p>
			</div>
		</Container>
	)
}

export default CommitRecord;
