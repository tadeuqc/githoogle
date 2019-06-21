import React           from 'react';
import styled          from 'styled-components';
import SortControl     from './SortControl';
import BigSearchForm   from './BigSearchForm';
import SmallSearchForm from './SmallSearchForm';

const SearchPage = styled.div`
	display: flex;
	justify-content:${props => (props.size === 'big') ? 'center' : 'flex-start'};
  	align-items:${props => (props.size === 'big') ? 'center' : 'flex-start'};
	min-height: ${props => (props.size === 'big') ? 'calc(100vh - 16px)' : '125px'};
	border-bottom: ${props => (props.size === 'big') ? 'none' : '1px solid rgba(223,225,229,1)'};
`;

const Search = props => {
	const { size, searchValue, onSearchChange, onSearchClick, onSearchLink, sortValue, OnSortChange, orderValue, OnOrderChange} = props;

	return (
		<SearchPage size={size}>
			{(size === 'big')
				? <BigSearchForm  onChange={onSearchChange} value={searchValue}
								  onSearch={onSearchClick}
								  onSearchUrl={onSearchLink} />
				: <SmallSearchForm onChange={onSearchChange} value={searchValue}
								   onSearch={onSearchClick}>
					<SortControl label='Sort By'
								 value={sortValue}
								 onChange={OnSortChange}
								 items={[
									 {text:'Stars', value:'stars'},
									 {text:'Forks', value:'forks'},
									 {text:'Updated', value:'updated'}
								 ]} />
					<SortControl
								 label='Order By'
								 value={orderValue}
								 onChange={OnOrderChange}
								 items={[
									 {text:'Ascending', value:'asc'},
									 {text:'Descending', value:'desc'}
								 ]} />
				</SmallSearchForm>}
		</SearchPage>
	);
}

export default Search;
