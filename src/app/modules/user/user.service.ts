import AppError from "../../errors/AppError";
import { IUser } from "./user.interface";
import UserModel from "./user.model";

const createUserIntoDB = async (userData: IUser) => {
    const isUserExist = await getSingleUserFromDB(userData.email);
    if (isUserExist) {
        throw new AppError(400, 'User already exists');
    }
    const result = await UserModel.create(userData);
    return result;
}

const getSingleUserFromDB = async (email: string) => {
    const result = await UserModel.findOne({email});
    return result;
} 


export const UserService = {
    createUserIntoDB,
    getSingleUserFromDB
}