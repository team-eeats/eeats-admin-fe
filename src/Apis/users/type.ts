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

export type MyPageResponse = {
  accountId: string;
  nickname: string;
  allergies: MyPageAllergiesType[];
};

export type MyPageAllergiesType = {
  type: Allergies;
};