export interface Vote {
  title: string;
  description: string;
  schemaVersion: number;
}

export interface VoteRepository {
  createVote(vote: Vote): Promise<void>;
}
