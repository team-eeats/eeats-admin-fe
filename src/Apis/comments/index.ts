import { useMutation } from "react-query";
import { instance } from "../axios";
import { CreateCommentRequest } from "./type";

const router = "/comments";

export const CreateComment = (suggestionId: string) => {
  return useMutation(
    async (createCommentData: CreateCommentRequest) => {
      const { data } = await instance.post(
        `${router}/${suggestionId}`,
        createCommentData
      );
      return data;
    },
    {
      onError: (error: Error) => {
        console.error("댓글 작성 에러: ", error.message);
      },
    }
  );
};