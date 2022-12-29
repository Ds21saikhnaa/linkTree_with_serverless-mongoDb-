import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from "aws-lambda";
import { connectDb } from "./dbConfig/db";
export const uri: any = process.env.MONGODB_URI;
export const hello: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectDb();
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
