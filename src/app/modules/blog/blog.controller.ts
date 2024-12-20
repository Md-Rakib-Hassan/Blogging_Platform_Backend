import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.createBlogIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: blog,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.updateBlogFromDB(req.body, req.params.id);
  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: 200,
    data: blog,
  });
});

const deleteBlog = catchAsync(async (req, res) => {

  await BlogService.deleteBlogFromDB(req.params.id);
  res
    .status(200)
    .json({
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
    });
});

export const BlogController = {
  createBlog,
    updateBlog,
    deleteBlog
};
