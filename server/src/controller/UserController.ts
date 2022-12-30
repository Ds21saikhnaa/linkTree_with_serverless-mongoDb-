import { MyError } from "../utils/myError.js";
import { User } from "../model/User.js";

export const register = async ( event ) => {
  console.log(event.body);
  const body = JSON.parse(event.body);
  const user = await User.create(body);
  const token = user.getJsonWebToken();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
        user: user,
        // token
      },
      null,
      2
    ),
  };
}