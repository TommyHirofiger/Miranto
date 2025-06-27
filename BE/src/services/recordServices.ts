import { v4 as uuidv4 } from "uuid";
import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
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
  const getCommand = new GetCommand({
    TableName: "SavingRecords",
    Key: {
      userId: userId,
    },
  });

  const response = await dynamoDb.send(getCommand);

  console.log(response);
};
