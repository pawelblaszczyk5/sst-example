import { StackContext, Api } from "sst/constructs";
import { FunctionalStack } from "sst/constructs/FunctionalStack";

export const API = (({ stack }) => {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}) satisfies FunctionalStack<void>;
