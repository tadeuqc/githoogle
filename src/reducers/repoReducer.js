import initialState          from '../reducers/initialState';
import * as types                     from '../actions/actionTypes';
import config     from '../../config';

export default (state = initialState.repos, action) => {
	switch (action.type) {
		case types.GET_REPOS_SUCCESS: {
			return {
				...state,
				list: action.payload ? action.payload.items : [],
				count: action.payload ? action.payload.totalCount : 0,
				pages: Math.ceil(action.payload.totalCount / config.app.maxRecords)
			}
		}
		case types.CLEAN_USER_SEARCH_SUCCESS: {
			return {
				...state,
				list: [],
				count: 0,
				pages: 0
			}
		}
		default:
			return state;
	}
}
