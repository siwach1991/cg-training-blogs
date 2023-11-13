import dotenv from 'dotenv';
dotenv.config();
const validateApiKey = (req, res, next) => {
	if (req.header('x-api-key') === process.env.API_KEY) {
		next();
	} else {
		res.status(403).send({status: 'fail', message: 'Invalid api key'});
	}
};

export {validateApiKey};
