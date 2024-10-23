export type Allergies =
  | "EGGS"
  | "DAIRY"
  | "BUCKWHEAT"
  | "PEANUTS"
  | "SOY"
  | "WHEAT"
  | "MACKEREL"
  | "CRAB"
  | "SHRIMP"
  | "PORK"
  | "PEACH"
  | "TOMATO"
  | "SULPHITES"
  | "WALNUTS"
  | "CHICKEN"
  | "BEEF"
  | "SQUID"
  | "SHELLFISH"
  | "PINE_NUTS";

export enum AllergiesNumber {
  EGGS = 1,
  DAIRY = 2,
  BUCKWHEAT = 3,
  PEANUTS = 4,
  SOY = 5,
  WHEAT = 6,
  MACKEREL = 7,
  CRAB = 8,
  SHRIMP = 9,
  PORK = 10,
  PEACH = 11,
  TOMATO = 12,
  SULPHITES = 13,
  WALNUTS = 14,
  CHICKEN = 15,
  BEEF = 16,
  SQUID = 17,
  SHELLFISH = 18,
  PINE_NUTS = 19,
}

export type MyPageResponse = {
  accountId: string;
  nickname: string;
  allergies: MyPageAllergiesType[];
};

export type MyPageAllergiesType = {
  type: Allergies;
};

export type MyAllergiesResponse = {
  allergies: MyAllergy[];
};

export type MyAllergy = {
  id: string;
  type: Allergies;
};

export type ModifyMyInfoRequest = {
  nickname: string;
};

export type SetAllergiesRequest = {
  type: AllergiesNumber;
};
