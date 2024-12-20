import mongoose from "mongoose";
import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async (payload: IBlog) => {
    payload.author= new mongoose.Types.ObjectId();  // demo will change later dynamically
    const createdBlog = await BlogModel.create(payload);
    const result = {
        _id: createdBlog._id,
        title: createdBlog.title,
        content: createdBlog.content,
    } 
    return result;
}

export const BlogService = {
    createBlogIntoDB
} 