import { instance } from "../axios";
import { SuggestListResponse } from "./type";

const router = "/suggestions";

export const SuggestList = async () => {
  return await instance.get<SuggestListResponse>(`${router}`);
};
