import AppError from '../../errors/AppError';
import { IUser } from './user.interface';
import UserModel from './user.model';

const createUserIntoDB = async (userData: IUser) => {
    try {
        const isUserExist = await getSingleUserFromDB(userData.email);
        if (isUserExist) {
            throw new AppError(400, 'User already exists');
        }
        const createdUser = await UserModel.create(userData);
        const result = {
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
        };
        return result;
    } catch (err) { 
        throw new AppError(401, 'Invalid credentials');
    }
};

const getSingleUserFromDB = async (email: string) => {
  const result = await UserModel.findOne({ email });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getSingleUserFromDB,
};
