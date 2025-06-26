import { v4 as uuidv4 } from "uuid";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
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

  const command = new PutCommand({
    TableName: "SavingRecords",
    Item: item,
  });

  await dynamoDb.send(command);

  return item;
};
