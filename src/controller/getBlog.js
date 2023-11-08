import {getBlogService} from '../service/getBlogService.js';
const getBlog = async (req, res) => {
	try {
		const response = await getBlogService();
		res.status(200).send(response);
	} catch (err) {
		console.log(err);
		res.status(500).send({status: 'fail', message: 'internal server error'});
	}
};

export {getBlog};
