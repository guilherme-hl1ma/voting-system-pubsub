import { FastifyInstance } from "fastify";
import { Vote, VoteRepository } from "../repositories/vote";
import { VoteCreateDto } from "../schemas/vote.dto";

export class VoteService {
  constructor(
    private readonly repository: VoteRepository,
    private readonly fastify: FastifyInstance,
  ) {}

  async createVote(vote: VoteCreateDto) {
    try {
      await this.repository.createVote({ ...vote, schemaVersion: 1 });
    } catch (e) {
      this.fastify.log.error(`Error creating vote: ${e}`);
      throw e;
    }
  }
}
