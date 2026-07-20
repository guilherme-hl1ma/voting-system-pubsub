import { ObjectId } from "@fastify/mongodb";

export interface VoteCreateDto {
  pollId: ObjectId;
  voterId: ObjectId;
  candidateId: ObjectId;
}
