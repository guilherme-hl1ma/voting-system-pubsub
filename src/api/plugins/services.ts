import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { PollService } from "../services/poll";
import { VoteService } from "../services/vote";

declare module "fastify" {
  interface FastifyInstance {
    voteService: VoteService;
    pollService: PollService;
  }
}

async function servicesPlugin(fastify: FastifyInstance) {
  const voteService = new VoteService(fastify.voteService, fastify);
  const pollService = new PollService(fastify.pollRepository, fastify);

  fastify.decorate("pollService", pollService);
  fastify.decorate("voteService", voteService);
}

export default fastifyPlugin(servicesPlugin);
