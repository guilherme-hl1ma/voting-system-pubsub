import fastifyMongodb from "@fastify/mongodb";
import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

async function mongoConnector(fastify: FastifyInstance) {
  fastify.register(fastifyMongodb, {
    url: fastify.config.MONGO_URL,
  });
}

export default fastifyPlugin(mongoConnector);
