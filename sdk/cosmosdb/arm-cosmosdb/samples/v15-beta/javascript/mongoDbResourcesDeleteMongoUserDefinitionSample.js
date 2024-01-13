/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB Mongo User Definition.
 *
 * @summary Deletes an existing Azure Cosmos DB Mongo User Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-09-15-preview/examples/CosmosDBMongoDBUserDefinitionDelete.json
 */
async function cosmosDbMongoDbuserDefinitionDelete() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const mongoUserDefinitionId = "myMongoUserDefinitionId";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginDeleteMongoUserDefinitionAndWait(
    mongoUserDefinitionId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbuserDefinitionDelete();
}

main().catch(console.error);
