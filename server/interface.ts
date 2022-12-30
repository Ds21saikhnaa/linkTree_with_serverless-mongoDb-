import { Types } from 'mongoose';
export interface IUser {
  // _id?: Types.ObjectId;
  name: string;
  email: string;
  profile: string;
  password: string;
  token: string;
  getJsonWebToken: () => any;
}

export interface Link{
  name: string;
  url: Link;
  userId?: Types.ObjectId;
  isHide?: Boolean
}