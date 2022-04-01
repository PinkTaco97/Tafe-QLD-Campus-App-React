import client from './client';

const endpoint = '/points/';

const getPoint = (code) => client.get('/points/'+code);

export default {
	getPoint,
};