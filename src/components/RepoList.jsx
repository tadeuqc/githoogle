import styled                         from 'styled-components';
import Typography                     from '@material-ui/core/Typography';
import RepoRecord                     from './RepoRecord';
import React, { useEffect, useState } from 'react'
import Paginator                      from './Paginator';
import config                         from '../../config';

const RepoListContainer = styled.div` 
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 125px);
	max-height: calc(100vh - 125px);
	overflow: scroll;
	margin-left: 160px;
	padding-top: 10px;
`;
const FunnyCounter = styled(Typography)`
	font-family: arial,sans-serif;
	font-size: 11px;
`;

const UnfunnyJokes = [
	'(Have you ever seen google being so... hmm precise? 😏 yes? 😳)',
	'(🤫 shhh, dont tell them!)',
	'(If you come to think, its probably impossible to read all this code!🤔)',
	'(Have you noticed this funny (or not) jokes changes? 😊)',
	'(If this is not getting me the job, nothing will!😒)',
	'(You saw the paginator down there right? That was quite a job! 😅)'
];

//Testing new React Hooks just for fun.
const RepoList = props => {
	const [joke, setJoke] = useState('');
	const { repos, count, page, pages, query, handlePageChange } = props;

	useEffect(() => {
		setJoke(UnfunnyJokes[Math.floor(Math.random() * 5)])
	}, []);

	return (
		<RepoListContainer>
			<Typography variant="body2" color="textSecondary" align="left">
				{`${(page > 1) ? 'Page ' + page + ' of precisely ' : 'Precisely'} ${count} records  ̶s̶t̶o̶l̶e̶n̶ retrieved from Github! ${joke}`}
			</Typography>
			{repos && repos.map(repo => (
				<RepoRecord repo={repo} key={repo.id}/>
			))}
			<Paginator
				show={count > 0}
				pages={pages}
				page={page}
				maxPages={config.app.maxPages}
				query={query}
				handlePageChange={handlePageChange}/>
		</RepoListContainer>
	)
};

export default RepoList
