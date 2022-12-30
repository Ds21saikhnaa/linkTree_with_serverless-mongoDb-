import { APIGatewayProxyEvent, APIGatewayProxyResult, AppSyncAuthorizerEvent } from "aws-lambda";
import { connectDb } from "../dbConfig/db";
import { protect } from "../middleware/protect";
import { newLink , getUserLink} from "../controller/linkController";
import { def } from "../utils/default";
export const hello = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return def();
};

export const createLink = async (event: APIGatewayProxyEvent, context): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDb(process.env.MONGODB_URI);
  return newLink(event);
}

export const getLink = async (event: APIGatewayProxyEvent, context):Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDb(process.env.MONGODB_URI);
  return getUserLink(event);
}
