import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: 'user',
    },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
