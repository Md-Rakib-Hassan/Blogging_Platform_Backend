import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/blogs',validateRequest(BlogValidation.blogValidationSchema), BlogController.createBlog);

export const BlogRoutes = router;