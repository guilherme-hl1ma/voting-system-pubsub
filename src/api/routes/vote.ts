import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { VoteCreateDto } from "../schemas/vote.dto";

export async function voteRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.post("/", async (request, reply) => {
    const vote = request.body as VoteCreateDto;
    await fastify.voteService.createVote(vote);
    return reply.status(201).send({ message: "Vote registered successfully" });
  });
}
