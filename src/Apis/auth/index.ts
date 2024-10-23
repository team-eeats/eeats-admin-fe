import { instance } from "../axios";
import {
  LoginRequest,
  LoginResponse,
  ReissueResponse,
  SignupRequest,
} from "./type";

const router = "/auth";

export const Reissue = async (refreshToken: string) => {
  return await instance.put<ReissueResponse>(`${router}/reissue`, {
    headers: {
      "Refresh-Token": `${refreshToken}`,
    },
  });
};

export const Signup = async (data: SignupRequest) => {
  return await instance.post(`${router}/signup`, data);
};

export const Login = async (data: LoginRequest) => {
  return await instance.post<LoginResponse>(`${router}/login`, data);
};
