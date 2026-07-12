import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { VoteService } from "../services/vote";

declare module "fastify" {
  interface FastifyInstance {
    voteService: VoteService;
  }
}

async function servicesPlugin(fastify: FastifyInstance) {
  const voteService = new VoteService(fastify.voteRepository, fastify);
  fastify.decorate("voteService", voteService);
}

export default fastifyPlugin(servicesPlugin);
