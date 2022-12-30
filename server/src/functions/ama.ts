import { APIGatewayProxyEvent, APIGatewayProxyResult, AppSyncAuthorizerEvent } from "aws-lambda";
import { connectDb } from "../dbConfig/db";
import { register } from "../controller/UserController";
export const uri: any = process.env.MONGODB_URI;
export const test = async (event:APIGatewayProxyEvent, context):Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDb();
  return register(event);
};