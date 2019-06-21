import initialState from '../reducers/initialState';
import * as types   from '../actions/actionTypes';

export default (state = initialState.repos, action) => {
	switch ( action.type ) {
		case types.GET_COMMITS_SUCCESS: {
			const pages = action.headers && action.headers.link && action.headers.link.match(/&page=\d*/g);
			const paging = pages && pages.map(i => (i.replace(/&page=/, '')))
			return {
				...state,
				list   : action.payload ? action.payload : [],
				headers: action.headers ? action.headers : '',
				nextPage  : paging ? paging[0] : 0,
				pages  : paging ? paging[1] : 0
			}
		}
		case types.CLEAN_COMMITS_SUCCESS: {
			return {
				...state,
				list : [],
				headers: '',
				nextPage: 0,
				pages: 0
			}
		}
		default:
			return state;
	}
}
