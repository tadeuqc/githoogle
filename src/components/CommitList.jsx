import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import CommitRecord from './CommitRecord';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 125px);
	max-height: calc(100vh - 125px);
	overflow: scroll;
	margin-left:160px;
	padding-top: 10px;
`;

const CommitList = props => {
	const { commits, fetch} = props;
	// const [isFetching, setIsFetching] = useState(false);
	// const [canFetch, setCanFetch] = useState(true);
	// const [stopFetching, setStopFetching] = useState(false);
	//
	// useEffect(() => {
	// 	if (!stopFetching) {setStopFetching(page === pages);} //fix api behavior on last page
	// 	if (stopFetching) {setCanFetch(false)}
	// }, [commits]);
	//
	// useEffect(() => {
	// 	if(!isFetching) return;
	// 	setIsFetching(false)
	// }, [page]);
	//
	// useEffect(() => {
	// 	if (!isFetching || !canFetch) return;
	// 	fetch();
	// }, [isFetching]);

	function handleScroll(e) {
		let element = e.target
		if (element.scrollHeight - element.scrollTop === element.clientHeight) {
			fetch()
		}
	}

	return (
		<Container onScroll={handleScroll}>
			{commits.map(commit => (
				<CommitRecord key={commit.sha} commit={commit} />
			))}
		</Container>);
}

export default CommitList
