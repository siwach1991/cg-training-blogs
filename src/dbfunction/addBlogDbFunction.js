import {blogs} from '../model/blogs.js';

const addBlogDbFunction = async newBlog => new Promise((resolve, reject) => {
	blogs.create(newBlog).then(result => {
		resolve(result);
	}).catch(err => {
		reject(err);
	});
});

export {addBlogDbFunction};
