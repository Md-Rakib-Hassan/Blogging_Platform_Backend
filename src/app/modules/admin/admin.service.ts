import AppError from "../../errors/AppError";
import { BlogModel } from "../blog/blog.model";
import { BlogService } from "../blog/blog.service";
import UserModel from "../user/user.model"
import { UserService } from "../user/user.service";

const blockUser = async (id: string) => { 
    const isUserExists = await UserService.getSingleUserFromDBById(id);
    if (!isUserExists) { 
        throw new AppError(404, 'User not found');
    }
    const user = await UserModel.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
    return user;
}

const deleteBlog = async (id: string) => {
    const isBlogExists = await BlogService.getSingleBlogFromDB(id);
    if (!isBlogExists) {
        throw new AppError(404, 'Blog not found!!');
    }
    const result = await BlogModel.findByIdAndDelete(id);
    return result;
 }


export const AdminService = {
    blockUser,
    deleteBlog
} 