import { useMutation } from "react-query";
import { instance } from "../axios";
import {
  CreateNoticeRequest,
  ModifyNoticeRequest,
  NoticeDetailResponse,
  NoticeListResponse,
} from "./type";

const router = "/notices";

export const CreateNotice = async (data: CreateNoticeRequest) => {
  return await instance.post(`${router}`, data);
};

export const ModifyNotice = (noticeId: string) => {
  return useMutation(
    async (modifyNoticeData: ModifyNoticeRequest) => {
      const { data } = await instance.patch(
        `${router}/${noticeId}`,
        modifyNoticeData
      );
      return data;
    },
    {
      onError: (error: Error) => {
        console.error("공지사항 수정 에러: ", error.message);
      },
    }
  );
};

export const DeleteNotice = async (noticeId: string) => {
  return await instance.delete(`${router}/${noticeId}`);
};

export const NoticeDetail = async (noticeId: number) => {
  return await instance.get<NoticeDetailResponse>(`${router}/${noticeId}`);
};

export const NoticeList = async () => {
  return await instance.get<NoticeListResponse>(`${router}`);
};
