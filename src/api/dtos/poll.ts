import { Candidate } from "../schemas/candidate";
import { PollStatus } from "../schemas/poll";

export interface PollCreateDto {
  title: string;
  description: string;
  status: PollStatus;
  totalVotes: number;
  candidates: Candidate[];
  schemaVersion: number[];
}
