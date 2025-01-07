import mongoose from "mongoose";
import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";
import AppError from "../../errors/AppError";

const createBlogIntoDB = async (payload: IBlog) => {
    // payload.author= new mongoose.Types.ObjectId();  // demo will change later dynamically
    const createdBlog = await BlogModel.create(payload);
    const result = {
        _id: createdBlog._id,
        title: createdBlog.title,
        content: createdBlog.content,
    } 
    return result;
}

const getSingleBlogFromDB = async (id: string) => { 
    const result = await BlogModel.findById(id);
    return result;
}
const getAllBlogFromDB = async () => {
    const result = await BlogModel.find();
    return result;
}

const updateBlogFromDB = async (payload: Partial<IBlog>, id: string) => {
    const isBlogExists = await getSingleBlogFromDB(id);
    if (!isBlogExists) {
        throw new AppError(404,'Blog not found');
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(id,payload,{new:true});
    const result = {
        _id: updatedBlog._id,
        title: updatedBlog.title,
        content: updatedBlog.content,
    } 
    return result;
}

const deleteBlogFromDB = async (id: string) => {
    // console.log(id);
    const isBlogExists = await getSingleBlogFromDB(id);
    if (!isBlogExists) {
        throw new AppError(404, 'Blog not found!!');
    }
    const result = await BlogModel.findByIdAndDelete(id);
    return result;
}



export const BlogService = {
    createBlogIntoDB,
    updateBlogFromDB,
    getSingleBlogFromDB,
    deleteBlogFromDB,
    getAllBlogFromDB
} 