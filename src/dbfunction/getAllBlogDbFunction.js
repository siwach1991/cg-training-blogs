import {blogs} from '../model/blogs.js';

const getAllBlogsDbFunction = async () => new Promise((resolve, reject) => {
	const query = {};
	const projection =	{_id: 0, userId: 1, title: 1, body: 1};
	blogs.find(query, projection)
		.limit(10)
		.exec()
		.then(result => {
			if (result.length > 0) {
				resolve(result);
			} else {
				// eslint-disable-next-line prefer-promise-reject-errors
				reject({
					error: 'no data found',
					code: 404,
				});
			}
		}).catch(err => {
			// eslint-disable-next-line prefer-promise-reject-errors
			reject({
				error: err,
				code: 500,
			});
		});
});

export {getAllBlogsDbFunction};
