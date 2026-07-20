import { Collection, Db } from "mongodb";
import { VoteRepository } from "../../repositories/vote";
import { Vote } from "../../schemas/vote";

export class VoteMongoRepository implements VoteRepository {
  private readonly collection: Collection<Vote>;

  constructor(db: Db) {
    this.collection = db.collection<Vote>("votes");
  }

  async createVote(vote: Vote): Promise<void> {
    await this.collection.insertOne(vote);
  }
}
