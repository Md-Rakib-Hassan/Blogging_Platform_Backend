import { USER_ROLE } from "./user.constabts"

export interface IUser{
name: string,
email:string,
password:string,
role: 'admin'|'user',    
isBlocked:boolean,
}       

export type TUserRole = keyof typeof USER_ROLE;