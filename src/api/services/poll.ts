import { FastifyInstance } from "fastify";
import { PollCreateDto } from "../dtos/poll";
import { PollRepository } from "../repositories/poll";

export class PollService {
  constructor(
    private readonly repository: PollRepository,
    private readonly fastify: FastifyInstance,
  ) {}

  async createPoll(poll: PollCreateDto) {
    try {
      await this.repository.createPoll({
        ...poll,
        schemaVersion: [this.fastify.POLL_VERSION],
      });
    } catch (e) {
      this.fastify.log.error(`Error creating vote: ${e}`);
      throw e;
    }
  }
}
