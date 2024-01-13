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
  ILRRequestResource,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens a file
explorer displaying all the recoverable files and folders. This is an asynchronous operation. To know the status of
provisioning, call GetProtectedItemOperationResult API.
 *
 * @summary Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens a file
explorer displaying all the recoverable files and folders. This is an asynchronous operation. To know the status of
provisioning, call GetProtectedItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-06-01/examples/AzureIaasVm/Provision_Ilr.json
 */
async function provisionInstantItemLevelRecoveryForAzureVM() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "PySDKBackupTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] ||
    "PythonSDKBackupTestRg";
  const fabricName = "Azure";
  const containerName =
    "iaasvmcontainer;iaasvmcontainerv2;pysdktestrg;pysdktestv2vm1";
  const protectedItemName = "vm;iaasvmcontainerv2;pysdktestrg;pysdktestv2vm1";
  const recoveryPointId = "1";
  const parameters: ILRRequestResource = {
    properties: {
      initiatorName: "Hello World",
      objectType: "IaasVMILRRegistrationRequest",
      recoveryPointId: "38823086363464",
      renewExistingRegistration: true,
      virtualMachineId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/pysdktestrg/providers/Microsoft.Compute/virtualMachines/pysdktestv2vm1"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.itemLevelRecoveryConnections.provision(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName,
    recoveryPointId,
    parameters
  );
  console.log(result);
}

async function main() {
  provisionInstantItemLevelRecoveryForAzureVM();
}

main().catch(console.error);
