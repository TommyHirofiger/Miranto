// lib/dynamodb.ts
import AWS from "aws-sdk";

export const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId: "dummy",
  secretAccessKey: "dummy",
});
