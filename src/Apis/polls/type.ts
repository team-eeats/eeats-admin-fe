export type CreateVoteRequest = {
  title: string;
  description: string;
  pollOptions: PollOptions[];
};

export type PollOptions = {
  description: string;
  imageUrl: string;
};

export type ModifyVoteRequest = {
  title: string;
  description: string;
};

export type VoteListResponse = {
  polls: Polls[];
};

export type Polls = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  options: Options[];
};

export type Options = {
  id: string;
  description: string;
  imageUrl: string;
  voteCount: number;
  voteRate: number;
};
