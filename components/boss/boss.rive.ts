/* eslint-disable @typescript-eslint/no-require-imports */
import { BossId } from "./boss.type";

export type RiveId =
  | Exclude<BossId, "breakfastClub">
  | "crackle"
  | "pop"
  | "snap";

export const RIVE_RESOURCES: Record<RiveId, string> = {
  bogar: require("../../assets/rive/bogar.riv"),
  deathQuack: require("../../assets/rive/deathQuack.riv"),
  krakoth: require("../../assets/rive/krakoth.riv"),
  shift: require("../../assets/rive/shift.riv"),
  flint: require("../../assets/rive/flint.riv"),
  vulko: require("../../assets/rive/vulko.riv"),
  voidweaver: require("../../assets/rive/voidweaver.riv"),
  harold: require("../../assets/rive/harold.riv"),
  quasar: require("../../assets/rive/quasar.riv"),
  galax: require("../../assets/rive/galax.riv"),
  crackle: require("../../assets/rive/crackle.riv"),
  pop: require("../../assets/rive/pop.riv"),
  snap: require("../../assets/rive/snap.riv"),
};

export const getRiveResource = (id: RiveId) => RIVE_RESOURCES[id];
