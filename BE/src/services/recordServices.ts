import { v4 as uuidv4 } from "uuid";
import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoDb } from "../lib/db";

export const createRecord = async (data: {
  userId: string;
  date: string;
  principal: string;
  rate: string;
}) => {
  const item = {
    ...data,
    recordId: uuidv4(),
  };

  const putCommand = new PutCommand({
    TableName: "SavingRecords",
    Item: item,
  });

  await dynamoDb.send(putCommand);

  return item;
};

export const fetchRecord = async (userId: string) => {
  const fetchCommand = new QueryCommand({
    TableName: "SavingRecords",
    KeyConditionExpression: "userId = :uid",
    ExpressionAttributeValues: {
      ":uid": userId,
    },
  });

  const response = await dynamoDb.send(fetchCommand);

  return response.Items;
};
