import { instance } from "../axios";
import { MyPageResponse } from "./type";

const router = "/users";

export const MyPage = async () => {
  return await instance.get<MyPageResponse>(`${router}/my`);
};
