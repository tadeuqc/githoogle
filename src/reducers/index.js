import { combineReducers } from 'redux';
import ajaxReducer         from '../reducers/ajaxStatusReducer';
import repoReducer         from '../reducers/repoReducer';
import commitReducer       from '../reducers/commitReducer';

const rootReducer = combineReducers({
	ajax   : ajaxReducer,
	repos  : repoReducer,
	commits: commitReducer
});

export default rootReducer;
