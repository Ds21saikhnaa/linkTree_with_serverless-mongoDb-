import { Types } from 'mongoose';
export interface IUser {
  name: string;
  email: string;
  profile: string;
  password: string;
  token: string;
  getJsonWebToken: () => any;
  checkPassword: (enteredPassword) => any;
}

export interface Link{
  name: string;
  url: Link;
  userName: string;
  userId: Types.ObjectId;
  isHide: Boolean;
}