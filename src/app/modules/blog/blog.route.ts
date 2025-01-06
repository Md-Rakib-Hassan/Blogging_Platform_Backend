import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/',auth('user'), validateRequest(BlogValidation.createBlogValidationSchema), BlogController.createBlog);
router.patch('/:id',auth('user'), validateRequest(BlogValidation.updateBlogValidationSchema), BlogController.updateBlog);
router.delete('/:id',auth('user'), BlogController.deleteBlog);
router.get('/' ,BlogController.getAllBlog);

export const BlogRoutes = router;