import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { isItemRarity, ItemRarity, ItemSlot, ItemStats } from "./item.type";

export const useSelectedItemAttributes = () => {
  const { rarityParam } = useLocalSearchParams<{ rarityParam: string }>();
  const selectedRarities = (rarityParam?.split(",") || []).filter(isItemRarity);

  const [selectedSlots, setSelectedSlots] = useState<ItemSlot[]>([]);
  const [selectedStats, setSelectedStats] = useState<(keyof ItemStats)[]>([]);

  const toggleRarity = (rarity: ItemRarity) => {
    const newSelectedRarities = selectedRarities.includes(rarity)
      ? selectedRarities.filter((r) => r !== rarity)
      : [...selectedRarities, rarity];

    router.setParams({ rarityParam: newSelectedRarities.join(",") });
  };

  const toggleSlot = (slot: ItemSlot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot],
    );
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
