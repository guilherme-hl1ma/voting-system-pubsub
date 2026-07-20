import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { VoteMongoRepository } from "../persistence/mongo/vote.repository";
import { PollMongoRepository } from "../persistence/mongo/poll.repository";

declare module "fastify" {
  interface FastifyInstance {
    voteRepository: VoteMongoRepository;
    pollRepository: PollMongoRepository;
  }
}

async function repositoriesPlugin(fastify: FastifyInstance) {
  const db = fastify.mongo.db;
  if (!db) {
    throw new Error("MongoDB database is not connected");
  }

  const voteRepository = new VoteMongoRepository(db);
  const pollRepository = new PollMongoRepository(db);

  fastify.decorate("voteRepository", voteRepository);
  fastify.decorate("pollRepository", pollRepository);
}

export default fastifyPlugin(repositoriesPlugin);
