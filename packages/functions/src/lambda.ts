import { ApiHandler } from "sst/node/api";
import { Time } from "@sst-example/core/time";

export const handler = ApiHandler(async (event) => {
  return {
    body: `Hello world. The time is ${Time.now()}`,
  };
});
