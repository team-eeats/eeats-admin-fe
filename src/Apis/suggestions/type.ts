export type SuggestListResponse = {
  suggestions: Suggestions[];
};

export type Suggestions = {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: string;
  comment: SuggestComment[];
  accountId: string
};

export type SuggestComment = {
  id: string;
  content: string;
  createdAt: string;
};
