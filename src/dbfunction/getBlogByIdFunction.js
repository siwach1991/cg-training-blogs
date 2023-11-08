import {blogs} from '../model/blogs.js';
const getBlogByIdFunction = blogId => new Promise((resolve, reject) => {
	const objectId = blogId;
	const projection =	{_id: 0, userId: 1, title: 1, body: 1};
	blogs.findById(objectId, projection)
		.exec()
		.then(result => {
			if (result) {
				resolve(result);
			} else {
				// eslint-disable-next-line prefer-promise-reject-errors
				reject({
					error: 'no data found',
					code: 404,
				});
			}
		}).catch(err => {
			console.log(err);
			// eslint-disable-next-line prefer-promise-reject-errors
			reject({
				error: 'no data found',
				code: 404,
			});
		});
});

export {getBlogByIdFunction};
