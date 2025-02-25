import { useState } from "react";

import { ItemRarity, ItemSlot, ItemStats } from "./item.type";

export const useSelectedItemAttributes = () => {
  const [selectedRarities, setSelectedRarities] = useState<ItemRarity[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<ItemSlot[]>([]);
  const [selectedStats, setSelectedStats] = useState<(keyof ItemStats)[]>([]);

  const toggleRarity = (rarity: ItemRarity) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity],
    );
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
