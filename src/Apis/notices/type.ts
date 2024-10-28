export type CreateNoticeRequest = {
  title: string;
  content: string;
};

export type ModifyNoticeRequest = {
  title: string;
  content: string;
};

export type NoticeDetailResponse = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type NoticeListResponse = {
  notices: Notices[];
};

export type Notices = {
  id: string;
  title: string;
  createdAt: string;
};
