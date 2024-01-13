/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Component,
  ComponentsListByNetworkFunctionOptionalParams,
  ComponentsGetOptionalParams,
  ComponentsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Components. */
export interface Components {
  /**
   * Lists all the component resources in a network function.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function.
   * @param options The options parameters.
   */
  listByNetworkFunction(
    resourceGroupName: string,
    networkFunctionName: string,
    options?: ComponentsListByNetworkFunctionOptionalParams
  ): PagedAsyncIterableIterator<Component>;
  /**
   * Gets information about the specified application instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFunctionName The name of the network function.
   * @param componentName The name of the component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkFunctionName: string,
    componentName: string,
    options?: ComponentsGetOptionalParams
  ): Promise<ComponentsGetResponse>;
}
