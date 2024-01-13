/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PatchResourceGuardInput,
  DataProtectionClient
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a ResourceGuard resource belonging to a resource group. For example, updating tags for a resource.
 *
 * @summary Updates a ResourceGuard resource belonging to a resource group. For example, updating tags for a resource.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2023-11-01/examples/ResourceGuardCRUD/PatchResourceGuard.json
 */
async function patchResourceGuard() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const resourceGuardsName = "swaggerExample";
  const parameters: PatchResourceGuardInput = { tags: { newKey: "newVal" } };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.resourceGuards.patch(
    resourceGroupName,
    resourceGuardsName,
    parameters
  );
  console.log(result);
}

async function main() {
  patchResourceGuard();
}

main().catch(console.error);
