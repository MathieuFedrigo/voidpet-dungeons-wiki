import { ItemRarity } from "@/components/item/item.type";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const voidpetRarityColors: Record<
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

const voidpetBasicColors = {
  background: "#fff",
  text: "#000",
  lightText: "#fff",
  separator: "#ECE9E9",
};

export const lightColors = {
  text: "#11181C",
  background: "#fff",
  tint: tintColorLight,
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: tintColorLight,
  voidpet: { rarity: voidpetRarityColors, basic: voidpetBasicColors },
};

export const darkColors = {
  text: "#ECEDEE",
  background: "#151718",
  tint: tintColorDark,
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: tintColorDark,
  voidpet: { rarity: voidpetRarityColors, basic: voidpetBasicColors },
} satisfies typeof lightColors;
