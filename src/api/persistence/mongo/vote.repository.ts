import { Collection, Db } from "mongodb";
import { Vote, VoteRepository } from "../../repositories/vote";

export class VoteMongoRepository implements VoteRepository {
  private readonly collection: Collection<Vote>;

  constructor(db: Db) {
    this.collection = db.collection<Vote>("votes");
  }

  async createVote(vote: Vote): Promise<void> {
    await this.collection.insertOne(vote);
  }
}
