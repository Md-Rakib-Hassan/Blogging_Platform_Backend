import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => { 
    const blog = await BlogService.createBlogIntoDB(req.body);
    sendResponse(res, {
        success: true,
        message: 'Blog created successfully',
        statusCode: 201,
        data: blog
    })
})

export const BlogController = {
    createBlog
}