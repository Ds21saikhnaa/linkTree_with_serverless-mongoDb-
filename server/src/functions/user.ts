import { APIGatewayProxyEvent, APIGatewayProxyResult, AppSyncAuthorizerEvent } from "aws-lambda";
import { connectDb } from "../dbConfig/db";
import { register,login } from "../controller/UserController";
export const uri: any = process.env.MONGODB_URI;
export const userReq = async (event:APIGatewayProxyEvent, context):Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDb(process.env.MONGODB_URI);
  return register(event);
};

export const userLogin = async (event: APIGatewayProxyEvent, context): Promise<APIGatewayProxyResult> => { 
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDb(process.env.MONGODB_URI);
  return login(event);
}