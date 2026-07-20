import { Collection, Db } from "mongodb";
import { Poll } from "../../schemas/poll";
import { PollRepository } from "../../repositories/poll";

export class PollMongoRepository implements PollRepository {
  private readonly collection: Collection<Poll>;

  constructor(db: Db) {
    this.collection = db.collection<Poll>("polls");
  }

  async createPoll(poll: Poll): Promise<void> {
    await this.collection.insertOne(poll);
  }
}
