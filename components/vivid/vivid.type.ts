export const VIVID_RARITIES = ["Rare", "Fabled", "Mythical", "Absurd"] as const;
export type VividRarity = (typeof VIVID_RARITIES)[number];

export const VIVID_TYPES = [
  "Void",
  "Wood",
  "Fire",
  "Water",
  "Metal",
  "Earth",
] as const;
export type VividType = (typeof VIVID_TYPES)[number];

export type Vivid = {
  name: VividName;
  rarity: VividRarity;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  description: string;
  cost: number;
  type: VividType;
};

export const VIVID_NAMES = [
  // Void
  "Phantom",
  "Ephemeral",
  "Celestial",
  "Cataclysmic",

  "Jaded",
  "Ethereal",
  "Illusive",
  "Cryptic",

  "Arcane",
  "Resolute",
  "Fathomless",
  "Elemental",

  "Corrosive",
  "Unidentified",
  "Intoxicating",
  "Tartarean",

  // Wood
  "Allegiant",
  "Adamant",
  "Resonant",
  "Sacral",

  "Veracious",
  "Diaphanous",
  "Fictile",
  "Tectonic",

  "Apocryphal",
  "Primeval",
  "Sepulchral",
  "Exalted",

  "Pestilent",
  "Leviathan",
  "Blasphemous",
  "Antediluvian",
] as const;
export type VividName = (typeof VIVID_NAMES)[number];
