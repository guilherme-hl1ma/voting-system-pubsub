import type { FastifyInstance, FastifyPluginOptions } from "fastify";

export async function voteRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.post("/", async (request, reply) => {});
}
