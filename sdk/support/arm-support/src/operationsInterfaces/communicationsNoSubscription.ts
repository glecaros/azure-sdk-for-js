/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  CheckNameAvailabilityInput,
  CommunicationsNoSubscriptionCheckNameAvailabilityOptionalParams,
  CommunicationsNoSubscriptionCheckNameAvailabilityResponse,
  CommunicationsNoSubscriptionGetOptionalParams,
  CommunicationsNoSubscriptionGetResponse,
  CommunicationDetails,
  CommunicationsNoSubscriptionCreateOptionalParams,
  CommunicationsNoSubscriptionCreateResponse
} from "../models";

/** Interface representing a CommunicationsNoSubscription. */
export interface CommunicationsNoSubscription {
  /**
   * Check the availability of a resource name. This API should be used to check the uniqueness of the
   * name for adding a new communication to the support ticket.
   * @param supportTicketName Support ticket name.
   * @param checkNameAvailabilityInput Input to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    supportTicketName: string,
    checkNameAvailabilityInput: CheckNameAvailabilityInput,
    options?: CommunicationsNoSubscriptionCheckNameAvailabilityOptionalParams
  ): Promise<CommunicationsNoSubscriptionCheckNameAvailabilityResponse>;
  /**
   * Returns communication details for a support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param options The options parameters.
   */
  get(
    supportTicketName: string,
    communicationName: string,
    options?: CommunicationsNoSubscriptionGetOptionalParams
  ): Promise<CommunicationsNoSubscriptionGetResponse>;
  /**
   * Adds a new customer communication to an Azure support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param createCommunicationParameters Communication object.
   * @param options The options parameters.
   */
  beginCreate(
    supportTicketName: string,
    communicationName: string,
    createCommunicationParameters: CommunicationDetails,
    options?: CommunicationsNoSubscriptionCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CommunicationsNoSubscriptionCreateResponse>,
      CommunicationsNoSubscriptionCreateResponse
    >
  >;
  /**
   * Adds a new customer communication to an Azure support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param createCommunicationParameters Communication object.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    supportTicketName: string,
    communicationName: string,
    createCommunicationParameters: CommunicationDetails,
    options?: CommunicationsNoSubscriptionCreateOptionalParams
  ): Promise<CommunicationsNoSubscriptionCreateResponse>;
}
