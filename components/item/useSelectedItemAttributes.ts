import { router, useLocalSearchParams } from "expo-router";

import {
  isItemRarity,
  isItemSlot,
  isItemStat,
  ItemRarity,
  ItemSlot,
  ItemStats,
} from "./item.type";

export const useSelectedItemAttributes = () => {
  const { rarityParam, slotParam, statsParam } = useLocalSearchParams<{
    rarityParam: string;
    slotParam: string;
    statsParam: string;
  }>();
  const selectedRarities = (rarityParam?.split(",") || []).filter(isItemRarity);
  const selectedSlots = (slotParam?.split(",") || []).filter(isItemSlot);
  const selectedStats = (statsParam?.split(",") || []).filter(isItemStat);

  const toggleRarity = (rarity: ItemRarity) => {
    const newSelectedRarities = selectedRarities.includes(rarity)
      ? selectedRarities.filter((r) => r !== rarity)
      : [...selectedRarities, rarity];

    router.setParams({ rarityParam: newSelectedRarities.join(",") });
  };

  const toggleSlot = (slot: ItemSlot) => {
    const newSelectedSlots = selectedSlots.includes(slot)
      ? selectedSlots.filter((s) => s !== slot)
      : [...selectedSlots, slot];

    router.setParams({ slotParam: newSelectedSlots.join(",") });
  };

  const toggleStat = (stat: keyof ItemStats) => {
    const newSelectedStats = selectedStats.includes(stat)
      ? selectedStats.filter((s) => s !== stat)
      : [...selectedStats, stat];

    router.setParams({ statsParam: newSelectedStats.join(",") });
  };

  return {
    selectedRarities,
    selectedSlots,
    selectedStats,
    toggleRarity,
    toggleSlot,
    toggleStat,
  };
};
