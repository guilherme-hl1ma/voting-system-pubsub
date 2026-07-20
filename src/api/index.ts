import fastifyEnv from "@fastify/env";
import Fastify from "fastify";
import { envOptions } from "./schemas/env";
import mongoConnector from "./plugins/mongodb";
import repositoriesPlugin from "./plugins/repositories";
import servicesPlugin from "./plugins/services";
import { pollRoutes } from "./routes/poll";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyEnv, envOptions);
fastify.register(mongoConnector);
fastify.register(repositoriesPlugin);
fastify.register(servicesPlugin);
fastify.register(pollRoutes, { prefix: "/polls" });

const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
