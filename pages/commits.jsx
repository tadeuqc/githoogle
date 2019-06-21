import Router, { withRouter }         from 'next/router'
import React, { useEffect, useState } from 'react';
import { getCommits }                 from '../src/actions/searchActions';
import querystring                    from 'querystring';
import CommitsHeader                  from '../src/components/CommitsHeader';
import CommitList                     from '../src/components/CommitList';
import { useDispatch, useSelector }   from 'react-redux'

const Commits = props => {
	const [search, setSearch] = useState('');
	const [_commits, setCommits] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [canFetch, setCanFetch] = useState(true);
	const [stopFetching, setStopFetching] = useState(false);

	const { user, repo, author } = props.router.query;
	const dispatch = useDispatch();
	const boundGetCommits = (user, repo, author, page) => dispatch(getCommits(user, repo, author, page));

	let commits = useSelector(state => state.commits.list);
	let pages = useSelector(state => state.commits.pages);
	let nextPage = useSelector(state => state.commits.nextPage);

	useEffect(() => {
		if ( Object.entries(props.router.query).length === 0 ) return;
		loadCommits(user, repo, author, 1);
	}, []);

	useEffect(() => {
		if ( !stopFetching ) {
			setStopFetching(nextPage === pages);
		}
		if ( stopFetching ) {
			setCanFetch(false)
		}
		setCommits(_commits.concat(commits));
		setIsFetching(false);
	}, [commits]);

	useEffect(() => {
		if ( !author ) return;
		setCommits([]);
		loadCommits(user, repo, author, 1);
		setStopFetching(false);
		setCanFetch(true)
	}, [author]);

	function loadCommits(user, repo, author, page) {
		if ( isFetching || !canFetch ) return;
		setIsFetching(true);
		return boundGetCommits(user, repo, author, page)
	}

	function loadMore() {
		loadCommits(user, repo, author, nextPage);
	}

	function doSearch() {
		const qs = querystring.stringify({ user: user, repo: repo, author: search });
		if ( qs.length > 0 ) {
			Router.push(`/commits?${qs}`, `/commits?${qs}`, { shallow: true })
		}
	}

	function handleSearchChange(event) {
		setSearch(event.target.value)
	}

	return (
		<div>
			<CommitsHeader user={user} repo={repo} onChange={handleSearchChange} value={search} onSearch={doSearch}/>
			<CommitList commits={_commits} fetch={loadMore}/>
		</div>
	)
};

export default withRouter(Commits);

