import { Types } from 'mongoose';
export interface IUser {
  name: string;
  email: string;
  profile?: string;
  password? : string
}

export interface Link{
  name: string;
  url: Link;
  userId?: Types.ObjectId;
  isHide?: Boolean
}