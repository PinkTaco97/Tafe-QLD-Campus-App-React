import client from './client';

const endpoint = '/points/';

const getPoint = (id) => client.get('/points/'+id);

export default {
	getPoint,
};