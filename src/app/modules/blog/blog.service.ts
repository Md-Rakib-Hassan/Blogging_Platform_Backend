import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";
import AppError from "../../errors/AppError";
import { ObjectId } from "mongoose";

const createBlogIntoDB = async (payload: IBlog) => {

    const createdBlog = await(await BlogModel.create(payload)).populate('author',);
    const result = {
        _id: createdBlog._id,
        title: createdBlog.title,
        content: createdBlog.content,
        author: createdBlog.author,
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

const updateBlogFromDB = async (payload: Partial<IBlog>, id: string,authorId:ObjectId) => {
    const isBlogExists = await getSingleBlogFromDB(id);
    if (!isBlogExists) {
        throw new AppError(404,'Blog not found');
    }
    if (isBlogExists?.author.toString() !== authorId.toString()) { 
        throw new AppError(401, 'You are not authorized to update this blog');
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(id,payload,{new:true}).populate('author');
    const result = {
        _id: updatedBlog._id,
        title: updatedBlog.title,
        content: updatedBlog.content,
        author: updatedBlog.author,
    } 
    return result;
}

const deleteBlogFromDB = async (id: string, authorId:ObjectId) => {
    // console.log(id);
    const isBlogExists = await getSingleBlogFromDB(id);
    if (!isBlogExists) {
        throw new AppError(404, 'Blog not found!!');
    }
    if (isBlogExists?.author.toString() !== authorId.toString()) { 
        throw new AppError(401, 'You are not authorized to delete this blog');
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