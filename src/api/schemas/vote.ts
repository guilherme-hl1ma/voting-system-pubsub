import { ObjectId } from "@fastify/mongodb";

export interface Vote {
  pollId: ObjectId;
  voterId: ObjectId;
  candidateId: ObjectId;
  votedAt: number;
  schemaVersion: number[];
}
