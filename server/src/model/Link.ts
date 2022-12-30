import {Schema, model } from 'mongoose';
// const mongoose = require('mongoose');
import { Link } from "../../interface";
const LinkSchema = new Schema<Link>(
  {
    name: {
      type: String,
      required: [true, "linked ner oruulna uu!"]
    },
    userName: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: [true, "linkee zaawal oruulna uu!"]
    },
    userId: 
      {
      type: Schema.Types.ObjectId,
      refs: 'User',
      required: true
      },
    isHide: {
      type: Boolean,
      default: false
    }
  }, { timestamps: true }
);

export const Links = model<Link>('Link', LinkSchema);