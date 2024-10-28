import { instance } from "../axios";
import { CreateSuggestRequest, SuggestListResponse } from "./type";

const router = "/suggestions";

export const CreateSuggest = async (data: CreateSuggestRequest) => {
  return await instance.post(`${router}`, data);
};

export const SuggestList = async () => {
  return await instance.get<SuggestListResponse>(`${router}`);
};
