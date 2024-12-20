import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/blogs', validateRequest(BlogValidation.createBlogValidationSchema), BlogController.createBlog);
router.patch('/blogs/:id', validateRequest(BlogValidation.updateBlogValidationSchema), BlogController.updateBlog);
router.delete('/blogs/:id', BlogController.deleteBlog);

export const BlogRoutes = router;