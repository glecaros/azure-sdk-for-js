// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * THIS IS AN AUTO-GENERATED FILE - DO NOT EDIT!
 *
 * Any changes you make here may be lost.
 *
 * If you need to make changes, please do so in the original source file, \{project-root\}/sources/custom
 */

import { CreateStreamingParameters, CreateParameters } from "./parameters.js";
import {
  CreateStreaming200Response,
  CreateStreamingDefaultResponse,
  Create200Response,
  CreateDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateStreaming {
  /** Creates a new streaming chat completion. */
  post(
    options?: CreateStreamingParameters
  ): StreamableMethod<CreateStreaming200Response | CreateStreamingDefaultResponse>;
  /** Creates a new chat completion. */
  post(options?: CreateParameters): StreamableMethod<Create200Response | CreateDefaultResponse>;
}

export interface Routes {
  /** Resource for '/chat' has methods for the following verbs: post */
  (path: "/chat"): CreateStreaming;
}

export type ChatProtocolContext = Client & {
  path: Routes;
};
