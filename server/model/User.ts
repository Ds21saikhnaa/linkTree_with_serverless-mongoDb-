import { Schema, model } from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../interface";
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "hereglegchiin ner oruulna uu!"]
    },
    email: {
      type: String,
      required: [true, "hereglegchiin email zaawal oruulna uu!"],
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email hayg buruu bn!"]
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "nuuts ugee oruulna uu!"],
      select: false
    },
    profile: {
      type: String
    }
  }, { timestamps: true }
);

UserSchema.pre("save", async function(next) {
  if(!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getJsonWebToken = function(){
  const token = jwt.sign({id: this._id, role: this.role}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN
  });
  return token;
}

UserSchema.methods.checkPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

export const User = model<IUser>('User', UserSchema);