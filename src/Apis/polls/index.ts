import { useMutation } from "react-query";
import { instance } from "../axios";
import { CreateVoteRequest, ModifyVoteRequest, VoteListResponse } from "./type";

const router = "/polls";

export const Createvote = async (data: CreateVoteRequest) => {
  return await instance.post(`${router}`, data);
};

export const ModifyVote = (pollId: string) => {
  return useMutation(
    async (modifyVoteData: ModifyVoteRequest) => {
      const { data } = await instance.patch(
        `${router}/${pollId}`,
        modifyVoteData
      );
      return data;
    },
    {
      onError: (error: Error) => {
        console.error("투표 수정 에러: ", error.message);
      },
    }
  );
};

export const DeleteVote = async (pollId: string) => {
  return await instance.delete(`${router}/${pollId}`);
};

export const DeleteVoteOption = async (pollOptionId: string) => {
  return await instance.delete(`${router}/options/${pollOptionId}`);
};

export const AddVoteOption = async (pollId: string) => {
  return await instance.post(`${router}/options/${pollId}`);
};

export const VoteList = async () => {
  return await instance.get<VoteListResponse>(`${router}`);
};
