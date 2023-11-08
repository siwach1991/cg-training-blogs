import {addBlogDbFunction} from '../dbfunction/addBlogDbFunction.js';

const addBlogService = async newBlog => new Promise((resolve, reject) => {
	addBlogDbFunction(newBlog).then(result => {
		resolve(result);
	}).catch(err => {
		reject(err);
	});
});

export {addBlogService};
