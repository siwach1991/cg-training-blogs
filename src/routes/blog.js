import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();
import {addBlog} from '../controller/addBlog.js';
import {getBlog} from '../controller/getBlog.js';
import {getBlogByIdController} from '../controller/getBlogByID.js';
import {validatePayload, createBlogPaylodValidationRules} from '../validators/addBlogValidator.js';
import {validateApiKey} from '../middleware/validateKey.js';

router.post('/createBlog', validateApiKey, createBlogPaylodValidationRules(), validatePayload, addBlog);
router.get('/getBlog', validateApiKey, getBlog);
router.get('/getBlog/:id', validateApiKey, getBlogByIdController);

export {router};
