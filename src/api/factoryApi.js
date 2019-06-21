import axios      from 'axios';
import decamelize from 'decamelize-keys-deep';
import camelize   from 'camelcase-keys-deep';
import config     from '../../config';

const axiosClient = axios.create({
	baseURL: config.api.baseUri
});

const errorHandler = error => {
	if (
		!error.response &&
		!error.response.data &&
		!error.response.data.description &&
		!error.response.data.message
	) {
		throw 'Erro inesperado';
	} else {
		throw error.response.data.description || error.response.data.message;
	}
};

const camelizeResponse = response => ({
	...response,
	data: camelize(response.data)
});

const post = (url, data, ...rest) =>
	axiosClient
	.post(url, decamelize(data), ...rest)
	.then(camelizeResponse)
	.catch(errorHandler);

const get = (url, { params = {} } = {}, ...args) =>
	axiosClient
	.get(url, { params: decamelize(params) }, ...args)
	.then(camelizeResponse)
	.catch(errorHandler);

const put = (url, data, ...rest) =>
	axiosClient
	.put(url, decamelize(data), ...rest)
	.then(camelizeResponse)
	.catch(errorHandler);

const _delete = (...args) =>
	axiosClient
	.delete(...args)
	.then(camelizeResponse)
	.catch(errorHandler);

export default () => {

	axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
	axiosClient.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';
	//axiosClient.defaults.headers.common['Accept'] = 'application/vnd.github.cloak-preview';



	return {
		post,
		get,
		put,
		delete: _delete
	};
};
