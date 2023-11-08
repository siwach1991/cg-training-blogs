import {getBlogByIdService} from '../service/getBlogByIDService.js';

const getBlogByIdController = async (req, res) => {
	const blogId = req.params.id;
	console.log(blogId);
	try {
		const response = await getBlogByIdService(blogId);
		res.status(200).send(response);
	} catch (err) {
		res.status(err.code).send(err);
	}
};

export {getBlogByIdController};
