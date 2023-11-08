import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();
import {addBlog} from '../controller/addBlog.js';
import {getBlog} from '../controller/getBlog.js';
import {getBlogByIdController} from '../controller/getBlogByID.js';
import {validatePayload, createBlogPaylodValidationRules} from '../validators/addBlogValidator.js';

router.post('/createBlog', createBlogPaylodValidationRules(), validatePayload, addBlog);
router.get('/getBlog', getBlog);
router.get('/getBlog/:id', getBlogByIdController);

export {router};
