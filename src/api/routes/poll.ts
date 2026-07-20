import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { PollCreateDto } from "../dtos/poll";

export async function pollRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.post("/", async (request, reply) => {
    const poll = request.body as PollCreateDto;
    await fastify.pollService.createPoll(poll);
    return reply.status(201).send({ message: "Poll created successfully" });
  });
}
