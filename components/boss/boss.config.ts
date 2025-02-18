import { Boss, BossId } from "./boss.type";

export const BOSS_CONFIG: Record<BossId, Boss> = {
  bogar: {
    id: "bogar",
    name: "Bogar",
    drops: [],
  },
  deathQuack: {
    id: "deathQuack",
    name: "Death Quack",
    drops: [],
  },
  krakoth: {
    id: "krakoth",
    name: "Krakoth",
    drops: [],
  },
  shift: {
    id: "shift",
    name: "Shift",
    drops: [],
  },
  flint: {
    id: "flint",
    name: "Flint",
    drops: [],
  },
  vulko: {
    id: "vulko",
    name: "Vulko",
    drops: [],
  },
  voidweaver: {
    id: "voidweaver",
    name: "Voidweaver",
    drops: [],
  },
  harold: {
    id: "harold",
    name: "Harold",
    drops: [],
  },
  quasar: {
    id: "quasar",
    name: "Quasar",
    drops: [],
  },
  breakfastClub: {
    id: "breakfastClub",
    name: "Breakfast Club",
    drops: [],
  },
  galax: {
    id: "galax",
    name: "Galax",
    drops: [],
  },
};
export const getBoss = (id: BossId) => BOSS_CONFIG[id];
