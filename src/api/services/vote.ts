import { FastifyInstance } from "fastify";
import { VoteRepository } from "../repositories/vote";
import { VoteCreateDto } from "../dtos/vote";

export class VoteService {
  constructor(
    private readonly repository: VoteRepository,
    private readonly fastify: FastifyInstance,
  ) {}

  async createVote(vote: VoteCreateDto) {
    try {
      const timestamp = Date.now();
      await this.repository.createVote({
        ...vote,
        schemaVersion: [this.fastify.VOTE_VERSION],
        votedAt: timestamp,
      });
    } catch (e) {
      this.fastify.log.error(`Error creating vote: ${e}`);
      throw e;
    }
  }
}
