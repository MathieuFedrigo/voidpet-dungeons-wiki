import { ItemRarity } from "@/components/item/item.type";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const voidpetColors: Record<
  ItemRarity,
  { banner: string; itemBackground: string }
> = {
  common: {
    banner: "#79CAB9",
    itemBackground: "#B6E3D5",
  },
  rare: {
    banner: "#85C5D7",
    itemBackground: "#A8DCE1",
  },
  epic: {
    banner: "#DC8BF3",
    itemBackground: "#EFC8FB",
  },
  legendary: {
    banner: "#DBA654",
    itemBackground: "#F9DB6E",
  },
  uber: {
    banner: "#5969E3",
    itemBackground: "#444758",
  },
} as const;

export const lightColors = {
  text: "#11181C",
  background: "#fff",
  tint: tintColorLight,
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: tintColorLight,
  voidpet: voidpetColors,
} as const;

export const darkColors = {
  text: "#ECEDEE",
  background: "#151718",
  tint: tintColorDark,
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: tintColorDark,
  voidpet: voidpetColors,
} as const satisfies Record<
  keyof typeof lightColors,
  string | typeof voidpetColors
>;
