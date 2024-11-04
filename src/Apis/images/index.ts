import { instance } from "../axios";
import { UploadImagesResponse } from "./type";

const router = "/images";

export const UploadImages = async (image: Blob) => {
  const form = new FormData();
  form.append("image", image);

  return await instance.post<UploadImagesResponse>(`${router}`, form);
};
