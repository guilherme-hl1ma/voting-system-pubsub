import { FromSchema } from "json-schema-to-ts";
import { envSchema } from "./schema";
export type EnvConfig = FromSchema<typeof envSchema>;

declare module "fastify" {
  interface FastifyInstance {
    config: EnvConfig;
  }
}
