import { Schema, model} from 'mongoose';
import { Link } from "../../interface";
const LinkSchema = new Schema<Link>(
  {
    name: {
      type: String,
      required: [true, "linked ner oruulna uu!"]
    },
    url: {
      type: String,
      required: [true, "linkee zaawal oruulna uu!"]
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref:"User",
      required: true
  },
    isHide: {
      type: Boolean,
      default: false
    }
  }, { timestamps: true }
);

export const Links = model<Link>('User', LinkSchema);