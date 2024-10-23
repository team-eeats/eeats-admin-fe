import { instance } from "../axios";
import {
  MyPageResponse,
  MyAllergiesResponse,
  ModifyMyInfoRequest,
  SetAllergiesRequest,
} from "./type";

const router = "/users";

export const MyPage = async () => {
  return await instance.get<MyPageResponse>(`${router}/my`);
};

export const MyAllergies = async () => {
  return await instance.get<MyAllergiesResponse>(`${router}/allergy`);
};

export const ModifyMyinfo = async (data: ModifyMyInfoRequest) => {
  return await instance.patch(`${router}/profile`, data);
};

export const SetAllergies = async (data: SetAllergiesRequest) => {
  return await instance.patch(`${router}/allergy`, data);
};
