import factory     from '../api/factoryApi';
import querystring from 'querystring';
import config     from '../../config';

export const getUserRepos = async (user, sort, order, page) => {
	const params = {
		...(sort && {sort: sort}),
		...(order && {order: order}),
		...(page && {page: page}),
		...(config.app.maxRecords && {per_page: config.app.maxRecords})
	};
	const qs = querystring.stringify( params );
	return await factory().get(`search/repositories?q=user:${user}${qs && '&' + qs}`)
}


export const getRepoCommits = async (user, repo, author, page) => {
	const params = {
		...(author && {author: author}),
		...(config.app.maxRecords && {per_page: config.app.maxRecords}),
		...(page && {page: page}),
	};
	const qs = querystring.stringify( params );
	return await factory().get(`repos/${user}/${repo}/commits${qs && '?' + qs}`)
}
