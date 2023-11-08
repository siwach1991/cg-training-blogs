import {addBlogService} from '../service/addBlogService.js';

const addBlog = async (req, res) => {
	const blog = {
		userId: req.body.userId,
		title: req.body.title,
		body: req.body.body,
	};

	try {
		const response = await addBlogService(blog);
		res.status(201).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({status: 'fail', message: 'Internal Server Error'});
	}
};

export {addBlog};
