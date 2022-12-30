import { APIGatewayProxyEvent, APIGatewayProxyResult, AppSyncAuthorizerEvent } from "aws-lambda";
import { connectDb } from "../dbConfig/db";
export const uri: any = process.env.MONGODB_URI;
export const hello = async (event:APIGatewayProxyEvent, context):Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDb();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hey AWS! I'm back"
      },
      null,
      2
    ),
  };
};
