import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const UserSchema = new Schema<IUser>(
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

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
