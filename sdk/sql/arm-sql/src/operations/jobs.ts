/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Jobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  Job,
  JobsListByAgentNextOptionalParams,
  JobsListByAgentOptionalParams,
  JobsListByAgentResponse,
  JobsGetOptionalParams,
  JobsGetResponse,
  JobsCreateOrUpdateOptionalParams,
  JobsCreateOrUpdateResponse,
  JobsDeleteOptionalParams,
  JobsListByAgentNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Jobs operations. */
export class JobsImpl implements Jobs {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of jobs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  public listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobsListByAgentOptionalParams
  ): PagedAsyncIterableIterator<Job> {
    const iter = this.listByAgentPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByAgentPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          options
        );
      }
    };
  }

  private async *listByAgentPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobsListByAgentOptionalParams
  ): AsyncIterableIterator<Job[]> {
    let result = await this._listByAgent(
      resourceGroupName,
      serverName,
      jobAgentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByAgentNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByAgentPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobsListByAgentOptionalParams
  ): AsyncIterableIterator<Job> {
    for await (const page of this.listByAgentPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of jobs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  private _listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobsListByAgentOptionalParams
  ): Promise<JobsListByAgentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, options },
      listByAgentOperationSpec
    );
  }

  /**
   * Gets a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobsGetOptionalParams
  ): Promise<JobsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, jobName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param parameters The requested job state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    parameters: Job,
    options?: JobsCreateOrUpdateOptionalParams
  ): Promise<JobsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, jobName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByAgentNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param nextLink The nextLink from the previous successful call to the ListByAgent method.
   * @param options The options parameters.
   */
  private _listByAgentNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    nextLink: string,
    options?: JobsListByAgentNextOptionalParams
  ): Promise<JobsListByAgentNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, nextLink, options },
      listByAgentNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAgentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    default: {}
  },
  requestBody: Parameters.parameters35,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName
  ],
  serializer
};
const listByAgentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
