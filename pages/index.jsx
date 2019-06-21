import Search                                    from '../src/components/Search'
import RepoList                                  from '../src/components/RepoList'
import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector }     from 'react-redux';
import { cleanUserSearch, getCommits, getRepos } from '../src/actions/searchActions';
import Router, { withRouter }                    from 'next/dist/client/router';
import querystring                               from 'querystring';

const Index = props => {
	const {search, sort, order, page } = props.router.query;

	const [_search, setSearch] = useState('');
	const [_sort, setSort] = useState('');
	const [_order, setOrder] = useState('');
	const [_page, setPage] = useState(0);
	const [_searchState, setSearchState] = useState('big');

	let repos = useSelector(state => state.repos.list);
	let count = useSelector(state => state.repos.count);
	let pages = useSelector(state => state.repos.pages);

	const dispatch = useDispatch();
	const boundGetRepos = (user, sort, order, page) => dispatch(getRepos(user, sort, order, page));
	const boundCleanSearch = () => dispatch(cleanUserSearch());

	useEffect( () => {
		if ( Object.entries(props.router.query).length === 0 ) return;
		console.log('aqui')
		loadRepos(search, sort, order, page);
	}, [])

	useEffect( () => {
		if(!search) return;
		console.log('aqui')
		loadRepos(search, sort, order, page);
	}, [ sort, order, page]);

	useEffect( () => {
		if(!search) return;
		console.log('aqui')
		doSearch()
	}, [_sort, _order, _page]);

	useEffect( () => {
		if(!search && count < 1) { //Initial state, nothing to do
			return;
		}
		if(count > 0) { //clean up store before new search
			cleanSearch()
		};
		if(!search) { //navigate back OR clicked on the logo
			return;
		}
		loadRepos(search, sort, order, page);
	}, [search]);

	useEffect( () => {
		if(search) {
			setSearchState('small')
		} else {
			setSearchState('big')
		}
	}, [count])

	function handleSearchChange(e) {
		setSearch(e.target.value);
	};
	function handleSortChange(e) {
		setSort(e.target.value);
	};
	function handleOrderChange(e) {
		setOrder(e.target.value);
	};
	function handlePageChange(page) {
		setPage(page);
	};

	function doSearch() {
		if(!_search) return;
		const params = {
			...(_search && { search: _search }),
			...(_sort && { sort: _sort }),
			...(_order && { order: _order }),
			...(_page && { page: _page })
		}
		const qs = querystring.stringify(params);
		if ( qs.length > 0 ) {
			Router.push(`/?${qs}`, `/?${qs}`, { shallow: true })
		}
	}

	function loadRepos(search, sort, order, page) {
		boundGetRepos(search, sort, order, page)
	}

	function cleanSearch() {
		setSearch('');
		setSort('');
		setOrder('');
		setPage('');
		boundCleanSearch();
	}

	return(
		<div>
			<Search size={_searchState}
					searchValue={_search}
					onSearchChange={handleSearchChange}
					onSearchClick={doSearch}
					onSearchLink={_search && `?search=${_search}` || '/'}
					sortValue={_sort}
					OnSortChange={handleSortChange}
					orderValue={_order}
					OnOrderChange={handleOrderChange}/>
			{(_searchState === 'small') &&
			<RepoList repos={repos}
					  count={count}
					  pages={pages}
					  page={page || 1}
					  query={props.router.query}
					  handlePageChange={handlePageChange}
			/>}
		</div>
	)



}




export default withRouter(Index)
