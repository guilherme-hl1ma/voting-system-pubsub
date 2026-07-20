import { FromSchema } from "json-schema-to-ts";
import { envSchema } from "./schemas/env";
export type EnvConfig = FromSchema<typeof envSchema>;

declare module "fastify" {
  interface FastifyInstance {
    config: EnvConfig;
    POLL_VERSION: 1;
    VOTE_VERSION: 1;
  }
}
