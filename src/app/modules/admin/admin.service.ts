import AppError from "../../errors/AppError";
import UserModel from "../user/user.model"
import { UserService } from "../user/user.service";

const blockUser = async (id: string) => { 
    const isUserExists = await UserService.getSingleUserFromDB(id);
    if (!isUserExists) { 
        throw new AppError(404, 'User not found');
    }
    const user = await UserModel.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
    return user;
}


export const AdminService = {
    blockUser
} 