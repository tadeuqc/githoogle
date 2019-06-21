import * as types                     from '../actions/actionTypes';
import { ajaxFailure, beginAjaxCall } from '../actions/ajaxStatusAction';
import { getUserRepos, getRepoCommits }   from '../api/searchApi';


const getReposSuccess = data => ({
	type: types.GET_REPOS_SUCCESS,
	payload: data
});

export const getRepos = (user, sort, order, page) => async dispatch => {
	dispatch(beginAjaxCall());
	try {
		const { data } = await getUserRepos(user, sort, order, page);
		dispatch(getReposSuccess(data));
	} catch (error) {
		dispatch(ajaxFailure(error));
	}
};

const getCommitsSuccess = (data,headers) => ({
	type: types.GET_COMMITS_SUCCESS,
	payload: data,
	headers: headers
});

export const getCommits = (user, repo, author, page) => async dispatch => {
	dispatch(beginAjaxCall());
	try {
		const { data, headers } = await getRepoCommits(user, repo, author, page);
		dispatch(getCommitsSuccess(data, headers));
	} catch (error) {
		dispatch(ajaxFailure(error));
	}
};

const cleanUserSearchSuccess = () => ({
	type: types.CLEAN_USER_SEARCH_SUCCESS,
});

export const cleanUserSearch = () => async dispatch => {
	dispatch(cleanUserSearchSuccess());
}

const cleanCommitsSuccess = () => ({
	type: types.CLEAN_COMMITS_SUCCESS,
});

export const cleanCommits = () => async dispatch => {
	dispatch(cleanCommitsSuccess());
}
