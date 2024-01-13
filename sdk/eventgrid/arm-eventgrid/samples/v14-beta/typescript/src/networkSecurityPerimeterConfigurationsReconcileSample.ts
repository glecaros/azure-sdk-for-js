/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reconcile a specific network security perimeter configuration for a given network security perimeter association with a topic or domain.
 *
 * @summary Reconcile a specific network security perimeter configuration for a given network security perimeter association with a topic or domain.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-12-15-preview/examples/NetworkSecurityPerimeterConfigurations_Reconcile.json
 */
async function networkSecurityPerimeterConfigurationsReconcile() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const resourceType = "topics";
  const resourceName = "exampleResourceName";
  const perimeterGuid = "8f6b6269-84f2-4d09-9e31-1127efcd1e40perimeter";
  const associationName = "someAssociation";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.networkSecurityPerimeterConfigurations.beginReconcileAndWait(
    resourceGroupName,
    resourceType,
    resourceName,
    perimeterGuid,
    associationName
  );
  console.log(result);
}

async function main() {
  networkSecurityPerimeterConfigurationsReconcile();
}

main().catch(console.error);
