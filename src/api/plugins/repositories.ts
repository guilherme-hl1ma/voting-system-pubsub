import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { VoteMongoRepository } from "../persistence/mongo/vote.repository";

declare module "fastify" {
  interface FastifyInstance {
    voteRepository: VoteMongoRepository;
  }
}

async function repositoriesPlugin(fastify: FastifyInstance) {
  const db = fastify.mongo.db;
  if (!db) {
    throw new Error("MongoDB database is not connected");
  }

  const voteRepository = new VoteMongoRepository(db);

  fastify.decorate("voteRepository", voteRepository);
}

export default fastifyPlugin(repositoriesPlugin);
