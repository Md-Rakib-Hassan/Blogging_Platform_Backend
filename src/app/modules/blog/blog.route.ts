import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/', validateRequest(BlogValidation.createBlogValidationSchema), BlogController.createBlog);
router.patch('/:id', validateRequest(BlogValidation.updateBlogValidationSchema), BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);
router.get('/', BlogController.getAllBlog);

export const BlogRoutes = router;