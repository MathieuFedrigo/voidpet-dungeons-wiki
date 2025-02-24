import { ItemId } from "../item/item.type";

export type Boss = {
  id: BossId;
  name: string;
  drops: ItemId[];
  shortDescription: string;
};

export const BOSS_IDS = [
  "bogar",
  "deathQuack",
  "krakoth",
  "shift",
  "flint",
  "vulko",
  "voidweaver",
  "harold",
  "quasar",
  "breakfastClub",
  "galax",
] as const;

export type BossId = (typeof BOSS_IDS)[number];

export type RiveId =
  | Exclude<BossId, "breakfastClub">
  | "crackle"
  | "pop"
  | "snap";
