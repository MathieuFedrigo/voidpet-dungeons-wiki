import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

import {
  isItemRarity,
  isItemSlot,
  ItemRarity,
  ItemSlot,
  ItemStats,
} from "./item.type";

export const useSelectedItemAttributes = () => {
  const { rarityParam, slotParam } = useLocalSearchParams<{
    rarityParam: string;
    slotParam: string;
  }>();
  const selectedRarities = (rarityParam?.split(",") || []).filter(isItemRarity);
  const selectedSlots = (slotParam?.split(",") || []).filter(isItemSlot);

  const [selectedStats, setSelectedStats] = useState<(keyof ItemStats)[]>([]);

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
    setSelectedStats((prev) =>
      prev.includes(stat) ? prev.filter((s) => s !== stat) : [...prev, stat],
    );
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
