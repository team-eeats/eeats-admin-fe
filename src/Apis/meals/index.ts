import { instance } from "../axios";
import { MealsRespond } from "./type";

export const Meals = async (date: string) => {
  return await instance.get<MealsRespond>("/", {
    params: { date },
  });
};
