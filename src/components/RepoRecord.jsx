import React      from 'react';
import styled     from 'styled-components';
import { dateTime as formatDate } from '../util/formatters';
import Link                   from 'next/link';

const RepoContainer = styled.div`
	font-family: arial,sans-serif;
	display: flex;
	flex-direction: column;
	margin: 10px 0;
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
`;

const Details = styled.div`
	font-size: 13px;
	color: dimgray;
	display: flex;
	flex-direction: row;
	span {
		margin-right: 10px;
	}
`;

const RepoRecord = props => {
	const { repo } = props;
	return (
		<RepoContainer>
			<Link href={`commits?user=${repo.owner.login}&repo=${repo.name}`}>
				<a><h3>{repo.name}</h3></a>
			</Link>
			<Link href={repo.htmlUrl}>
				<a>{repo.htmlUrl}</a>
			</Link>
			<p>{repo.description}</p>
			<Details>
				<span><b>language:</b> {repo.language}</span>
				<span><b>forks:</b> {repo.forks}</span>
				<span><b>stars:</b> {repo.stargazersCount}</span>
			</Details>
			<Details>
				<span><b>last updated:</b> {formatDate(repo.updatedAt)}</span>
				<span><b>watchers:</b> {repo.watchers}</span>
			</Details>
		</RepoContainer>
	)
};

export default RepoRecord

