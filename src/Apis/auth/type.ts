export type ReissueResponse = {
  accessToken: string;
  refreshToken: string;
};

export type SignupRequest = {
  accountId: string;
  password: string;
  nickname: string;
};

export type LoginRequest = {
  accountId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
