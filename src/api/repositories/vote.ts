import { Vote } from "../schemas/vote";

export interface VoteRepository {
  createVote(vote: Vote): Promise<void>;
}
