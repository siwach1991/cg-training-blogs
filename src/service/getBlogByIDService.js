import {getBlogByIdFunction} from '../dbfunction/getBlogByIdFunction.js';
const getBlogByIdService = async blogId => new Promise((resolve, reject) => {
	getBlogByIdFunction(blogId)
		.then(result => {
			resolve(result);
		})
		.catch(err => {
			reject(err);
		});
});

export {getBlogByIdService};
