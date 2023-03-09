import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

const config = {
  config(input) {
    return {
      name: "sst-example",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;

export default config;
