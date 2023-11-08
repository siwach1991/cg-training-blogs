import {getAllBlogsDbFunction} from '../dbfunction/getAllBlogDbFunction.js';
const getBlogService = () => new Promise((resolve, reject) => {
	getAllBlogsDbFunction()
		.then(result => {
			resolve(result);
		})
		.catch(err => {
			reject(err);
		});
});

export {getBlogService};
