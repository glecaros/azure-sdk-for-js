/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the long term retention backups for a given server.
 *
 * @summary Lists the long term retention backups for a given server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/LongTermRetentionBackupListByServer.json
 */
async function getAllLongTermRetentionBackupsUnderTheServer() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const locationName = "japaneast";
  const longTermRetentionServerName = "testserver";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.longTermRetentionBackups.listByServer(
    locationName,
    longTermRetentionServerName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAllLongTermRetentionBackupsUnderTheServer();
}

main().catch(console.error);
