export type CreateCommentRequest = {
  content: string;
};

export type Suggestions = {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: string;
  comment: {
    id: string,
    content: string
  }
};