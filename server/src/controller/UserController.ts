import { MyError } from "../utils/myError.js";
import { User } from "../model/User.js";

export const register = async ( event ): Promise<any> => {
  const body = JSON.parse(event.body);
  try {
    const newUser = new User(body);
    const user = await newUser.save();
    const token = user.getJsonWebToken();
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          success: true,
          data: user,
          token
        },
        null,
        2
      ),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          success: false,
          data: err,
        },
        null,
        2
      ),
    };
  } 
}

//user login 
export const login = async (event) => {
  const {email, password} = JSON.parse(event.body);
  if (!email || !password) {
    throw new MyError("ta email eswel nuuts ugee oruulna uu", 401);
  }
  const user = await User.findOne({email}).select("+password");
  if(!user){
    throw new MyError("email bolon nuuts ugee zow oruulna uu!", 401);
  }
  const pass = await user.checkPassword(password);
  if(!pass){
    throw new MyError("email bolon nuuts ugee zow oruulna uu!", 401);
  }
  return{
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      token: user.getJsonWebToken(),
      data: user,
    })
  }
}