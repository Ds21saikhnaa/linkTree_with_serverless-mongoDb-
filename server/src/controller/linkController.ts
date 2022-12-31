import { MyError } from "../utils/myError.js";
import { Links } from "../model/Link.js";
import { User } from "../model/User.js";
import { IUser, Link } from "../../interface.js";

export const newLink = async (event) => {
  const body: object = JSON.parse(event.body);
  // const userId: string = event.userId;
  // const userId: string = event.userName;
  const link = new Links({...body});
  const data:Link = await link.save();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
        data
      },
      null,
      2
    ),
  };
}

export const getUserLink = async (event) => {
  const name = event.pathParameters.name;
  console.log(name);
  const links = await Links.find({ userName: name });
  const id = links[0]!.userId;
  const user = await User.findById(id);
  // if (!links.length) {
  //   throw new MyError("iim user medeelel bhgui!", 404);
  // }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
        data: links,
        user
      },
      null,
      2
    ),
  };
}

export const deleteLink = async ( event ) => {
  const link = Links.findById(event.pathParameters.id);
  if (!link) {
    throw new MyError("ийм линк байхгүй байна!", 404);
  }
  link.deleteMany();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true
      },
      null,
      2
    ),
  };
}