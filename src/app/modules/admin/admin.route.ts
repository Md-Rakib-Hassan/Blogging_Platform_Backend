import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.patch('/users/:id/block',AdminController.blockUser);
router.delete('/blogs/:id',AdminController.deleteBlog);

export const AdminRoutes = router;