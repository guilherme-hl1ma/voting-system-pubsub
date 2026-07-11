import fastifyEnv from "@fastify/env";
import Fastify from "fastify";
import { envOptions } from "./schemas/env";
import mongoConnector from "./plugins/mongodb";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyEnv, envOptions);
fastify.register(mongoConnector);

const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
