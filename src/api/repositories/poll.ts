import { Poll } from "../schemas/poll";

export interface PollRepository {
  createPoll(poll: Poll): Promise<void>;
}
