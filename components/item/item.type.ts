export const ITEM_STATS = [
  "attack",
  "defense",
  "speed",
  "stamina",
  "crit",
] as const;
export type ItemStats = { [key in (typeof ITEM_STATS)[number]]?: number };

export const ITEM_RARITIES = [
  "common",
  "rare",
  "epic",
  "legendary",
  "uber",
] as const;
export type ItemRarity = (typeof ITEM_RARITIES)[number];

export const ITEM_SLOTS = ["hat", "neck", "trinket"] as const;
export type ItemSlot = (typeof ITEM_SLOTS)[number];

export type Item = {
  id: ItemId;
  name: string;
  description?: string;
  baseStats: ItemStats;
  rarity: ItemRarity;
  slot: ItemSlot;
};

export const ITEM_IDS = [
  // common
  "retroPinkFlowerCollar",
  "redBowTie",
  "peachDolphinFloat",
  "turquoiseHeartCollar",
  "daisyChain",
  "leaf",
  "cosmosFlower",
  "pinkDandelion",
  "dandelion",
  "amanitaMushroom",

  // rare
  "diamondCollar",
  "redRibbonScarf",
  "blueRibbonScarf",
  "yellowRibbonScarf",
  "greenRibbonScarf",
  "lavenderRibbonScarf",
  "seaDolphinFloat",
  "blueButterflyChain",
  "platinumDiamondNecklace",
  "maroonRibbonScarf",
  "shitakeMushroom",
  "beeAntennae",
  "batHeadband",
  "rubyHairBow",
  "deathCapMushroom",
  "baseBallCap",
  "backwardsCap",
  "beigeBeret",
  "cherryBlossomCrown",
  "tropicalWreath",

  // epic
  "chunkyKnitScarf",
  "fallCamelScarf",
  "warmPinkScarf",
  "cowboyScarf",
  "aquaSpikedCollar",
  "hibiscusChain",
  "orangeButterflyChain",
  "goldDiamondNecklace",
  "blackSpikedCollar",
  "pinkSpikedCollar",
  "topHat",
  "cowboyHat",
  "coralSunHat",
  "yellowPalmCap",
  "bluePalmCap",
  "hibiscusFlower",
  "peonyWreath",
  "spiderHat",
  "purpleBeanie",
  "redHat",

  // trinkets
  "nailBuffers",
  "leatherJournal",
  "lycheeCandle",
  "yogaMat",
  "weightedBlanket",
  "stressBall",
  "fuzzyMittens",
  "espressoShot",
  "fluffyPillow",
  "softDumbbell",

  // legendary
  "rubyCollar",
  "sorrowScarf",
  "anxietyScarf",
  "angryScarf",
  "enviousScarf",
  "cakeScarf",
  "paisleyCowboyScarf",
  "checkeredScarf",
  "bejeweledPinkScarf",
  "mermaidScarf",
  "watermelonSpikedCollar",
  "lemonDolphinFloat",
  "serpentScarf",
  "spiderNecklace",
  "bubblegumScarf",
  "jellyfishScarf",
  "princesCollar",
  "rubberRingDonut",
  "wizardCape",
  "blueTie",
  "feltFedora",
  "titaniumTiara",
  "silkTopHat",
  "cakeHat",
  "floralCrochetHat",
  "wizardHat",
  "goldenHalo",
  "redHorns",
  "unicornHorns",
  "rainbowPartyHat",
  "bejeweledCowboyHat",
  "pirateHat",
  "iceCreamHat",
  "pinwheelHat",
  "pearlClocheHat",
  "icyTiara",
  "chefHat",
  "specialTopHat",
  "karenHair",
  "plungerHat",

  // uber
  "parasiteScarf",
  "dogeScarf",
  "alkalineEstrangementScarf",
  "adventureBuddyHat",
  "laserChickenHat",
  "lonelyHat",
] as const;

export type ItemId = (typeof ITEM_IDS)[number];
