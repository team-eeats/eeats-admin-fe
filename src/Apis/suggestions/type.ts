export type CreateSuggestRequest = {
  title: string;
  content: string;
};

export type SuggestListResponse = {
  suggestions: Suggestions[];
};

export type Suggestions = {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: string;
  coment: SuggestComment[];
};

export type SuggestComment = {
  id: string;
  content: string;
  createdAt: string;
};
