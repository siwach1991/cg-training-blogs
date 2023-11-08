import {body, validationResult} from 'express-validator';

const validatePayload = (req, res, next) => {
	const error = validationResult(req);
	if (error.isEmpty()) {
		next();
	} else {
		res.status(400).json({errors: error.array()}).end();
	}
};

const createBlogPaylodValidationRules = () => [
	body('userId').exists().isString(),
	body('title').exists().isString(),
	body('body').exists().isString(),
];

export {validatePayload, createBlogPaylodValidationRules};
