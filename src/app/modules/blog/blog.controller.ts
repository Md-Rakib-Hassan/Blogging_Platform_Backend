import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;
  payload.author = req?.user?._id;

  const blog = await BlogService.createBlogIntoDB(payload);
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: blog,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.updateBlogFromDB(req.body, req.params.id,req.user?._id);
  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: 200,
    data: blog,
  });
});

const deleteBlog = catchAsync(async (req, res) => {

  await BlogService.deleteBlogFromDB(req.params.id,req.user?._id);
  res
    .status(200)
    .json({
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
    });
});

const getAllBlog = catchAsync(async (req, res) => {
  // const { search, sortBy, sortOrder, filter } = req.query;
  // console.log('search', search);
  // console.log('sortBy', sortBy);
  // console.log('sortOrder', sortOrder);
  // console.log('filter', filter);
  const blogs = await BlogService.getAllBlogFromDB(req.query);
  sendResponse(res, {
    success: true,
    message: 'Blogs fetched successfully',
    statusCode: 200,
    data: blogs,
  });

});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlog
};
