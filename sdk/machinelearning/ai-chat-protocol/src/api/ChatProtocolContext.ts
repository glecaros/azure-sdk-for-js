// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * THIS IS AN AUTO-GENERATED FILE - DO NOT EDIT!
 *
 * Any changes you make here may be lost.
 *
 * If you need to make changes, please do so in the original source file, \{project-root\}/sources/custom
 */

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ChatProtocolContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ChatProtocolClientOptions extends ClientOptions {}

export { ChatProtocolContext } from "../rest/index.js";

/** Azure APIs for the Azure Chat protocol. */
export function createChatProtocol(
  endpoint: string,
  credential: KeyCredential,
  options: ChatProtocolClientOptions = {}
): ChatProtocolContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
