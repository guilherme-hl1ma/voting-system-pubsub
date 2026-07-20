import { Candidate } from "./candidate";

export enum PollStatus {
  OPEN = "open",
  CLOSED = "closed",
}

export interface Poll {
  title: string;
  description: string;
  status: PollStatus;
  totalVotes: number;
  candidates: Candidate[];
  schemaVersion: number[];
}
